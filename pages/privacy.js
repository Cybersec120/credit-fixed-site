const { EMAIL, PHONE } = require("../build.js");

module.exports = {
  title: "Privacy Policy | Credit-Fixed",
  description: "How Credit-Fixed collects, uses, and protects your personal information.",
  canonicalPath: "/privacy.html",
  activeHref: null,
  noindex: false,
  body: `
    <section class="hero" style="padding-bottom:20px;">
      <div class="container" style="max-width:760px;">
        <span class="eyebrow">Legal</span>
        <h1>Privacy Policy</h1>
        <p class="small">Last updated: July 2026</p>
      </div>
    </section>

    <section>
      <div class="container" style="max-width:760px;">

        <h2>1. Information We Collect</h2>
        <p>We collect information you provide directly, including your name, email address, phone number, and — when required for tradeline purchases or funding brokering — identity verification documentation such as government-issued Social Security Numbers. We do not accept Credit Privacy Numbers (CPNs) in place of legitimate identification.</p>

        <h2>2. How We Use Your Information</h2>
        <p>We use your information to process tradeline orders, facilitate funding broker introductions, verify your identity, communicate with you about your account or order, and improve our services.</p>

        <h2>3. Information Sharing</h2>
        <p>We share your information with our tradeline suppliers and third-party lending partners only as necessary to fulfill your order or funding request. We do not sell your personal information to third parties for marketing purposes.</p>

        <h2>4. Data Security</h2>
        <p>We take reasonable administrative, technical, and physical measures designed to protect your personal information from unauthorized access, use, or disclosure. Identity verification documents are used solely for the purpose of completing your order and are retained only as long as necessary to fulfill legal, accounting, or reporting requirements.</p>

        <h2>5. Your Rights</h2>
        <p>Depending on your state of residence, you may have the right to request access to, correction of, or deletion of your personal information. To make such a request, contact us at ${EMAIL} and we will respond in accordance with applicable law.</p>

        <h2>6. Cookies &amp; Tracking</h2>
        <p>Our website uses Google Analytics (GA4) to understand site usage and Calendly to manage consultation scheduling. These third-party tools may set their own cookies subject to their respective privacy policies.</p>

        <h2>7. Children's Privacy</h2>
        <p>Our services are not directed to individuals under the age of 18, and we do not knowingly collect personal information from minors.</p>

        <h2>8. Changes to This Policy</h2>
        <p>Credit-Fixed may update this Privacy Policy from time to time. Continued use of our services after changes are posted constitutes acceptance of the revised policy.</p>

        <h2>9. Contact</h2>
        <p>Questions about this Privacy Policy can be directed to <a href="mailto:${EMAIL}">${EMAIL}</a> or ${PHONE}.</p>

      </div>
    </section>
  `,
};