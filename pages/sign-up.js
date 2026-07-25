const { ledgerDivider, calendlyBtn, CALENDLY, EMAIL } = require("../build.js");

module.exports = {
  title: "Sign Up for a Free Consultation | Credit-Fixed",
  description: "Sign up for a free, no-obligation credit consultation and analysis with Credit-Fixed. Tell us your goal and we'll follow up to get you started.",
  canonicalPath: "/sign-up.html",
  activeHref: "/sign-up.html",
  body: `
    <section class="hero">
      <div class="container" style="max-width:640px;">
        <span class="eyebrow">Sign Up</span>
        <h1>Let's start with a free consultation.</h1>
        <p class="lede">Tell us a bit about your situation and we'll follow up to schedule your free credit analysis — no obligation.</p>
        <form action="https://formsubmit.co/${EMAIL}" method="POST" class="card">
          <input type="hidden" name="_subject" value="New sign-up from Credit-Fixed website">
          <input type="hidden" name="_captcha" value="true">
          <div class="form-row">
            <div><label for="su-name">Full name</label><input id="su-name" name="name" type="text" required></div>
            <div><label for="su-phone">Phone</label><input id="su-phone" name="phone" type="tel" required></div>
          </div>
          <div class="form-row">
            <div><label for="su-email">Email</label><input id="su-email" name="email" type="email" required></div>
            <div><label for="su-goal">Main goal</label><input id="su-goal" name="goal" type="text" placeholder="e.g. Buy a home, business funding"></div>
          </div>
          <div style="margin-bottom:16px;"><label for="su-notes">Anything else we should know?</label><textarea id="su-notes" name="notes" rows="4"></textarea></div>
          <button type="submit" class="btn btn-gold" style="width:100%;">Request My Free Consultation</button>
        </form>
        <p class="small" style="margin-top:16px;">Prefer to pick a time directly? <a href="${CALENDLY}" style="text-decoration:underline;" onclick="if(window.Calendly){Calendly.initPopupWidget({url:'${CALENDLY}'});return false;}" target="_blank" rel="noopener">Book on our calendar</a>.</p>
      </div>
    </section>
  `,
};
