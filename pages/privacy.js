const { ledgerDivider, EMAIL, ADDR } = require("../build.js");

module.exports = {
  title: "Privacy Policy | Credit-Fixed",
  description: "How Credit-Fixed collects, uses, and protects your personal information.",
  canonicalPath: "/privacy.html",
  activeHref: "/privacy.html",
  noindex: true,
  body: `
    <section class="hero" style="padding-bottom:10px;">
      <div class="container">
        <span class="eyebrow">Legal</span>
        <h1>Privacy Policy</h1>
        <p class="badge-noindex">DRAFT — attorney review recommended before publishing</p>
      </div>
    </section>
    ${ledgerDivider()}
    <section>
      <div class="container legal-body">
        <p class="small">Last updated: [date]. This draft is a starting point only — have it reviewed by a licensed attorney, particularly given the sensitivity of credit report data and applicable state privacy laws, before publishing.</p>

        <h2>1. Information We Collect</h2>
        <p>We collect information you provide directly, such as your name, email, phone number, and details shared during a consultation or through our contact form. If you purchase a tradeline, we collect identity-verification documents (such as a government-issued ID and Social Security card) as required to place the tradeline. If you seek business funding, we collect business and financial information needed to match you with lending partners.</p>

        <h2>2. How We Use Your Information</h2>
        <p>We use your information to respond to inquiries, provide tradeline placement and business funding brokering services, and communicate with you about your request. For business funding, we share relevant information with third-party lending partners in our network so they can evaluate your request — those lenders have their own privacy practices governing information once shared. We do not sell your personal information.</p>

        <h2>3. How We Protect Your Information</h2>
        <p>[Describe specific safeguards — encryption, access controls, storage practices — once your actual systems/vendors are finalized.]</p>

        <h2>4. Third-Party Services</h2>
        <p>Our contact and consultation forms are processed through third-party tools (e.g., form delivery and scheduling providers). Their use of your information is governed by their own privacy policies.</p>

        <h2>5. Cookies</h2>
        <p>This site may use cookies to analyze traffic and improve the browsing experience. You can control cookies through your browser settings.</p>

        <h2>6. Your Rights</h2>
        <p>You may request access to, correction of, or deletion of your personal information by contacting us at <a href="mailto:${EMAIL}">${EMAIL}</a>.</p>

        <h2>7. Contact</h2>
        <p>Credit-Fixed, ${ADDR}<br/>
        <a href="mailto:${EMAIL}">${EMAIL}</a></p>
      </div>
    </section>
  `,
};
