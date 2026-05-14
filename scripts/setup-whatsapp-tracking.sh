#!/usr/bin/env bash
# One-shot installer for the WhatsApp-attributed Meta CAPI pipeline.
#
# What it does (in order):
#   1. Reads secrets from scripts/.env.setup (gitignored).
#   2. Verifies you're logged into the right Supabase org.
#   3. Links the project, pushes migrations, sets secrets.
#   4. Deploys all four edge functions.
#   5. Wires Green-API webhook to whatsapp-incoming.
#   6. Sanity-checks the whole thing.
#
# Run once after `supabase login` with the medcenter-ai owner account.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
ENV_FILE="$SCRIPT_DIR/.env.setup"

red()    { printf "\033[31m%s\033[0m\n" "$*"; }
green()  { printf "\033[32m%s\033[0m\n" "$*"; }
yellow() { printf "\033[33m%s\033[0m\n" "$*"; }
bold()   { printf "\033[1m%s\033[0m\n" "$*"; }
hr()     { printf "\n\033[34m═══ %s ═══\033[0m\n" "$*"; }

if [[ ! -f "$ENV_FILE" ]]; then
  red "Missing $ENV_FILE"
  yellow "Copy scripts/.env.setup.example → scripts/.env.setup and fill it in."
  exit 1
fi

set -a
# shellcheck disable=SC1090
source "$ENV_FILE"
set +a

required=(
  PROJECT_REF
  WHATSAPP_WEBHOOK_TOKEN
  GREEN_API_INSTANCE_ID
  GREEN_API_TOKEN
  GREEN_API_BASE_URL
  META_PIXEL_ID
  META_CAPI_ACCESS_TOKEN
)
for v in "${required[@]}"; do
  if [[ -z "${!v:-}" ]]; then
    red "Missing env var: $v (set it in scripts/.env.setup)"
    exit 1
  fi
done

WEBHOOK_URL="https://${PROJECT_REF}.supabase.co/functions/v1/whatsapp-incoming?token=${WHATSAPP_WEBHOOK_TOKEN}"

hr "Preflight"
command -v supabase >/dev/null || { red "supabase CLI not installed"; exit 1; }
command -v curl >/dev/null || { red "curl not installed"; exit 1; }
command -v jq >/dev/null || yellow "jq not installed — output won't be pretty-printed"

bold "Project: $PROJECT_REF"
bold "Webhook URL: $WEBHOOK_URL"
bold "Pixel:   $META_PIXEL_ID"

if ! supabase projects list 2>/dev/null | grep -q "$PROJECT_REF"; then
  red "Supabase CLI is not logged into an account that can see project $PROJECT_REF."
  yellow "Run: supabase login   (use the account that owns medcenter-ai)"
  yellow "Then re-run this script."
  exit 1
fi
green "✓ CLI sees the project"

hr "1/5  Link project"
cd "$REPO_ROOT"
supabase link --project-ref "$PROJECT_REF" >/dev/null
green "✓ Linked"

hr "2/5  Set secrets"
supabase secrets set \
  WHATSAPP_WEBHOOK_TOKEN="$WHATSAPP_WEBHOOK_TOKEN" \
  GREEN_API_INSTANCE_ID="$GREEN_API_INSTANCE_ID" \
  GREEN_API_TOKEN="$GREEN_API_TOKEN" \
  GREEN_API_BASE_URL="$GREEN_API_BASE_URL" \
  META_PIXEL_ID="$META_PIXEL_ID" \
  META_CAPI_ACCESS_TOKEN="$META_CAPI_ACCESS_TOKEN" \
  --project-ref "$PROJECT_REF" >/dev/null
green "✓ Secrets set"

hr "3/5  Push DB migrations"
supabase db push --project-ref "$PROJECT_REF"
green "✓ Migration applied (whatsapp_clicks table created)"

hr "4/5  Deploy edge functions"
for fn in track-whatsapp-click whatsapp-incoming meta-capi-lead submit-diagnostic-lead; do
  bold "  → $fn"
  supabase functions deploy "$fn" --project-ref "$PROJECT_REF" --no-verify-jwt >/dev/null
  green "    ✓ deployed"
done

hr "5/5  Wire Green-API webhook"
PAYLOAD=$(cat <<JSON
{
  "webhookUrl": "$WEBHOOK_URL",
  "webhookUrlToken": "",
  "incomingWebhook": "yes",
  "outgoingWebhook": "no",
  "outgoingMessageWebhook": "no",
  "outgoingAPIMessageWebhook": "no",
  "stateWebhook": "no",
  "deviceWebhook": "no",
  "statusInstanceWebhook": "no",
  "incomingCallWebhook": "no",
  "outgoingCallWebhook": "no",
  "pollMessageWebhook": "no",
  "editedMessageWebhook": "no",
  "deletedMessageWebhook": "no",
  "incomingBlockWebhook": "no"
}
JSON
)
RESPONSE=$(curl -fsS -X POST \
  "${GREEN_API_BASE_URL}/waInstance${GREEN_API_INSTANCE_ID}/setSettings/${GREEN_API_TOKEN}" \
  -H "Content-Type: application/json" \
  -d "$PAYLOAD")
echo "Green-API response: $RESPONSE"
green "✓ Webhook wired: incoming messages will hit whatsapp-incoming"

hr "Sanity checks"
bold "  → ping whatsapp-incoming (should respond 200/skipped)"
PING=$(curl -sS -o /dev/null -w "%{http_code}" -X POST \
  "$WEBHOOK_URL" \
  -H "Content-Type: application/json" \
  -d '{"typeWebhook":"ping"}')
[[ "$PING" == "200" ]] && green "    ✓ HTTP 200" || red "    ✗ HTTP $PING"

bold "  → verify Green-API settings"
SETTINGS=$(curl -fsS "${GREEN_API_BASE_URL}/waInstance${GREEN_API_INSTANCE_ID}/getSettings/${GREEN_API_TOKEN}")
if command -v jq >/dev/null; then
  echo "$SETTINGS" | jq '{webhookUrl, incomingWebhook, outgoingWebhook, stateWebhook}'
else
  echo "$SETTINGS"
fi

hr "Done"
green "✅ Pipeline is live."
cat <<EOF

Next:
  1. Open the landing page in an incognito tab.
  2. Click "Записаться" → WhatsApp opens with [#xxxxxxxx] in the text.
  3. Send the message FROM THAT NUMBER (not from +77472842595 itself).
  4. In Meta Events Manager → Test Events, you should see "Lead" within ~30s.
  5. In Supabase → whatsapp_clicks table, the click should now have
     converted=true and whatsapp_phone filled.

Personal messages without a [#marker] are ignored — nothing leaks to Meta.

Cleanup:
  After successful deploy, delete scripts/.env.setup or rotate the tokens.
EOF
