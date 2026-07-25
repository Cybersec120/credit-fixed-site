const { ledgerDivider, EMAIL } = require("../build.js");

module.exports = {
  title: "Terms & Conditions | Credit-Fixed",
  description: "Terms and conditions for using the Credit-Fixed website and engaging Credit-Fixed's tradeline and business funding brokering services.",
  canonicalPath: "/terms.html",
  activeHref: "/terms.html",
  noindex: true,
  body: `
    <section class="hero" style="padding-bottom:10px;">
      <div class="container">
        <span class="eyebrow">Legal</span>
        <h1>Terms &amp; Conditions</h1>
        <p class="badge-noindex">DRAFT — attorney review recommended before publishing</p>
      </div>
    </section>
    ${ledgerDivider()}
    <section>
      <div class="container legal-body">
        <p class="small">Last updated: [date]. This draft is a starting point only. Two separate regulated activities are covered here — selling authorized user tradelines, and brokering business loans — and each has its own state-by-state legal requirements (many states require business loan brokers to register or hold a license; tradeline sales carry their own disclosure norms). Have a licensed attorney in your state review this page before it goes live.</p>

        <h2>1. Agreement to Terms</h2>
        <p>By accessing or using this website, you agree to be bound by these Terms &amp; Conditions. If you do not agree, please do not use this site.</p>

        <h2>2. Services Described</h2>
        <p>Credit-Fixed provides two services: (a) authorized user tradeline placement, and (b) business loan brokering that connects business owners with third-party lenders. <strong>Credit-Fixed is not a credit repair company</strong> and does not offer credit repair, credit dispute, or credit report correction services of any kind.</p>

        <h2>3. Tradelines — No Guarantee of Results</h2>
        <p>Adding an authorized user tradeline does not guarantee any specific change to your credit score. Results depend on your individual credit history and the practices of the account issuer and credit bureaus, which are outside our control. [Insert non-posting / refund policy once finalized.] [Confirm and list any state restrictions on tradeline sales, if applicable.]</p>

        <h2>4. Business Funding — Broker, Not a Lender</h2>
        <p>Credit-Fixed is a business loan broker. We are not a bank, and we do not make lending decisions, set interest rates, or guarantee approval for any financing product. All lending decisions, terms, and conditions are determined solely by the third-party lender you are matched with. Credit-Fixed may receive compensation from lending partners for referrals. [Confirm state broker registration/licensing status before publishing — required in a number of states.]</p>

        <h2>5. Fees</h2>
        <p>[Insert tradeline pricing/payment terms and any funding-brokering fee structure once finalized.]</p>

        <h2>6. Intellectual Property</h2>
        <p>All content on this site — text, graphics, and design — is the property of Credit-Fixed unless otherwise noted, and may not be reproduced without permission.</p>

        <h2>7. Limitation of Liability</h2>
        <p>[Insert your attorney's preferred liability language here.]</p>

        <h2>8. Governing Law</h2>
        <p>[Insert governing state law — likely Pennsylvania, pending attorney confirmation.]</p>

        <h2>9. Contact</h2>
        <p>Questions about these terms can be sent to <a href="mailto:${EMAIL}">${EMAIL}</a>.</p>
      </div>
    </section>
  `,
};
