const { ledgerDivider, calendlyBtn, EMAIL, PHONE, PHONE_TEL } = require("../build.js");

module.exports = {
  title: "Buy Authorized User Tradelines | Credit-Fixed",
  description: "Shop seasoned authorized user tradelines with local guidance from Credit-Fixed. See how pricing works by credit limit and account age, and what to expect.",
  canonicalPath: "/tradelines.html",
  activeHref: "/tradelines.html",
  body: `
    <section class="hero" style="padding-bottom:20px;">
      <div class="container">
        <span class="eyebrow">Tradelines</span>
        <h1>Seasoned authorized user tradelines, explained plainly.</h1>
        <p class="lede">Tradelines are priced by two things: the credit limit on the account, and how long it's been open (its "age"). Higher limit and older age generally cost more — here's how ours will be structured. New to the concept? Read <a href="/what-is-a-tradeline.html" style="text-decoration:underline;color:var(--emerald);">What Is a Tradeline?</a> first.</p>
      </div>
    </section>
    ${ledgerDivider()}

    <section>
      <div class="container">
        <div class="testimonial-note">
          PRICING TABLE PLACEHOLDER — structure is ready, real tiers need to be filled in.
          Typical industry structure is priced by <strong>credit limit tier</strong> ×
          <strong>account age tier</strong> (e.g., a $10k–$20k limit, 5+ year old account
          costs more than a $2k–$5k limit, 2-year account). Replace the table below with
          actual pricing once finalized.
        </div>
        <div style="margin-top:24px; overflow-x:auto;">
          <table class="simple">
            <tr><th>Credit Limit</th><th>Account Age</th><th>Price</th></tr>
            <tr><td>[e.g. $2,000–$5,000]</td><td>[e.g. 2–4 years]</td><td>[TBD]</td></tr>
            <tr><td>[e.g. $5,000–$10,000]</td><td>[e.g. 4–7 years]</td><td>[TBD]</td></tr>
            <tr><td>[e.g. $10,000–$20,000]</td><td>[e.g. 7–10 years]</td><td>[TBD]</td></tr>
            <tr><td>[e.g. $20,000+]</td><td>[e.g. 10+ years]</td><td>[TBD]</td></tr>
          </table>
        </div>
        <p class="small" style="margin-top:16px;">All tradelines are subject to availability. Adding a tradeline does not guarantee any specific change to your credit score — results vary by individual credit profile.</p>
      </div>
    </section>
    ${ledgerDivider()}

    <section class="section-alt">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Our Guarantee</span>
          <h2>What happens if a tradeline doesn't post</h2>
        </div>
        <div class="testimonial-note">
          GUARANTEE POLICY PLACEHOLDER — needs the real non-posting/refund policy.
          Most tradeline companies guarantee posting within a set window (e.g. before
          the next statement cycle) or offer a replacement/refund if it doesn't post.
          Replace this section with the actual policy once confirmed.
        </div>
      </div>
    </section>
    ${ledgerDivider()}

    <section>
      <div class="container">
        <div class="grid-2">
          <div>
            <h2>What you'll need at checkout</h2>
            <div class="testimonial-note">
              REQUIRED DOCUMENTS PLACEHOLDER — confirm the real list. Commonly required:
              government-issued photo ID, Social Security card, and (if different) the
              billing party's ID. Confirm accepted payment methods too (many tradeline
              companies require ACH/electronic check rather than credit card).
            </div>
          </div>
          <div>
            <h2>Where it reports</h2>
            <div class="testimonial-note">
              BUREAU COVERAGE PLACEHOLDER — confirm which of the three bureaus
              (Experian, Equifax, TransUnion) each tradeline reports to, and note if
              any states are excluded from purchase.
            </div>
          </div>
        </div>
      </div>
    </section>
    ${ledgerDivider()}

    <section class="section-alt">
      <div class="container">
        <div class="cta-band" style="background:var(--emerald-deep);">
          <h2>Not sure which tradeline fits your goal?</h2>
          <p>Start with a free consultation — we'll walk through your credit profile and what makes sense.</p>
          ${calendlyBtn("Book Your Free Consultation")}
        </div>
      </div>
    </section>
  `,
};
