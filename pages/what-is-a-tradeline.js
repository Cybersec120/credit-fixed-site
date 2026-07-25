const { ledgerDivider, calendlyBtn } = require("../build.js");

module.exports = {
  title: "What Is a Tradeline? | Credit-Fixed",
  description: "A plain-English explanation of what a tradeline is, how authorized user tradelines work, and what to know before adding one to your credit file.",
  canonicalPath: "/what-is-a-tradeline.html",
  activeHref: "/what-is-a-tradeline.html",
  body: `
    <section class="hero" style="padding-bottom:20px;">
      <div class="container">
        <span class="eyebrow">Credit Education</span>
        <h1>What is a tradeline, actually?</h1>
        <p class="lede">Before you buy one, it helps to understand exactly what a tradeline is and how the authorized user process works.</p>
      </div>
    </section>
    ${ledgerDivider()}

    <section>
      <div class="container">
        <div class="grid-2">
          <div>
            <h2>The basic definition</h2>
            <p>A tradeline is simply the credit-bureau term for any account listed on your credit report — a credit card, auto loan, mortgage, or line of credit. Each tradeline carries details like the account type, credit limit or loan amount, balance, and payment history, and that information factors into your credit score.</p>
            <p>Every account you open in your own name becomes a tradeline on your report. But there's a second way a tradeline can appear: as an authorized user.</p>
          </div>
          <div>
            <h2>What "authorized user" means</h2>
            <p>Account holders can add another person as an authorized user on their credit card. When that happens, the primary account's history — its age, limit, balance, and payment record — can be reported to the authorized user's credit file too. This is a long-standing, legal practice recognized under the Equal Credit Opportunity Act, and it's the same thing that happens when a parent adds a child to their card to help them build credit early.</p>
          </div>
        </div>
      </div>
    </section>
    ${ledgerDivider()}

    <section class="section-alt">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">What This Product Is — and Isn't</span>
          <h2>Set your expectations correctly</h2>
        </div>
        <div class="grid-2">
          <div class="card">
            <h3>What it is</h3>
            <p>A way to add a seasoned account's history to your credit file as an authorized user, which can add to your credit history and utilization profile. It's the same mechanism that's long benefited people fortunate enough to have family or friends able to add them to an account.</p>
          </div>
          <div class="card">
            <h3>What it isn't</h3>
            <p>It isn't a guarantee of any specific credit score change, and it isn't credit repair — it doesn't remove or fix anything already on your report. Results depend on your existing credit profile, and some lenders scrutinize newly-added authorized user accounts when evaluating an application. Credit-Fixed is not a credit repair company and makes no promises about score outcomes.</p>
          </div>
        </div>
      </div>
    </section>
    ${ledgerDivider()}

    <section>
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Good to Know</span>
          <h2>A few practical things before you buy</h2>
          <p>Ready to see options? Browse our <a href="/tradelines.html" style="text-decoration:underline;color:var(--emerald);">current tradeline listings</a>, or see more guides in the <a href="/knowledge-center.html" style="text-decoration:underline;color:var(--emerald);">Knowledge Center</a>.</p>
        </div>
        <div class="grid-3">
          <div class="card"><h3>Timing matters</h3><p>Tradelines typically need to post before a specific statement/reporting cycle to show up in time — ask about posting windows before you buy.</p></div>
          <div class="card"><h3>Age and limit drive price</h3><p>Older accounts with higher limits generally cost more, since they carry more weight on a credit file.</p></div>
          <div class="card"><h3>It's one part of a bigger picture</h3><p>A tradeline works alongside your existing credit habits — on-time payments and low utilization still matter most over time.</p></div>
        </div>
      </div>
    </section>
    ${ledgerDivider()}

    <section class="section-alt">
      <div class="container">
        <div class="cta-band" style="background:var(--emerald-deep);">
          <h2>Want to talk through whether this fits your goal?</h2>
          <p>A free consultation is the fastest way to get a straight answer.</p>
          ${calendlyBtn("Book Your Free Consultation")}
        </div>
      </div>
    </section>
  `,
};
