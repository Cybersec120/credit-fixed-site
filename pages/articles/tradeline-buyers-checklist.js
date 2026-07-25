const { ledgerDivider, calendlyBtn, articleSchema } = require("../../build.js");

module.exports = {
  title: "Tradeline Buyer's Checklist | Credit-Fixed",
  description: "Before you buy a tradeline, check these five things — posting timing, bureau coverage, guarantee terms, and more.",
  canonicalPath: "/tradeline-buyers-checklist.html",
  activeHref: "/knowledge-center.html",
  extraSchema: [articleSchema({
    headline: "Tradeline Buyer's Checklist: 5 Things to Check First",
    description: "What to verify before purchasing an authorized user tradeline.",
    datePublished: "2026-07-25",
    canonicalPath: "/tradeline-buyers-checklist.html",
  })],
  body: `
    <section class="hero" style="padding-bottom:10px;">
      <div class="container">
        <span class="eyebrow">Knowledge Center</span>
        <h1>A buyer's checklist: 5 things to check before purchasing a tradeline</h1>
        <p class="lede">A little diligence up front avoids most of the common problems people run into with tradelines.</p>
      </div>
    </section>
    ${ledgerDivider()}
    <section>
      <div class="container legal-body">
        <h2>1. Which bureaus it reports to</h2>
        <p>Not every tradeline reports to all three major bureaus. If your goal depends on a specific bureau being updated, confirm that before you buy — not after.</p>

        <h2>2. The posting timeline</h2>
        <p>Every tradeline posts on the account's own statement cycle. Ask when the next posting date is and whether it'll make it in time for whatever you're working toward — a mortgage underwriting deadline, for instance.</p>

        <h2>3. What happens if it doesn't post</h2>
        <p>Ask specifically what the guarantee or refund policy covers if a tradeline fails to post as expected. A company that can't answer this clearly is worth being cautious about.</p>

        <h2>4. What documentation is required</h2>
        <p>Legitimate tradeline placement requires identity verification — expect to provide ID and other standard documentation. Be wary of anyone who doesn't ask for any verification at all.</p>

        <h2>5. Whether it fits your actual goal</h2>
        <p>The most expensive, oldest, highest-limit tradeline isn't automatically the right choice. What matters is whether it fits what your file currently needs and what you're trying to accomplish — which is worth a real conversation, not a guess.</p>

        <h2>A reminder on expectations</h2>
        <p>No tradeline purchase — from us or anyone else — comes with a guaranteed score outcome. Results depend on your existing credit profile. Anyone who promises a specific number of points is overpromising.</p>

        ${calendlyBtn("Ask Us Before You Buy")}
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
          <div class="card"><h3>Browse Tradelines</h3><p>See how our tradeline pricing and process is structured.</p><a href="/tradelines.html" class="btn btn-outline">See Tradelines</a></div>
          <div class="card"><h3>How Many Do I Need?</h3><p>What actually determines the right number for your situation.</p><a href="/how-many-tradelines-do-i-need.html" class="btn btn-outline">Read More</a></div>
        </div>
      </div>
    </section>
  `,
};
