# Credit-Fixed — Site Rebuild

Static, dependency-free site (plain HTML/CSS/JS) — same stack as notebrokerpros.com
and cybersecglobal.services: push to a GitHub repo, serve with GitHub Pages, point
GoDaddy DNS at it.

## Deploy to GitHub Pages (Cybersec120 account)

1. **Create the repo** — on github.com, under Cybersec120, create a new repo
   called `credit-fixed-site` (Public — GitHub Pages needs a public repo unless
   you're on GitHub Pro/Team). Don't initialize with a README (this folder
   already has one).

2. **Push this folder** — from inside this extracted folder, in Git Bash:
   ```
   git init
   git add -A
   git commit -m "Initial site rebuild"
   git branch -M main
   git remote add origin https://github.com/Cybersec120/credit-fixed-site.git
   git push -u origin main
   ```

3. **Turn on Pages** — repo → Settings → Pages → Source: `Deploy from a branch`
   → Branch: `main`, folder `/ (root)` → Save. GitHub will build at
   `https://cybersec120.github.io/credit-fixed-site/`.

4. **Custom domain** — still on the Pages settings screen, under Custom domain,
   enter `www.credit-fixed.com` and save (this repo already has a `CNAME` file
   with that value, so GitHub should pick it up automatically — the settings
   field just confirms it and provisions HTTPS). Check "Enforce HTTPS" once
   the certificate is issued (can take a few minutes to a few hours).

5. **Point GoDaddy DNS at GitHub** — in GoDaddy DNS management for
   credit-fixed.com:
   - **CNAME**: host `www` → value `cybersec120.github.io.` (this makes
     www.credit-fixed.com resolve to GitHub Pages)
   - **A records**: host `@` → GitHub Pages' 4 IPs, one A record each:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
     (this makes the bare credit-fixed.com resolve too — GitHub will
     301-redirect it to www automatically since the CNAME file names www as
     canonical)
   - Remove/replace any existing A or CNAME records for `@` and `www` left
     over from the old GoDaddy Website Builder site so they don't conflict.

6. **Wait for propagation** — DNS changes can take anywhere from a few
   minutes to ~24 hours. You can check status any time on the repo's Pages
   settings page — GitHub will show a green checkmark once the domain and
   HTTPS cert are both verified.

7. **Re-point Search Console / Business Profile** — once live, verify the new
   domain in Google Search Console (if not already verified at the domain
   level), submit `sitemap.xml`, and request indexing.

## What's in here
- `index.html`, `tradelines.html`, `business-funding.html`, `what-is-a-tradeline.html`,
  `knowledge-center.html`, `about-us.html`, `testimonials.html`, `faq.html`,
  `partners.html`, `sign-up.html` — public pages, each with a unique title,
  meta description, canonical tag, Open Graph/Twitter tags, and JSON-LD
  structured data (FinancialService on every page, Service schema on Business
  Funding, FAQPage schema on FAQ).
- **Knowledge Center** (`knowledge-center.html` + 5 articles) — the actual
  content-cluster strategy behind tradelinesupply.com's and biz2credit.com's
  ranking, adapted here: `tradelines-vs-credit-repair.html`,
  `how-many-tradelines-do-i-need.html`, `tradeline-buyers-checklist.html`,
  `types-of-business-financing-explained.html`, `personal-vs-business-loans.html`.
  Each links back to the relevant pillar page (Tradelines / Business Funding /
  What Is a Tradeline) and carries Article schema. Source lives in
  `pages/articles/` — add a new file there in the same shape, then add it to
  the `pages` array in `generate.js` and to the `articles` list in
  `pages/knowledge-center.js` to have it show up on the index page too.
- `client-login.html`, `terms.html`, `privacy.html` — set to `noindex` (login
  page isn't useful in search; legal pages are drafts, see below).
- `sitemap.xml` / `robots.txt` — generated from the same page list, so they can
  never drift out of sync with what's actually on the site.
- `css/styles.css`, `js/main.js`, `images/` — shared styling, mobile nav
  toggle, favicon, and OG share image.
- `build.js`, `generate.js`, `pages/*.js` — the source. Page content lives as
  plain JS objects in `pages/`; run `node generate.js` after editing any of them
  to rebuild every HTML file, `sitemap.xml`, and `robots.txt` in one shot.

## Before this goes live
1. **Tradelines pricing, guarantee, and checkout details are all placeholders.**
   The `tradelines.html` page has the full structure built (pricing table by
   limit × age, guarantee policy, required documents, bureau coverage) but
   every number is marked `[TBD]` or wrapped in a clearly-labeled placeholder
   note. This is the single most important thing to fill in before launch —
   it's the money page.
2. **Terms & Privacy Policy are drafts** — marked `noindex` for exactly this
   reason. Two separate regulated activities are covered: tradeline sales and
   business loan brokering. Many states require loan brokers to register or
   hold a license — confirm your state's requirement before publishing. Have
   a licensed attorney review both pages — the bracketed `[ ]` notes flag the
   spots that need attorney input.
3. **Testimonials page is a placeholder** — swap in real, attributed client
   quotes before publishing (fabricated reviews are both bad SEO and an FTC
   problem).
4. **Client Login** — currently a disabled placeholder. Wire it to whatever
   CRM/portal you use for case tracking (or replace with a redirect link).
5. **Google Search Console** — verify the domain, submit `sitemap.xml`, and
   request indexing on each page once live.
6. **Google Business Profile** — claim/verify one for the Scranton, PA service
   area; it's not something a static site file can do for you.

## Credit Repair Cloud integration
See `serverless/README.md` — a small Cloudflare Worker proxies lead
submissions to CRC's API so the API keys never touch the public site or
repo. Not wired into the actual sign-up form yet; needs your CRC plan/field
setup confirmed first.

## Local preview
Any static file server works, e.g. from this folder:
```
python3 -m http.server 8080
```
then open `http://localhost:8080/index.html`.
