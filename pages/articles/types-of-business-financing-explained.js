const { ledgerDivider, calendlyBtn, articleSchema } = require("../../build.js");

module.exports = {
  title: "Types of Business Financing Explained | Credit-Fixed",
  description: "Term loans, lines of credit, equipment financing, and more — a plain-English breakdown of common business financing types.",
  canonicalPath: "/types-of-business-financing-explained.html",
  activeHref: "/knowledge-center.html",
  extraSchema: [articleSchema({
    headline: "Types of Business Financing Explained",
    description: "A plain-English breakdown of common business financing types.",
    datePublished: "2026-07-25",
    canonicalPath: "/types-of-business-financing-explained.html",
  })],
  body: `
    <section class="hero" style="padding-bottom:10px;">
      <div class="container">
        <span class="eyebrow">Knowledge Center</span>
        <h1>Types of business financing, explained</h1>
        <p class="lede">"Business funding" isn't one product — it's a category. Here's what the common types actually mean.</p>
      </div>
    </section>
    ${ledgerDivider()}
    <section>
      <div class="container legal-body">
        <h2>Term loans</h2>
        <p>A lump sum you receive up front and repay on a fixed schedule over a set period. Typically used for a specific one-time cost — equipment, expansion, a big purchase — where you know the amount you need in advance.</p>

        <h2>Lines of credit</h2>
        <p>Access to a pool of funds up to an approved limit, which you draw from as needed rather than all at once. Useful for managing uneven cash flow, since you only use (and typically only pay interest on) what you actually draw.</p>

        <h2>Equipment financing</h2>
        <p>Financing tied specifically to a piece of equipment, which often serves as collateral for the loan itself. Common for businesses that need machinery, vehicles, or other capital equipment without tying up working capital.</p>

        <h2>Revenue-based financing</h2>
        <p>Repayment is tied to a percentage of revenue rather than a fixed monthly payment, so it can flex with slower and busier periods. This can suit businesses with seasonal or variable income.</p>

        <h2>SBA loans</h2>
        <p>Loan programs backed by the U.S. Small Business Administration, offered through participating lenders. The government backing can allow for longer terms and more favorable rates, though the application and underwriting process is typically more involved.</p>

        <h2>How this connects to what we do</h2>
        <p>Credit-Fixed is a business loan broker — we connect you with lending partners in our network, but we don't set the rates, terms, or approval criteria for any of these products. That's determined by the lender you're matched with, based on your specific application.</p>

        ${calendlyBtn("Talk Through Your Funding Needs")}
      </div>
    </section>
    ${ledgerDivider()}
    <section class="section-alt">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Keep Reading</span>
          <h2>Related</h2>
        </div>
        <div class="grid-2">
          <div class="card"><h3>Business Funding</h3><p>See how our brokering process works, start to finish.</p><a href="/business-funding.html" class="btn btn-outline">Learn More</a></div>
          <div class="card"><h3>Personal vs. Business Loans</h3><p>Which funding path actually fits your situation.</p><a href="/personal-vs-business-loans.html" class="btn btn-outline">Read More</a></div>
        </div>
      </div>
    </section>
  `,
};
