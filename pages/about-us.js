const { ledgerDivider, calendlyBtn, ADDR, PHONE, PHONE_TEL, EMAIL } = require("../build.js");

module.exports = {
  title: "About Credit-Fixed | Tradelines & Funding, Scranton PA",
  description: "Credit-Fixed is a Scranton, PA-based tradeline and business funding brokerage serving clients nationwide. We are not a credit repair company.",
  canonicalPath: "/about-us.html",
  activeHref: "/about-us.html",
  body: `
    <section class="hero" style="padding-bottom:20px;">
      <div class="container">
        <span class="eyebrow">About Us</span>
        <h1>Two focused services, one local team.</h1>
        <p class="lede">Based in Scranton, PA — serving clients nationwide.</p>
      </div>
    </section>
    ${ledgerDivider()}
    <section>
      <div class="container">
        <div class="grid-2">
          <div>
            <h2>What we do</h2>
            <p>Credit-Fixed helps people add seasoned authorized user tradelines to their credit file, and helps business owners find funding through our network of lending partners. That's it — two focused services, done well, instead of a long list of vague promises.</p>
            <p>We're upfront about what each service is and isn't. Tradelines don't guarantee a specific score outcome, and as a business loan broker, we don't make lending decisions — the lender does.</p>
          </div>
          <div>
            <h2>What we're not</h2>
            <p><strong>Credit-Fixed is not a credit repair company.</strong> We don't dispute items on your credit report or offer credit repair services. If you're looking for general credit education, our <a href="/what-is-a-tradeline.html" style="text-decoration:underline;color:var(--emerald);">Resources</a> section covers the basics, but that's informational — not a service we provide.</p>
            <p>We're also not a bank or direct lender. On the funding side, we're a broker — we connect you to lenders in our network, and the lender makes the final call on approval and terms.</p>
          </div>
        </div>
      </div>
    </section>
    ${ledgerDivider()}
    <section class="section-alt">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Reach Us</span>
          <h2>Based in Scranton. Working nationwide.</h2>
        </div>
        <p><strong>${ADDR}</strong><br/>
        <a href="tel:${PHONE_TEL}">${PHONE}</a> &nbsp;&middot;&nbsp; <a href="mailto:${EMAIL}">${EMAIL}</a><br/>
        Monday–Friday, 9:00 am – 5:00 pm</p>
        ${calendlyBtn("Book Your Free Consultation")}
      </div>
    </section>
  `,
};
