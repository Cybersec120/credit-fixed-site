const { ledgerDivider, calendlyBtn, BIZ_NAME } = require("../build.js");

const financingTypes = [
  { t: "Term Loans", d: "A lump sum repaid over a fixed schedule — a common fit for one-time investments like equipment or expansion." },
  { t: "Lines of Credit", d: "Access to funds up to an approved limit, drawn as needed — useful for managing cash flow." },
  { t: "Equipment Financing", d: "Financing tied to a specific piece of equipment, often using the equipment itself as collateral." },
  { t: "Revenue-Based Financing", d: "Repayment tied to a percentage of revenue, which can flex with slower and busier periods." },
  { t: "SBA Loans", d: "Government-backed loan programs that can offer longer terms and lower rates for qualifying businesses." },
  { t: "Working Capital", d: "Shorter-term funding to cover day-to-day operating needs and bridge cash flow gaps." },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Business Loan Brokering",
  "provider": { "@type": "FinancialService", "name": BIZ_NAME },
  "areaServed": "US",
  "description": "Credit-Fixed connects business owners with a network of third-party lenders. Credit-Fixed is a broker, not a lender, and does not make credit decisions.",
};

module.exports = {
  title: "Business Funding Brokering | Credit-Fixed",
  description: "Credit-Fixed connects business owners with our network of lenders for term loans, lines of credit, and more. We're brokers, not a direct lender.",
  canonicalPath: "/business-funding.html",
  activeHref: "/business-funding.html",
  extraSchema: [schema],
  body: `
    <section class="hero" style="padding-bottom:20px;">
      <div class="container">
        <span class="eyebrow">Business Funding</span>
        <h1>We connect you to lenders. We don't make you guess who to call.</h1>
        <p class="lede">Credit-Fixed is a business loan broker — we're not a direct lender. We take the time to understand your business and connect you with lending partners in our network who may be a fit. Final terms, rates, and approval decisions are always made by the lender, not by us.</p>
        ${calendlyBtn("Talk Through Your Funding Needs")}
      </div>
    </section>
    ${ledgerDivider()}

    <section>
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Financing Types</span>
          <h2>Common types of funding available through our lender network</h2>
          <p class="small">General descriptions — specific rates, amounts, and qualification requirements are set by each individual lender and vary by applicant.</p>
        </div>
        <div class="grid-3">
          ${financingTypes.map(f => `
          <div class="card"><h3>${f.t}</h3><p>${f.d}</p></div>`).join("\n          ")}
        </div>
      </div>
    </section>
    ${ledgerDivider()}

    <section class="section-alt">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">How Brokering Works</span>
          <h2>Three steps, start to finish</h2>
        </div>
        <div class="steps">
          <div class="step">
            <span class="step-index">01</span>
            <h3>Tell us your goal</h3>
            <p>We start with a free conversation about what you're funding and where your business stands.</p>
          </div>
          <div class="step">
            <span class="step-index">02</span>
            <h3>We match you to lenders</h3>
            <p>Based on your situation, we connect you with lending partners in our network who may be a fit.</p>
          </div>
          <div class="step">
            <span class="step-index">03</span>
            <h3>The lender decides</h3>
            <p>Applications, underwriting, terms, and approval are handled directly by the lender — we're not the one making that call.</p>
          </div>
          <div class="step-line"></div>
        </div>
      </div>
    </section>
    ${ledgerDivider()}

    <section>
      <div class="container">
        <div class="testimonial-note">
          A note on how we operate: Credit-Fixed is a business loan broker, not a bank
          or direct lender. We do not guarantee approval, specific rates, or specific
          terms — those are determined solely by the lender you're matched with. We may
          receive compensation from lending partners for referrals.
        </div>
      </div>
    </section>
    ${ledgerDivider()}

    <section class="section-alt">
      <div class="container">
        <div class="cta-band" style="background:var(--emerald-deep);">
          <h2>Ready to see what's available?</h2>
          <p>Start with a free consultation — no obligation.</p>
          ${calendlyBtn("Book Your Free Consultation")}
        </div>
      </div>
    </section>
  `,
};
