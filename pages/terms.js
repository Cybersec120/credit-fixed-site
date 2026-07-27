const { EMAIL, PHONE, PHONE_TEL, BIZ_NAME } = require("../build.js");

module.exports = {
  title: "Terms & Conditions | Credit-Fixed",
  description: "Terms and conditions governing the use of Credit-Fixed's tradeline and funding brokering services.",
  canonicalPath: "/terms.html",
  activeHref: null,
  noindex: false,
  body: `
    <section class="hero" style="padding-bottom:20px;">
      <div class="container" style="max-width:760px;">
        <span class="eyebrow">Legal</span>
        <h1>Terms &amp; Conditions</h1>
        <p class="small">Last updated: July 2026</p>
      </div>
    </section>

    <section>
      <div class="container" style="max-width:760px;">

        <h2>1. Who We Are</h2>
        <p>Credit-Fixed ("Company," "we," "us") operates a marketplace connecting clients with authorized-user tradelines and provides business and personal funding brokering services. Credit-Fixed is not a credit repair company and does not engage in credit report dispute or negotiation services on behalf of clients.</p>

        <h2>2. Tradeline Services</h2>
        <p>Credit-Fixed facilitates the placement of clients as authorized users on eligible credit accounts supplied through our network of tradeline suppliers. By purchasing a tradeline, you authorize Credit-Fixed and its suppliers to add you as an authorized user on the applicable account for the stated reporting period.</p>

        <h3>2.1 Reporting Bureaus</h3>
        <p>Tradelines are reported to all three major credit bureaus: Equifax, Experian, and TransUnion.</p>

        <h3>2.2 Reporting Period &amp; Posting Timeline</h3>
        <p>Each tradeline has its own individual reporting period and purchase deadline, disclosed at the time of listing and confirmed in your order receipt. Posting times vary by tradeline and are not guaranteed to occur immediately upon purchase.</p>

        <h3>2.3 Guarantee &amp; Non-Posting Policy</h3>
        <p>If your purchased tradeline does not post to at least two (2) of the three (3) major credit bureaus within its stated reporting period, Credit-Fixed will replace it with another tradeline of comparable value. Credit-Fixed does not offer cash refunds under any circumstances. Replacement is the sole and exclusive remedy for a non-posting tradeline.</p>

        <h3>2.4 Duration as Authorized User</h3>
        <p>Clients remain as an authorized user on the applicable account for one (1) full reporting cycle, after which they are removed from the account.</p>

        <h3>2.5 Eligibility &amp; Availability</h3>
        <p>Credit-Fixed's tradeline services are available to clients in all states. Inventory and pricing are published on our Tradelines page and subject to change and availability.</p>

        <h3>2.6 Required Documentation</h3>
        <p>To purchase a tradeline, you must submit required identity verification documentation as requested by Credit-Fixed or its suppliers. Credit-Fixed requires legitimate, government-issued Social Security Numbers and does not process orders submitted with Credit Privacy Numbers (CPNs) or other fraudulent identification.</p>

        <h2>3. Business &amp; Personal Funding Brokering</h2>
        <p>Credit-Fixed acts as a broker connecting clients to third-party lenders for business and personal funding. Credit-Fixed is not a direct lender and does not guarantee approval, specific terms, or rates from any lender. Final loan terms are determined solely by the lending institution.</p>

        <h2>4. Payments &amp; Refund Policy</h2>
        <p>All sales are final. Credit-Fixed does not offer refunds for any service, including but not limited to tradeline purchases, funding brokering fees, or credit-readiness support services, except as expressly stated in Section 2.3 (Non-Posting Guarantee), which provides for replacement only, not a cash refund.</p>

        <h2>5. No Guarantee of Credit Score Improvement</h2>
        <p>Credit-Fixed does not guarantee any specific credit score increase, loan approval, or financial outcome. Results vary based on individual credit history, existing accounts, and factors outside our control.</p>

        <h2>6. User Responsibilities</h2>
        <p>You agree to provide accurate, truthful information when using our services, including at signup, checkout, and document verification. You agree not to use Credit-Fixed's services for any fraudulent purpose, including submission of falsified identity documents.</p>

        <h2>7. Limitation of Liability</h2>
        <p>To the fullest extent permitted by law, Credit-Fixed and its owners, employees, and suppliers shall not be liable for any indirect, incidental, special, or consequential damages arising out of or related to your use of our services, including but not limited to loss of credit opportunity, denial of credit applications, or third-party lender decisions. Our total liability for any claim arising from these Terms or our services shall not exceed the amount you paid to Credit-Fixed for the specific service giving rise to the claim.</p>

        <h2>8. Dispute Resolution &amp; Governing Law</h2>
        <p>These Terms are governed by the laws of the Commonwealth of Pennsylvania, without regard to conflict-of-law principles. Any dispute arising out of or relating to these Terms or our services shall first be attempted to be resolved informally by contacting us at ${EMAIL}. If a dispute cannot be resolved informally within thirty (30) days, it shall be resolved through binding arbitration administered in accordance with the rules of the American Arbitration Association, conducted in Lackawanna County, Pennsylvania, except that either party may bring an individual claim in small claims court.</p>

        <h2>9. Changes to These Terms</h2>
        <p>Credit-Fixed may update these Terms at any time. Continued use of our services after changes are posted constitutes acceptance of the revised Terms.</p>

        <h2>10. Contact</h2>
        <p>Questions about these Terms can be directed to <a href="mailto:${EMAIL}">${EMAIL}</a> or ${PHONE}.</p>

      </div>
    </section>
  `,
};