const { ledgerDivider, calendlyBtn } = require("../build.js");

const articles = [
  { href: "/what-is-a-tradeline.html", title: "What Is a Tradeline?", d: "The plain-English explanation of how authorized user tradelines work — start here if you're new to this." },
  { href: "/tradelines-vs-credit-repair.html", title: "Tradelines vs. Credit Repair: What's the Difference?", d: "These get confused constantly. Here's the real difference, and why Credit-Fixed only does one of them." },
  { href: "/how-many-tradelines-do-i-need.html", title: "How Many Tradelines Do I Need?", d: "There's no universal number — here's what actually determines the right fit for your file." },
  { href: "/tradeline-buyers-checklist.html", title: "A Buyer's Checklist: 5 Things to Check First", d: "Posting timing, bureau coverage, guarantee terms, and what to verify before you buy." },
  { href: "/types-of-business-financing-explained.html", title: "Types of Business Financing Explained", d: "Term loans, lines of credit, equipment financing, and more, broken down plainly." },
  { href: "/personal-vs-business-loans.html", title: "Personal vs. Business Loans: Which Fits You?", d: "How the two differ, and how to think about which path fits where your business stands today." },
];

module.exports = {
  title: "Knowledge Center | Credit-Fixed",
  description: "Plain-English guides on tradelines and business funding from Credit-Fixed — no jargon, no overpromising, just straight answers.",
  canonicalPath: "/knowledge-center.html",
  activeHref: "/knowledge-center.html",
  body: `
    <section class="hero" style="padding-bottom:20px;">
      <div class="container">
        <span class="eyebrow">Knowledge Center</span>
        <h1>Straight answers on tradelines and funding.</h1>
        <p class="lede">No jargon, no overpromising — just plain explanations to help you make an informed decision before you talk to us.</p>
      </div>
    </section>
    ${ledgerDivider()}
    <section>
      <div class="container">
        <div class="grid-3">
          ${articles.map(a => `
          <div class="card">
            <h3>${a.title}</h3>
            <p>${a.d}</p>
            <a href="${a.href}" class="btn btn-outline">Read More</a>
          </div>`).join("\n          ")}
        </div>
      </div>
    </section>
    ${ledgerDivider()}
    <section class="section-alt">
      <div class="container">
        <div class="cta-band" style="background:var(--emerald-deep);">
          <h2>Didn't find your answer here?</h2>
          <p>A free consultation is the fastest way to get a straight answer about your specific situation.</p>
          ${calendlyBtn("Book Your Free Consultation")}
        </div>
      </div>
    </section>
  `,
};
