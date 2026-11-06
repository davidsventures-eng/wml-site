# Wonderfully Made Labs — Website

Static site for **wonderfullymadelabs.com** — a faith + science ministry by David Crider.
Wonder first, faith stated plainly. Free to read: patient/caregiver support, journals, and
the 31-day prayer plan. To God be all the glory. (Psalm 139:14)

This repo is a plain static site. There is **no build step** — Vercel serves the files as-is.

---

## Structure

```
index.html            Home / single-page React app (loaded via app.js, no bundler)
app.js                Main React app (UMD React from vendor/, no build required)
styles.css            Site styles (cache-busted via ?v= query in index.html)
still-tool.html       Standalone: "Where are you today?" interactive Still tool
river-detective.html  Standalone: River Detective interactive
heart/                Standalone: heart module pages
prayer/               Standalone: 31-day prayer companion
assets/               Images, PDFs (journals), pin art, favicons
vendor/               Third-party libs (React, etc.) served locally
vercel.json           Cache-control headers (no-cache on all .html)
```

Other `*.js` files (adult, cancer, content, essays, module2/3, patient) are content/data
modules loaded by `index.html`.

---

## Deploying to Vercel

### One-time setup (connect this repo)
1. Push this repo to GitHub (see "First push" below).
2. In Vercel, open the **wml_vercel_deploy** project → **Settings → Git** →
   **Connect** this GitHub repository.
3. Framework preset: **Other**. Build command: **none**. Output directory: **`.`** (root).

Once connected, **every push to the main branch auto-deploys to production** — no tokens,
no permission walls.

### Manual deploy from your own machine (alternative)
```
vercel login
vercel --prod        # choose project: wml_vercel_deploy
```

---

## First push (to a new GitHub repo)

```
# from inside this folder
git init                       # already done in this package
git add -A
git commit -m "Initial commit"  # already done in this package

# create an empty repo on github.com first (no README/gitignore), then:
git remote add origin https://github.com/<your-username>/<repo-name>.git
git branch -M main
git push -u origin main
```

After the push, connect the repo in Vercel (steps above) and it deploys automatically.

---

## Cache-busting

`index.html` appends `?v=YYYYMMDD<letter>` to `styles.css` and `app.js`. **Bump this
version string** whenever you change `app.js` or `styles.css`, so browsers fetch the new
file instead of a cached copy. Current: `app.js?v=20260807e`.

`vercel.json` already sets `no-cache` on all `.html` files, so HTML always updates immediately.

---

## The Still interactive tool (`still-tool.html`)

A short, honest set of questions that routes to one of six emotions — The Noise, The Anger,
The Impatience, The Work, The Return, The Stillness. Each result shows:

- **What's happening in your body** — grounded in peer-reviewed science (with citations)
- **A word from Scripture** — several relevant verses per emotion
- **A small practice** — a 90-second stillness practice
- **A safety + legal notice on every result** — call 911 for medical emergencies, 988 for
  the Suicide & Crisis Lifeline; faith/education resource, not medical or psychological advice

It links to the free journal PDF (`assets/wml_still_journal.pdf`) for download and offers an
optional Substack subscribe **alongside** the download (never replacing it). Nothing to buy.

The tool is linked from the **Still** journal card on the home page via a
"Try the interactive tool →" button.
