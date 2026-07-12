#!/usr/bin/env bash
# =====================================================
#  Cenix Publish — double-click to deploy
#  This wrapper opens Terminal, cd's into the project,
#  and runs deploy.sh. Built-in audio/visual feedback.
# =====================================================

# The .command file lives at project root, so its directory IS the project.
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

echo ""
echo "🚀 Cenix Profile — Publish"
echo "   Folder: $SCRIPT_DIR"
echo ""

bash ./deploy.sh

STATUS=$?

echo ""
if [ $STATUS -eq 0 ]; then
  echo "═══════════════════════════════════════════"
  echo "   Done. You can close this window."
  echo "═══════════════════════════════════════════"
else
  echo "═══════════════════════════════════════════"
  echo "   ❌ Deploy failed (exit $STATUS)."
  echo "   Scroll up to see what went wrong."
  echo "═══════════════════════════════════════════"
fi

# Keep Terminal open so anh đọc được output
echo ""
read -p "Press Enter to close this window..."
