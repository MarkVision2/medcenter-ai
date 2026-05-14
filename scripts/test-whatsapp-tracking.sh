#!/usr/bin/env bash
# Smoke test for the WhatsApp tracking pipeline.
# Run AFTER setup-whatsapp-tracking.sh has finished successfully.
#
# It does:
#   1. Hits track-whatsapp-click with a synthetic click → expects a row in
#      whatsapp_clicks and a Contact event in Meta Events Manager.
#   2. Posts a Green-API-shaped fake incoming message with the click_id marker
#      to whatsapp-incoming → expects the click to flip to converted=true and
#      a Lead event in Meta Events Manager.

set -euo pipefail
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ENV_FILE="$SCRIPT_DIR/.env.setup"

red()   { printf "\033[31m%s\033[0m\n" "$*"; }
green() { printf "\033[32m%s\033[0m\n" "$*"; }
bold()  { printf "\033[1m%s\033[0m\n" "$*"; }
hr()    { printf "\n\033[34m═══ %s ═══\033[0m\n" "$*"; }

[[ -f "$ENV_FILE" ]] || { red "Missing $ENV_FILE"; exit 1; }
set -a; source "$ENV_FILE"; set +a

CLICK_ID="testAB$(date +%s | tail -c 5)"
BASE="https://${PROJECT_REF}.supabase.co/functions/v1"

hr "1. Synthetic click → track-whatsapp-click"
RESP1=$(curl -fsS -X POST "$BASE/track-whatsapp-click" \
  -H "Content-Type: application/json" \
  -d "$(cat <<JSON
{
  "click_id": "$CLICK_ID",
  "event_id": "$CLICK_ID",
  "event_source_url": "https://medcenter-ai.example.com/?test=1",
  "user_agent": "Mozilla/5.0 (test bot)",
  "fbp": "fb.1.1700000000000.1234567890",
  "fbc": "fb.1.1700000000000.IwAR_fake_fbc_for_testing",
  "fbclid": "IwAR_fake_fbc_for_testing",
  "referrer": "https://test.example.com",
  "utm_source": "facebook",
  "utm_medium": "cpc",
  "utm_campaign": "test"
}
JSON
)")
echo "$RESP1"
green "✓ click_id=$CLICK_ID written"

hr "2. Verify click is in whatsapp_clicks (anon read blocked → use Studio)"
bold "Open Supabase Studio → Table Editor → whatsapp_clicks → look for $CLICK_ID"
bold "It should have fbp, fbc, fbclid filled and converted=false."

hr "3. Fake Green-API incoming with marker"
WEBHOOK="$BASE/whatsapp-incoming?token=${WHATSAPP_WEBHOOK_TOKEN}"
RESP2=$(curl -fsS -X POST "$WEBHOOK" \
  -H "Content-Type: application/json" \
  -d "$(cat <<JSON
{
  "typeWebhook": "incomingMessageReceived",
  "instanceData": { "idInstance": $GREEN_API_INSTANCE_ID, "wid": "77472842595@c.us" },
  "timestamp": $(date +%s),
  "idMessage": "test-msg-$CLICK_ID",
  "senderData": {
    "chatId": "79991112233@c.us",
    "sender": "79991112233@c.us",
    "senderName": "Test User"
  },
  "messageData": {
    "typeMessage": "textMessage",
    "textMessageData": {
      "textMessage": "Здравствуйте! Хочу записаться. [#$CLICK_ID]"
    }
  }
}
JSON
)")
echo "$RESP2"

if echo "$RESP2" | grep -q '"lead_sent":true'; then
  green "✓ Lead sent to Meta CAPI for click $CLICK_ID"
else
  red "✗ Lead was NOT sent. Check function logs:"
  red "  supabase functions logs whatsapp-incoming --project-ref $PROJECT_REF"
fi

hr "4. Replay protection — same message again should be ignored"
RESP3=$(curl -fsS -X POST "$WEBHOOK" \
  -H "Content-Type: application/json" \
  -d "$(cat <<JSON
{
  "typeWebhook": "incomingMessageReceived",
  "senderData": { "sender": "79991112233@c.us" },
  "messageData": {
    "typeMessage": "textMessage",
    "textMessageData": { "textMessage": "again [#$CLICK_ID]" }
  }
}
JSON
)")
echo "$RESP3"
if echo "$RESP3" | grep -q 'already_converted'; then
  green "✓ Duplicate suppressed — no double-Lead"
else
  red "✗ Replay protection looks off"
fi

hr "5. Personal-message guard — no marker → must be skipped"
RESP4=$(curl -fsS -X POST "$WEBHOOK" \
  -H "Content-Type: application/json" \
  -d '{"typeWebhook":"incomingMessageReceived","senderData":{"sender":"77001234567@c.us"},"messageData":{"typeMessage":"textMessage","textMessageData":{"textMessage":"привет, как дела"}}}')
echo "$RESP4"
if echo "$RESP4" | grep -q 'no_marker'; then
  green "✓ Personal message correctly ignored — nothing leaked to Meta"
else
  red "✗ Personal-message guard failed"
fi

hr "Manual checks"
bold "Meta Events Manager → Test Events:"
bold "  - 1× Contact (from step 1)"
bold "  - 1× Lead    (from step 3)"
bold "Pixel: $META_PIXEL_ID"
bold "Both should show 'event_source=server' and matching event_id=$CLICK_ID"
