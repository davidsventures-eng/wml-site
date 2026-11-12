# Mission Funded ledger (/mission/)

Source for https://wonderfullymadelabs.com/mission/. Not deployed (see .vercelignore).

## Update steps
1. Edit `ledger.json`: `updated` date, `in` (founder contributions, sales, outside contributions), `out` rows `[name, description, amount, when]`, `given`.
   Founder contributions = total spent minus sales and outside money (break-even view).
2. `python3 _tools/mission/build_mission.py` writes `mission/index.html`. It asserts every verse matches WEBU exactly.
3. Check at 1366px and 375px, commit with the Co-authored-by trailer, push (Vercel deploys).

## Rules
- Public page shows FUNDED TO DATE only (sources: founder, sales, outside; given away). Never list individual charges or cost line items. `out` in ledger.json is a private record for the totals.
- Keep the "not a nonprofit / not a donation / not tax-deductible" notice.
- Anonymous: founder money is one line. No names, surnames or places.
- Never claim everything is free. Sign off "To God be the glory."
- Scripture: WEBU, word for word, labeled "(WEBU)"; partial verses use "from <ref>".
- Credits: $0.01 each. Count only WML use; leave out credits used for unrelated projects.
  On the Usage screen, "Org credits" is credits USED, not a balance.

## Ledger history
- Nov 12, 2026: launched. In $1,947.22 (all founder). Out: hardware $1,000; credits $685.14 (7 purchases, $700, minus 1,486 non-WML credits); Max 1 month $200; DBA $40; domain $11.08; ElevenLabs $11. Sales $0, given $0.
- Not yet counted (no receipt found): Enterprise seat fees, Max months after June, Etsy listing fees. Pro annual ($200, May 31) left out as pre-WML.
