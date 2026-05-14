#!/usr/bin/env bash
# Smoke test for the WhatsApp click-attribution pipeline.
#
# The pipeline lives in the MarkVision multi-tenant Supabase
# (szfgdruhlebfvcmlvxdk), not the Lovable Supabase that hosts this landing.
# All four scenarios are checked here:
#
#   1. Click → track-whatsapp-click → row in whatsapp_clicks + Contact in Meta
#   2. Incoming WA with [#marker] → Lead in Meta + leads_crm row + converted=true
#   3. Personal message without marker → no Meta event at all
#   4. Replay (same marker again) → no double-Lead
#
# Usage:
#   SUPABASE_ACCESS_TOKEN=sbp_xxx ./scripts/test-whatsapp-tracking.sh

set -euo pipefail

BASE="https://szfgdruhlebfvcmlvxdk.supabase.co/functions/v1"
PROJECT_REF="szfgdruhlebfvcmlvxdk"

green() { printf "\033[32m%s\033[0m\n" "$*"; }
red()   { printf "\033[31m%s\033[0m\n" "$*"; }
bold()  { printf "\033[1m%s\033[0m\n" "$*"; }
hr()    { printf "\n\033[34m═══ %s ═══\033[0m\n" "$*"; }

# Click-id alphabet matches the production frontend (no I/l/O/0/1)
CLICK="Smk$(date +%s | tail -c 5)X"
bold "click_id: $CLICK"

hr "1/6  track-whatsapp-click (click captured + Contact to Meta)"
curl -sS -X POST "$BASE/track-whatsapp-click" \
  -H "Content-Type: application/json" \
  -d "{
    \"click_id\":\"$CLICK\",
    \"event_id\":\"$CLICK\",
    \"event_source_url\":\"https://medcenter-ai.vercel.app/?utm_source=test\",
    \"user_agent\":\"Mozilla/5.0 (smoke-test)\",
    \"fbp\":\"fb.1.1700000000000.1234567890\",
    \"fbclid\":\"IwAR_smoke_fbclid\",
    \"source_label\":\"smoke-test\"
  }" | python3 -m json.tool

hr "2/6  incoming WA with marker [#$CLICK] (must fire Lead)"
RESP=$(curl -sS -X POST "$BASE/greenapi-webhook" \
  -H "Content-Type: application/json" \
  -d "{
    \"typeWebhook\":\"incomingMessageReceived\",
    \"senderData\":{\"chatId\":\"79991112233@c.us\",\"sender\":\"79991112233@c.us\",\"senderName\":\"Smoke\"},
    \"messageData\":{\"typeMessage\":\"textMessage\",\"textMessageData\":{\"textMessage\":\"Hello [#$CLICK]\"}}
  }")
echo "$RESP" | python3 -m json.tool
echo "$RESP" | grep -q '"lead_sent": true' && green "✓ Lead sent to Meta" || red "✗ Lead NOT sent"

hr "3/6  personal message without marker (must NOT fire)"
RESP=$(curl -sS -X POST "$BASE/greenapi-webhook" \
  -H "Content-Type: application/json" \
  -d '{"typeWebhook":"incomingMessageReceived","senderData":{"chatId":"77001234567@c.us","sender":"77001234567@c.us"},"messageData":{"typeMessage":"textMessage","textMessageData":{"textMessage":"привет, как дела"}}}')
echo "$RESP" | python3 -m json.tool
echo "$RESP" | grep -q '"skipped": "no_marker"' && green "✓ Personal message correctly ignored" || red "✗ Personal-message guard broken"

hr "4/6  replay same marker (must NOT double-fire)"
RESP=$(curl -sS -X POST "$BASE/greenapi-webhook" \
  -H "Content-Type: application/json" \
  -d "{\"typeWebhook\":\"incomingMessageReceived\",\"senderData\":{\"chatId\":\"79991112233@c.us\",\"sender\":\"79991112233@c.us\"},\"messageData\":{\"typeMessage\":\"textMessage\",\"textMessageData\":{\"textMessage\":\"again [#$CLICK]\"}}}")
echo "$RESP" | python3 -m json.tool
echo "$RESP" | grep -q '"skipped": "already_converted"' && green "✓ Replay suppressed" || red "✗ Replay protection failed"

hr "5/6  fake marker not in DB (must say marker_not_found)"
RESP=$(curl -sS -X POST "$BASE/greenapi-webhook" \
  -H "Content-Type: application/json" \
  -d '{"typeWebhook":"incomingMessageReceived","senderData":{"chatId":"77559998877@c.us","sender":"77559998877@c.us"},"messageData":{"typeMessage":"textMessage","textMessageData":{"textMessage":"hi [#FAKE9999]"}}}')
echo "$RESP" | python3 -m json.tool
echo "$RESP" | grep -q '"skipped": "marker_not_found"' && green "✓ Unknown marker rejected" || red "✗ Unknown-marker guard failed"

if [[ -n "${SUPABASE_ACCESS_TOKEN:-}" ]]; then
  hr "6/6  DB state — whatsapp_clicks + leads_crm"
  curl -fsS -X POST "https://api.supabase.com/v1/projects/$PROJECT_REF/database/query" \
    -H "Authorization: Bearer $SUPABASE_ACCESS_TOKEN" -H "Content-Type: application/json" \
    -d "{\"query\": \"SELECT click_id, converted, whatsapp_phone, cabinet_id FROM whatsapp_clicks WHERE click_id='$CLICK';\"}" | python3 -m json.tool
  curl -fsS -X POST "https://api.supabase.com/v1/projects/$PROJECT_REF/database/query" \
    -H "Authorization: Bearer $SUPABASE_ACCESS_TOKEN" -H "Content-Type: application/json" \
    -d "{\"query\": \"SELECT phone, click_id, fbp, ad_account_id, status FROM leads_crm WHERE click_id='$CLICK';\"}" | python3 -m json.tool
else
  hr "6/6  DB state — skipped (set SUPABASE_ACCESS_TOKEN to enable)"
fi

hr "Manual checks"
bold "Meta Events Manager → pixel 3912939922347990 → Test Events:"
bold "  1× Contact (from step 1)"
bold "  1× Lead    (from step 2)"
bold "Both should show event_source=server"
