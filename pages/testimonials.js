const { ledgerDivider, calendlyBtn } = require("../build.js");

module.exports = {
  title: "Client Testimonials | Credit-Fixed",
  description: "Read what Credit-Fixed clients say about their tradeline and business funding experience, and see how the process worked for them.",
  canonicalPath: "/testimonials.html",
  activeHref: "/testimonials.html",
  body: `
    <section class="hero" style="padding-bottom:20px;">
      <div class="container">
        <span class="eyebrow">Testimonials</span>
        <h1>What clients say.</h1>
        <p class="lede">This page is built and ready to publish real client testimonials — it just needs the content.</p>
      </div>
    </section>
    ${ledgerDivider()}
    <section>
      <div class="container">
        <div class="testimonial-note">
          PLACEHOLDER — replace with real, attributed client testimonials before this page goes live.
          Each entry should include the client's name (or initials, with permission), a short quote,
          and — where possible — the result achieved. Avoid generic stock quotes; real, specific
          testimonials perform far better for trust and for SEO (review schema markup can be added
          once real reviews are in place).
        </div>
        <div class="grid-3" style="margin-top:26px;">
          <div class="card"><p style="font-style:italic;">"[Client quote goes here.]"</p><p class="small">— Client name / initials, City, ST</p></div>
          <div class="card"><p style="font-style:italic;">"[Client quote goes here.]"</p><p class="small">— Client name / initials, City, ST</p></div>
          <div class="card"><p style="font-style:italic;">"[Client quote goes here.]"</p><p class="small">— Client name / initials, City, ST</p></div>
        </div>
      </div>
    </section>
    ${ledgerDivider()}
    <section class="section-alt">
      <div class="container">
        <div class="cta-band" style="background:var(--emerald-deep);">
          <h2>Ready to write your own story?</h2>
          <p>Start with a free consultation and credit analysis.</p>
          ${calendlyBtn("Book Your Free Consultation")}
        </div>
      </div>
    </section>
  `,
};
