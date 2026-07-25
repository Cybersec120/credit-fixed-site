const { ledgerDivider, calendlyBtn } = require("../build.js");

const faqs = [
  { q: "Are you a credit repair company?", a: "No. Credit-Fixed is not a credit repair company and we do not offer credit repair or dispute services. We help clients add authorized user tradelines to their credit file, and we broker business funding connections to our network of lenders." },
  { q: "What is an authorized user tradeline?", a: "It's when an existing credit card account's history — its age, limit, and payment record — is reported to your credit file because you've been added as an authorized user. See our \"What Is a Tradeline?\" page for a full explanation." },
  { q: "Will a tradeline guarantee my score goes up?", a: "No — we can't guarantee any specific score outcome. Results depend on your existing credit profile, and some lenders scrutinize newly-added authorized user accounts. We'll always give you a straight answer about whether it's likely to help your specific situation." },
  { q: "How long does a tradeline take to post?", a: "It depends on the account's statement cycle. We'll walk you through expected posting timing before you buy so there are no surprises." },
  { q: "Are you a direct lender for business funding?", a: "No — we're a business loan broker. We connect you with lending partners in our network. Applications, underwriting, terms, and final approval decisions are handled by the lender, not by us." },
  { q: "Do you charge for the free consultation?", a: "No, the initial consultation is free with no obligation, for both tradelines and business funding questions." },
  { q: "Is my information secure?", a: "Yes. See our Privacy Policy for details on how your information is collected, used, and protected." },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(f => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a },
  })),
};

module.exports = {
  title: "Frequently Asked Questions | Credit-Fixed",
  description: "Answers to common questions about authorized user tradelines and business funding brokering with Credit-Fixed — including what we are and aren't.",
  canonicalPath: "/faq.html",
  activeHref: "/faq.html",
  extraSchema: [schema],
  body: `
    <section class="hero" style="padding-bottom:20px;">
      <div class="container">
        <span class="eyebrow">FAQ</span>
        <h1>Questions clients ask us most.</h1>
      </div>
    </section>
    ${ledgerDivider()}
    <section>
      <div class="container" style="max-width:800px;">
        ${faqs.map(f => `
        <details class="faq-item">
          <summary>${f.q}</summary>
          <p>${f.a}</p>
        </details>`).join("\n        ")}
      </div>
    </section>
    ${ledgerDivider()}
    <section class="section-alt">
      <div class="container">
        <div class="cta-band" style="background:var(--emerald-deep);">
          <h2>Still have questions?</h2>
          <p>A free consultation is the fastest way to get a straight answer.</p>
          ${calendlyBtn("Book Your Free Consultation")}
        </div>
      </div>
    </section>
  `,
};
