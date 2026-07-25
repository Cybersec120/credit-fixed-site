const { ledgerDivider, EMAIL, PHONE, PHONE_TEL } = require("../build.js");

module.exports = {
  title: "Referral Partners | Credit-Fixed",
  description: "Partner with Credit-Fixed to refer clients who need authorized user tradelines or business funding — agents, dealers, and brokers welcome.",
  canonicalPath: "/partners.html",
  activeHref: "/partners.html",
  body: `
    <section class="hero" style="padding-bottom:20px;">
      <div class="container">
        <span class="eyebrow">Partners</span>
        <h1>Refer clients who need a credit or funding solution — we'll take it from there.</h1>
        <p class="lede">If you work with clients who are close to qualifying but need a stronger credit profile or business funding first, a partnership with Credit-Fixed keeps the deal moving instead of stalling.</p>
      </div>
    </section>
    ${ledgerDivider()}
    <section>
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Who We Partner With</span>
          <h2>Built for the professionals who see credit issues first</h2>
        </div>
        <div class="grid-3">
          <div class="card"><h3>Real estate agents</h3><p>Keep a buyer's file moving when a thin credit profile threatens a pre-approval.</p></div>
          <div class="card"><h3>Mortgage &amp; loan brokers</h3><p>Refer applicants who need a stronger credit profile before resubmitting.</p></div>
          <div class="card"><h3>Auto dealers</h3><p>Help buyers get approved on better terms instead of walking away.</p></div>
        </div>
      </div>
    </section>
    ${ledgerDivider()}
    <section class="section-alt">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Get In Touch</span>
          <h2>Start a partner conversation</h2>
        </div>
        <p>Email <a href="mailto:${EMAIL}">${EMAIL}</a> or call <a href="tel:${PHONE_TEL}">${PHONE}</a> to talk through a referral relationship.</p>
      </div>
    </section>
  `,
};
