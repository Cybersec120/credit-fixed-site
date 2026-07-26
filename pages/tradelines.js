const { ledgerDivider, calendlyBtn, EMAIL, PHONE, PHONE_TEL } = require("../build.js");

module.exports = {
  title: "Buy Authorized User Tradelines | Credit-Fixed",
  description: "Shop seasoned authorized user tradelines with local guidance from Credit-Fixed. Request access to our current inventory and pricing, all states served.",
  canonicalPath: "/tradelines.html",
  activeHref: "/tradelines.html",
  body: `
    <section class="hero" style="padding-bottom:20px;">
      <div class="container">
        <span class="eyebrow">Tradelines</span>
        <h1>Seasoned authorized user tradelines, explained plainly.</h1>
        <p class="lede">Tradelines are priced by two things: the credit limit on the account, and how long it's been open (its "age"). Higher limit and older age generally cost more. New to the concept? Read <a href="/what-is-a-tradeline.html" style="text-decoration:underline;color:var(--emerald);">What Is a Tradeline?</a> first.</p>
      </div>
    </section>
    ${ledgerDivider()}

    <section>
      <div class="container" style="padding: 48px 0;">
        <div style="max-width: 560px; margin: 0 auto; text-align: center;">
          <h2>Request Access to Our Exclusive Tradeline List</h2>
          <p class="small">
            Pricing varies by tradeline age, credit limit, and reporting bureau.
            Access to our current inventory and pricing is available exclusively
            to verified clients — complete the form below to request access.
          </p>
        </div>

        <form class="access-request-form card" style="max-width: 480px; margin: 24px auto 0; display: grid; gap: 16px;">
          <label>
            Full Name
            <input type="text" name="full_name" required>
          </label>
          <label>
            Email
            <input type="email" name="email" required>
          </label>
          <label>
            Phone
            <input type="tel" name="phone" required>
          </label>
          <label>
            What are you trying to accomplish?
            <select name="goal" required>
              <option value="">Select one</option>
              <option value="raise_score">Raise my personal credit score</option>
              <option value="business_credit">Build business credit</option>
              <option value="qualify_funding">Qualify for funding</option>
              <option value="other">Other</option>
            </select>
          </label>
          <button type="submit" class="btn btn-gold">Request Access</button>
        </form>

        <p class="small" style="margin-top:16px; text-align:center;">All tradelines are subject to availability. Adding a tradeline does not guarantee any specific change to your credit score — results vary by individual credit profile.</p>
      </div>
    </section>
    ${ledgerDivider()}

    <section class="section-alt">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Our Guarantee</span>
          <h2>What happens if a tradeline doesn't post</h2>
        </div>
        <p>If your purchased tradeline does not post to at least two (2) of the three (3) major credit bureaus within its stated reporting period, we will replace it with another tradeline of comparable value. <strong>Credit-Fixed does not offer cash refunds under any circumstances</strong> — replacement is the sole remedy for a non-posting tradeline. Each tradeline's individual reporting period and purchase deadline is disclosed at the time of listing and confirmed in your order receipt.</p>
        <p>Clients remain as an authorized user for one (1) full reporting cycle, after which they are removed from the account.</p>
      </div>
    </section>
    ${ledgerDivider()}

    <section>
      <div class="container">
        <div class="grid-2">
          <div>
            <h2>What you'll need at checkout</h2>
            <p>Purchasing a tradeline requires identity verification. We require a legitimate, government-issued Social Security Number — we do not accept Credit Privacy Numbers (CPNs) or other falsified identification.</p>
          </div>
          <div>
            <h2>Where it reports</h2>
            <p>All tradelines report to the three major credit bureaus: Equifax, Experian, and TransUnion. Our tradeline services are available to clients in all states — no state restrictions.</p>
          </div>
        </div>
      </div>
    </section>
    ${ledgerDivider()}

    <section class="section-alt">
      <div class="container">
        <div class="cta-band" style="background:var(--emerald-deep);">
          <h2>Not sure which tradeline fits your goal?</h2>
          <p>Start with a free consultation — we'll walk through your credit profile and what makes sense.</p>
          ${calendlyBtn("Book Your Free Consultation")}
        </div>
      </div>
    </section>

    <script>
      const WORKER_URL = "https://credit-fixed-notify.cybersecglobal.workers.dev";

      function wireFormSubmit(formSelector, formType) {
        const form = document.querySelector(formSelector);
        if (!form) return;

        form.addEventListener("submit", async (e) => {
          e.preventDefault();

          const submitBtn = form.querySelector("button[type=submit]");
          const originalText = submitBtn ? submitBtn.textContent : "";
          if (submitBtn) {
            submitBtn.textContent = "Sending...";
            submitBtn.disabled = true;
          }

          const formData = new FormData(form);
          const payload = { formType };
          formData.forEach((value, key) => { payload[key] = value; });

          try {
            const res = await fetch(WORKER_URL, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(payload),
            });

            if (res.ok) {
              form.innerHTML = "<p>Thanks — we've received your request and will follow up shortly.</p>";
            } else {
              throw new Error("Submission failed");
            }
          } catch (err) {
            if (submitBtn) {
              submitBtn.textContent = originalText;
              submitBtn.disabled = false;
            }
            alert("Something went wrong submitting the form. Please try again or call/email us directly.");
          }
        });
      }

      wireFormSubmit(".access-request-form", "request_access");
    </script>
  `,
};