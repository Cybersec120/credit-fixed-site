# Connecting Credit Repair Cloud — safely

The site is static (GitHub Pages), so it can't hold secrets. This folder is a
tiny separate service — a Cloudflare Worker — that sits between your website
and Credit Repair Cloud. Your CRC API key and secret key live only inside
Cloudflare's encrypted secret store. Nothing in the git repo, nothing in the
page source, nothing anyone can view-source their way into.

## Before you start
- **Confirm your CRC plan supports API access.** CRC's own docs say API &
  Automations is locked on the Personal Plan — check My Account → Plan, and
  upgrade if needed, before going further.
- **Get your API credentials.** Log into Credit Repair Cloud → API &
  Automations → API Credentials. You'll get an `apiauthkey` and a
  `secretkey`. Keep these private — don't paste them into Slack, email, or
  any file that isn't the secret store below.

## One-time setup (about 10 minutes)
1. **Create a free Cloudflare account** at cloudflare.com if you don't have
   one already (this doesn't touch your existing GitHub Pages / GoDaddy DNS
   setup for the main site at all — it's a separate, small service).
2. **Install Wrangler** (Cloudflare's CLI), in a terminal:
   ```
   npm install -g wrangler
   wrangler login
   ```
3. **Deploy the Worker** — from inside this `serverless/` folder:
   ```
   wrangler deploy
   ```
   This gives you a URL like `credit-fixed-crc-proxy.<your-subdomain>.workers.dev`.
4. **Set your secrets** (this is the step that actually keeps the keys safe):
   ```
   wrangler secret put CRC_API_KEY
   wrangler secret put CRC_SECRET_KEY
   ```
   Paste each value when prompted. These are now encrypted in Cloudflare,
   not written to any file.
5. **Update `ALLOWED_ORIGINS`** in `crc-proxy-worker.js` if your final domain
   differs from `www.credit-fixed.com` / `credit-fixed.com`, then
   `wrangler deploy` again.

## Wiring it to the site
The Worker expects a JSON POST with `firstname`, `lastname`, `email`, and
optionally `phone` / `memo`. Point your sign-up form's JS at your Worker URL
instead of (or in addition to) FormSubmit — for example:

```js
fetch("https://credit-fixed-crc-proxy.<your-subdomain>.workers.dev", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    firstname: form.firstname.value,
    lastname: form.lastname.value,
    email: form.email.value,
    phone: form.phone.value,
    memo: form.notes.value,
  }),
});
```

I haven't wired this into `sign-up.html` yet — the field mapping above
(`type: Lead`, first/last name, email, mobile phone, memo) covers CRC's
required fields, but confirm with your CRC setup (assigned team member,
which pipeline/status new leads should land in, etc.) before I connect the
actual form, since those affect what shows up on your end.

## What this does NOT do
- It doesn't upload ID/SSN documents — CRC's `ssno` field only accepts the
  last 4 digits, and full ID/SSN collection through a public web form is a
  bigger security conversation than this integration covers. Worth handling
  that step inside CRC's own secure client portal instead, once someone is
  a confirmed client rather than a website lead.
