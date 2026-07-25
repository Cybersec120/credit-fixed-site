const { ledgerDivider, calendlyBtn, articleSchema } = require("../../build.js");

module.exports = {
  title: "Tradelines vs. Credit Repair: The Difference | Credit-Fixed",
  description: "Tradelines and credit repair get confused constantly. Here's the plain-English difference, and why Credit-Fixed only does one of them.",
  canonicalPath: "/tradelines-vs-credit-repair.html",
  activeHref: "/knowledge-center.html",
  extraSchema: [articleSchema({
    headline: "Tradelines vs. Credit Repair: What's the Difference?",
    description: "The plain-English difference between adding a tradeline and doing credit repair.",
    datePublished: "2026-07-25",
    canonicalPath: "/tradelines-vs-credit-repair.html",
  })],
  body: `
    <section class="hero" style="padding-bottom:10px;">
      <div class="container">
        <span class="eyebrow">Knowledge Center</span>
        <h1>Tradelines vs. credit repair: what's the difference?</h1>
        <p class="lede">These two get lumped together constantly. They're not the same thing, and the difference matters for what you should actually expect.</p>
      </div>
    </section>
    ${ledgerDivider()}
    <section>
      <div class="container legal-body">
        <h2>Credit repair, in plain terms</h2>
        <p>Credit repair means disputing specific items already on your credit report — arguing that something is inaccurate, outdated, or unverifiable, and asking the credit bureau or the furnisher to correct or remove it. It's a process aimed at your existing history.</p>

        <h2>Tradelines, in plain terms</h2>
        <p>A tradeline is different: it's adding new, positive information to your file by being placed as an authorized user on an existing, seasoned credit account. Nothing about your current report gets disputed or removed — you're adding to the file, not editing it.</p>

        <h2>Why the confusion happens</h2>
        <p>Both are marketed around the same goal — a stronger credit profile — so it's easy to see how the two get blurred together, especially when some companies offer both under one roof. That's part of why it's worth being direct about it here.</p>

        <h2>Where Credit-Fixed fits</h2>
        <p><strong>Credit-Fixed is not a credit repair company.</strong> We don't dispute items on your credit report. What we do is help you add authorized user tradelines, and connect business owners with our network of lenders for funding. If what you actually need is dispute work on existing negative items, that's a different service than what we provide — and we'd rather tell you that plainly than have you assume otherwise.</p>

        <h2>Which one actually fits your situation?</h2>
        <p>It depends on what's driving your credit picture. If the issue is errors or outdated items dragging your score down, tradelines won't fix that — that's a credit repair problem. If your file is thin or your history is short, a tradeline can help round it out. A quick conversation is usually faster than guessing.</p>

        ${calendlyBtn("Talk Through Your Situation")}
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
          <div class="card"><h3>What Is a Tradeline?</h3><p>The full explanation of how authorized user tradelines work.</p><a href="/what-is-a-tradeline.html" class="btn btn-outline">Read More</a></div>
          <div class="card"><h3>Browse Tradelines</h3><p>See how our tradeline pricing and process is structured.</p><a href="/tradelines.html" class="btn btn-outline">See Tradelines</a></div>
        </div>
      </div>
    </section>
  `,
};
