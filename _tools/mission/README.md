# Mission Funded ledger (/mission/)

Source for https://wonderfullymadelabs.com/mission/. Not deployed (see .vercelignore).

## Update steps
1. Edit `ledger.json`: `updated` date, `in` (anonymous founder contributions, other contributions), `given`.
   The public ledger has no separate sales line or sales KPI. Reconcile any future purchase revenue privately and retain the distinction between purchases and gifts; do not silently relabel sales as gifts.
   Founder contributions = total costs paid minus sales and outside money (break-even view). Work out costs from the private cost file.
2. `python3 _tools/mission/build_mission.py` writes `mission/index.html`. It asserts every verse matches WEBU exactly.
3. Check at 1366px and 375px, commit with the Co-authored-by trailer, push (Vercel deploys).

## Rules
- Public page shows FUNDED TO DATE only (anonymous founder contributions, other contributions; given away). Never list individual charges or cost line items. Cost detail stays out of this public repo.
- Keep the "not a nonprofit / not a donation / not tax-deductible" notice.
- Anonymous: founder money is one line. No names, surnames or places.
- Never claim everything is free. Sign off "To God be the glory."
- Scripture: WEBU, word for word, labeled "(WEBU)"; partial verses use "from <ref>".
- Credits cost $0.01 each; count only WML use. On the Usage screen, "Org credits" is credits USED, not a balance.

## Ledger history
- Nov 12, 2026: launched. Funded to date $1,947.22 (all founder). Sales $0, given $0.
- Cost detail is kept privately in the Project files (mission/costs_private.md), not in this public repo.
