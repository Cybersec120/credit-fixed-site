const { ledgerDivider, calendlyBtn, PHONE, PHONE_TEL, EMAIL, ADDR } = require("../build.js");

module.exports = {
  title: "Tradelines & Business Funding | Credit-Fixed",
  description: "Credit-Fixed connects you with authorized user tradelines and a network of business lenders. Local guidance out of Scranton, PA — not a credit repair company.",
  canonicalPath: "/",
  activeHref: "/",
  body: `
    <section class="hero">
      <div class="container hero-grid">
        <div>
          <span class="eyebrow">Tradelines &amp; Business Funding</span>
          <h1>Build your credit profile. Fund what's next.</h1>
          <p class="lede">We help you add seasoned authorized user tradelines to your credit file, and connect business owners with our network of lenders for the funding they need to grow.</p>
          <div class="hero-ctas">
            <a href="/tradelines.html" class="btn btn-gold">Browse Tradelines</a>
            <a href="/business-funding.html" class="btn btn-outline">Business Funding</a>
          </div>
          <div class="trust-line">SCRANTON, PA &middot; SERVING CLIENTS NATIONWIDE &middot; NOT A CREDIT REPAIR COMPANY</div>
        </div>
        <div class="hero-graphic">
          <div class="cap"><span>AUTHORIZED USER TRADELINE</span><span class="now">POSTING</span></div>
          <svg viewBox="0 0 460 220" width="100%" height="auto" role="img" aria-label="Illustration of a credit profile trending upward over time">
            <line x1="0" y1="200" x2="460" y2="200" stroke="#C6CFD6" stroke-width="1"/>
            <line x1="0" y1="150" x2="460" y2="150" stroke="#C6CFD6" stroke-width="1" stroke-dasharray="2 5"/>
            <line x1="0" y1="100" x2="460" y2="100" stroke="#C6CFD6" stroke-width="1" stroke-dasharray="2 5"/>
            <line x1="0" y1="50" x2="460" y2="50" stroke="#C6CFD6" stroke-width="1" stroke-dasharray="2 5"/>
            <polyline points="10,190 70,185 120,175 170,178 220,150 270,140 320,105 370,85 440,45" fill="none" stroke="#0A2540" stroke-width="3" stroke-linecap="round"/>
            <circle cx="10" cy="190" r="4" fill="#B03A2E"/>
            <circle cx="440" cy="45" r="5" fill="#0A6DE6"/>
            <text x="8" y="212" font-family="IBM Plex Mono" font-size="11" fill="#55636F">Before</text>
            <text x="392" y="40" font-family="IBM Plex Mono" font-size="11" fill="#0A6DE6">After</text>
          </svg>
          <p class="small" style="margin-top:10px;">Illustrative — tradelines do not guarantee a specific score change. Individual results vary.</p>
        </div>
      </div>
    </section>
    ${ledgerDivider()}

    <section>
      <div class="container">
        <div class="stat-row">
          <div class="stat-item"><span class="stat-num">Local</span><span class="stat-label">Scranton, PA Based</span></div>
          <div class="stat-item"><span class="stat-num">2</span><span class="stat-label">Ways We Help: Tradelines &amp; Funding</span></div>
          <div class="stat-item"><span class="stat-num">1:1</span><span class="stat-label">Free Consultation, Every Client</span></div>
        </div>
      </div>
    </section>
    ${ledgerDivider()}

    <section>
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">What We Do</span>
          <h2>Two focused services. No confusion about what you're getting.</h2>
        </div>
        <div class="grid-2">
          <div class="card">
            <h3>Authorized User Tradelines</h3>
            <p>We help you add seasoned tradelines to your credit file as an authorized user — a long-standing, legal practice under the Equal Credit Opportunity Act. We'll walk you through how it works, what to expect, and whether it fits your situation.</p>
            <a href="/tradelines.html" class="btn btn-outline">See Tradelines</a>
          </div>
          <div class="card">
            <h3>Business Funding</h3>
            <p>We're brokers, not a direct lender — we connect business owners with our network of lending partners to find funding that fits, from term loans to lines of credit. Terms and approval are always determined by the lender.</p>
            <a href="/business-funding.html" class="btn btn-outline">See Funding Options</a>
          </div>
        </div>
      </div>
    </section>
    ${ledgerDivider()}

    <section class="section-alt">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Why Local Matters</span>
          <h2>A real office, a real person, not a national call center.</h2>
        </div>
        <div class="grid-3">
          <div class="card"><h3>Based in Scranton, PA</h3><p>A real local business, not an anonymous national platform — you can call and talk to a person who knows your file.</p></div>
          <div class="card"><h3>Straight answers</h3><p>We'll tell you plainly whether a tradeline or a funding option makes sense for your situation — no upsell for its own sake.</p></div>
          <div class="card"><h3>Free consultation</h3><p>Every relationship starts with a no-obligation conversation about your goal, not a sales script.</p></div>
        </div>
      </div>
    </section>
    ${ledgerDivider()}

    <section>
      <div class="container">
        <div class="section-head" style="max-width:640px;">
          <span class="eyebrow">Free Consultation</span>
          <h2>A real conversation, not a sales pitch.</h2>
          <p>Your first call is about understanding your goal — whether that's a tradeline, business funding, or both — and whether we're the right fit to help. No pressure, no obligation.</p>
          ${calendlyBtn("Book Your Free Consultation")}
        </div>
      </div>
    </section>
    ${ledgerDivider()}

    <section class="section-alt">
      <div class="container">
        <div class="card text-center" style="max-width:640px;margin:0 auto;">
          <span class="eyebrow">Client Results</span>
          <p style="font-family:var(--display);font-size:1.2rem;color:var(--emerald-deep);">We're building out real client stories for this page.</p>
          <p>Want to see verified results? <a href="/testimonials.html" style="text-decoration:underline;color:var(--emerald);">Visit the Testimonials page</a> once published, or ask us directly on your free consultation call.</p>
        </div>
      </div>
    </section>
    ${ledgerDivider()}

    <section id="contact">
      <div class="container">
        <div class="grid-2">
          <div>
            <span class="eyebrow">Contact Us</span>
            <h2>Better yet, talk it through with us.</h2>
            <p>Whether it's a tradeline question or a funding need, send a message and we'll help you get started on a clear path forward.</p>
            <p><strong>${ADDR}</strong><br/>
            <a href="tel:${PHONE_TEL}">${PHONE}</a> &nbsp;&middot;&nbsp; <a href="mailto:${EMAIL}">${EMAIL}</a></p>
            <p><strong>Hours</strong><br/>Monday–Friday, 9:00 am – 5:00 pm</p>
            ${calendlyBtn("Book Your Free Consultation Now")}
          </div>
          <form action="https://formsubmit.co/${EMAIL}" method="POST" class="card">
            <input type="hidden" name="_subject" value="New message from Credit-Fixed website">
            <input type="hidden" name="_captcha" value="true">
            <div class="form-row">
              <div><label for="name">Name</label><input id="name" name="name" type="text" required></div>
              <div><label for="email">Email</label><input id="email" name="email" type="email" required></div>
            </div>
            <div style="margin-bottom:16px;"><label for="message">Message</label><textarea id="message" name="message" rows="4" required></textarea></div>
            <button type="submit" class="btn btn-gold" style="width:100%;">Send Message</button>
            <p class="small" style="margin-top:12px;">Protected by standard form validation. By submitting, you agree to be contacted about your inquiry.</p>
          </form>
        </div>
      </div>
    </section>
  `,
};
