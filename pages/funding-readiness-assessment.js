const { EMAIL, calendlyBtn } = require("../build.js");

module.exports = {
  title: "Business Funding Readiness Assessment | Credit-Fixed",
  description: "Take our confidential Business Funding Readiness Assessment and get your score instantly to see where you stand and what services fit your goals.",
  canonicalPath: "/funding-readiness-assessment.html",
  activeHref: null,
  noindex: false,
  body: `
    <section class="hero" style="padding-bottom:20px;">
      <div class="container" style="max-width:720px;">
        <span class="eyebrow">Free Assessment</span>
        <h1>Business Funding Readiness Assessment&trade;</h1>
        <p class="lede">This confidential assessment helps us determine your eligibility for business funding, business credit building, personal credit building, tradelines, and more. Answer honestly — your information stays confidential, and you'll get your Funding Readiness Score&trade; instantly.</p>
      </div>
    </section>

    <section>
      <div class="container" style="max-width:720px;">
        <form id="fra-form" class="card" style="display:grid; gap:24px;">

          <div>
            <h2>Section 1 — Applicant Information</h2>
            <div class="form-row">
              <div><label for="fra-name">Full Name</label><input id="fra-name" name="full_name" type="text" required></div>
              <div><label for="fra-phone">Phone</label><input id="fra-phone" name="phone" type="tel" required></div>
            </div>
            <div class="form-row">
              <div><label for="fra-email">Email</label><input id="fra-email" name="email" type="email" required></div>
              <div><label for="fra-city">City &amp; State</label><input id="fra-city" name="city_state" type="text" required></div>
            </div>
          </div>

          <div>
            <h2>Section 2 — Personal Credit Assessment</h2>

            <label>1. What is your approximate FICO Score?</label>
            <select name="fico_score" required>
              <option value="">Select one</option>
              <option value="Below 580">Below 580</option>
              <option value="580-619">580–619</option>
              <option value="620-659">620–659</option>
              <option value="660-699">660–699</option>
              <option value="700-739">700–739</option>
              <option value="740+">740+</option>
            </select>

            <label style="margin-top:16px;">2. Have you made all payments on time during the last 12 months?</label>
            <select name="on_time_payments_12mo" required>
              <option value="">Select one</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>

            <label style="margin-top:16px;">3. Have you had any late payments within the last 6 months?</label>
            <select name="late_payments_6mo" required>
              <option value="">Select one</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>

            <label style="margin-top:16px;">4. Do you currently have any of the following? (select all that apply)</label>
            <div class="checkbox-group">
              <label><input type="checkbox" name="negative_items" value="Collections"> Collections</label>
              <label><input type="checkbox" name="negative_items" value="Charge-Offs"> Charge-Offs</label>
              <label><input type="checkbox" name="negative_items" value="Repossessions"> Repossessions</label>
              <label><input type="checkbox" name="negative_items" value="Bankruptcy"> Bankruptcy</label>
              <label><input type="checkbox" name="negative_items" value="Judgments"> Judgments</label>
              <label><input type="checkbox" name="negative_items" value="Tax Liens"> Tax Liens</label>
              <label><input type="checkbox" name="negative_items" value="None" id="fra-negitems-none"> None</label>
            </div>

            <label style="margin-top:16px;">5. Current credit utilization?</label>
            <select name="credit_utilization" required>
              <option value="">Select one</option>
              <option value="Under 10%">Under 10%</option>
              <option value="Under 30%">Under 30%</option>
              <option value="Under 35%">Under 35%</option>
              <option value="35-50%">35–50%</option>
              <option value="Over 50%">Over 50%</option>
              <option value="Unsure">Unsure</option>
            </select>

            <label style="margin-top:16px;">6. How many credit cards do you currently have?</label>
            <select name="num_credit_cards" required>
              <option value="">Select one</option>
              <option value="None">None</option>
              <option value="One">One</option>
              <option value="Two">Two</option>
              <option value="Three or more">Three or more</option>
            </select>

            <label style="margin-top:16px;">7. Do at least two of your credit cards have limits of $2,500 or greater?</label>
            <select name="two_cards_2500_limit" required>
              <option value="">Select one</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>

            <label style="margin-top:16px;">8. How old is your oldest credit account?</label>
            <select name="oldest_account_age" required>
              <option value="">Select one</option>
              <option value="Less than 1 year">Less than 1 year</option>
              <option value="1-2 years">1–2 years</option>
              <option value="2-5 years">2–5 years</option>
              <option value="Over 5 years">Over 5 years</option>
            </select>

            <label style="margin-top:16px;">9. How many total accounts report on your credit?</label>
            <select name="total_reporting_accounts" required>
              <option value="">Select one</option>
              <option value="1-2">1–2</option>
              <option value="3-4">3–4</option>
              <option value="5-7">5–7</option>
              <option value="8+">8+</option>
            </select>

            <label style="margin-top:16px;">10. Hard inquiries during the last 6 months?</label>
            <select name="hard_inquiries_6mo" required>
              <option value="">Select one</option>
              <option value="None">None</option>
              <option value="One">One</option>
              <option value="Two">Two</option>
              <option value="Three">Three</option>
              <option value="More than Three">More than Three</option>
            </select>
          </div>

          <div>
            <h2>Section 3 — Business Qualification</h2>

            <label>Do you currently own a business?</label>
            <select name="owns_business" required>
              <option value="">Select one</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>

            <div class="form-row" style="margin-top:16px;">
              <div><label for="fra-biz-name">Legal Business Name</label><input id="fra-biz-name" name="legal_business_name" type="text"></div>
              <div>
                <label for="fra-biz-structure">Business Structure</label>
                <select id="fra-biz-structure" name="business_structure">
                  <option value="">Select one</option>
                  <option value="LLC">LLC</option>
                  <option value="Corporation">Corporation</option>
                  <option value="Sole Proprietor">Sole Proprietor</option>
                  <option value="Partnership">Partnership</option>
                </select>
              </div>
            </div>

            <div class="form-row" style="margin-top:16px;">
              <div><label for="fra-biz-start">Business Start Date</label><input id="fra-biz-start" name="business_start_date" type="date"></div>
              <div>
                <label for="fra-biz-2yr">Has your business existed longer than two years?</label>
                <select id="fra-biz-2yr" name="business_over_2yrs">
                  <option value="">Select one</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>

            <div class="form-row" style="margin-top:16px;">
              <div>
                <label for="fra-ein">Do you have an EIN?</label>
                <select id="fra-ein" name="has_ein">
                  <option value="">Select one</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div>
                <label for="fra-duns">Do you have a D-U-N-S Number?</label>
                <select id="fra-duns" name="has_duns">
                  <option value="">Select one</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  <option value="Not Sure">Not Sure</option>
                </select>
              </div>
            </div>

            <label style="margin-top:16px;">Do you have a business bank account?</label>
            <select name="has_business_bank_account">
              <option value="">Select one</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>

            <label style="margin-top:16px;">Average Monthly Revenue</label>
            <select name="avg_monthly_revenue">
              <option value="">Select one</option>
              <option value="$0-$5,000">$0–$5,000</option>
              <option value="$5,000-$10,000">$5,000–$10,000</option>
              <option value="$10,000-$25,000">$10,000–$25,000</option>
              <option value="$25,000-$50,000">$25,000–$50,000</option>
              <option value="Over $50,000">Over $50,000</option>
            </select>

            <label style="margin-top:16px;">Have you filed business tax returns?</label>
            <select name="filed_business_taxes">
              <option value="">Select one</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>

            <label style="margin-top:16px;">Do you currently have any Net 30 vendor accounts open?</label>
            <select name="has_net30_accounts">
              <option value="">Select one</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>

            <label style="margin-top:16px;">If Yes, how many?</label>
            <select name="num_net30_accounts">
              <option value="">Select one / N/A</option>
              <option value="1-2">1–2</option>
              <option value="3-5">3–5</option>
              <option value="6+">6+</option>
            </select>

            <label style="margin-top:16px;">Are those Net 30 accounts reporting?</label>
            <select name="net30_reporting">
              <option value="">Select one / N/A</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Unsure">Unsure</option>
            </select>

            <label style="margin-top:16px;">Have you received business funding before?</label>
            <select name="received_funding_before">
              <option value="">Select one</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>

            <label style="margin-top:16px;">Desired Funding Amount</label>
            <select name="desired_funding_amount">
              <option value="">Select one</option>
              <option value="Under $10,000">Under $10,000</option>
              <option value="$10,000-$25,000">$10,000–$25,000</option>
              <option value="$25,000-$50,000">$25,000–$50,000</option>
              <option value="$50,000-$100,000">$50,000–$100,000</option>
              <option value="Over $100,000">Over $100,000</option>
            </select>
          </div>

          <div>
            <h2>Section 4 — Your Goals</h2>

            <label>What are you interested in today? (select all that apply)</label>
            <div class="checkbox-group">
              <label><input type="checkbox" name="interests" value="Business Funding"> Business Funding</label>
              <label><input type="checkbox" name="interests" value="Business Credit Building"> Business Credit Building</label>
              <label><input type="checkbox" name="interests" value="Tradelines"> Tradelines</label>
              <label><input type="checkbox" name="interests" value="Credit Repair"> Credit Repair</label>
              <label><input type="checkbox" name="interests" value="Business Credit Cards"> Business Credit Cards</label>
              <label><input type="checkbox" name="interests" value="Lines of Credit"> Lines of Credit</label>
              <label><input type="checkbox" name="interests" value="Personal Credit Building"> Personal Credit Building</label>
              <label><input type="checkbox" name="interests" value="Other"> Other</label>
            </div>

            <label style="margin-top:16px;">How soon do you need funding?</label>
            <select name="funding_timeline" required>
              <option value="">Select one</option>
              <option value="Immediately">Immediately</option>
              <option value="Within 30 Days">Within 30 Days</option>
              <option value="Within 60 Days">Within 60 Days</option>
              <option value="Just Researching">Just Researching</option>
            </select>

            <label style="margin-top:16px;">Which statement best describes your current situation?</label>
            <select name="current_situation" required>
              <option value="">Select one</option>
              <option value="I need funding immediately.">I need funding immediately.</option>
              <option value="I need better personal credit.">I need better personal credit.</option>
              <option value="I want to build business credit.">I want to build business credit.</option>
              <option value="I need tradelines.">I need tradelines.</option>
              <option value="I have been denied funding before.">I have been denied funding before.</option>
              <option value="I'm starting a new business.">I'm starting a new business.</option>
              <option value="I'm exploring my options.">I'm exploring my options.</option>
            </select>
          </div>

          <button type="submit" class="btn btn-gold" style="width:100%;" id="fra-submit-btn">Get My Funding Readiness Score</button>
        </form>

        <div id="fra-result" style="display:none;" class="card"></div>

        <p class="small" style="margin-top:16px;">Prefer to talk it through instead? ${calendlyBtn("Book a Free Consultation")}</p>
      </div>
    </section>

    <script>
      const FRA_ENDPOINT = "https://formsubmit.co/ajax/${EMAIL}";

      function fraCalculateScore(data) {
        let score = 0;
        const breakdown = [];

        function award(points, label, passed) {
          if (passed) score += points;
          breakdown.push({ label, points, passed });
        }

        award(15, "No late payments", data.late_payments_6mo === "No" && data.on_time_payments_12mo === "Yes");
        award(20, "No negative items", (data.negative_items || []).includes("None") || (data.negative_items || []).length === 0);
        award(15, "Utilization 35% or lower", ["Under 10%", "Under 30%", "Under 35%"].includes(data.credit_utilization));
        award(10, "Credit age 2+ years", ["2-5 years", "Over 5 years"].includes(data.oldest_account_age));
        award(10, "Five or more reporting accounts", ["5-7", "8+"].includes(data.total_reporting_accounts));
        award(10, "Two credit cards with $2,500+ limits", data.two_cards_2500_limit === "Yes");
        award(10, "Three or fewer inquiries", ["None", "One", "Two", "Three"].includes(data.hard_inquiries_6mo));
        award(5, "Business over two years old", data.business_over_2yrs === "Yes");
        award(3, "Net 30 accounts established", data.has_net30_accounts === "Yes");
        award(2, "Business checking account", data.has_business_bank_account === "Yes");

        return { score, breakdown };
      }

      function fraGetTier(score) {
        if (score >= 90) {
          return {
            label: "FUNDING READY",
            color: "#1a7f37",
            desc: "Excellent credit profile.",
            services: ["Business Funding", "Business Credit Cards", "Lines of Credit", "SBA Preparation"],
          };
        } else if (score >= 75) {
          return {
            label: "ALMOST FUNDING READY",
            color: "#0A6DE6",
            desc: "Minor improvements can significantly increase approval odds.",
            services: ["Tradelines", "Credit Optimization", "Funding Strategy Session"],
          };
        } else if (score >= 50) {
          return {
            label: "CREDIT BUILDING CANDIDATE",
            color: "#B8860B",
            desc: "A stronger credit profile is recommended before applying for funding.",
            services: ["Business Credit Building", "Net 30 Setup", "Tradelines", "Credit Coaching"],
          };
        } else {
          return {
            label: "CREDIT REPAIR FIRST",
            color: "#B00020",
            desc: "Your profile requires improvement before pursuing funding.",
            services: ["Credit Repair", "Collection Resolution", "Utilization Reduction", "Payment History Improvement", "Credit Rebuilding Plan"],
          };
        }
      }

      const fraForm = document.getElementById("fra-form");
      if (fraForm) {
        fraForm.addEventListener("submit", async (e) => {
          e.preventDefault();

          const submitBtn = document.getElementById("fra-submit-btn");
          submitBtn.textContent = "Calculating...";
          submitBtn.disabled = true;

          const formData = new FormData(fraForm);
          const data = {};
          for (const [key, value] of formData.entries()) {
            if (data[key]) {
              if (Array.isArray(data[key])) {
                data[key].push(value);
              } else {
                data[key] = [data[key], value];
              }
            } else {
              data[key] = value;
            }
          }
          // normalize checkbox groups to arrays even if only one was checked
          data.negative_items = formData.getAll("negative_items");
          data.interests = formData.getAll("interests");

          const { score, breakdown } = fraCalculateScore(data);
          const tier = fraGetTier(score);

          const payload = { ...data, funding_readiness_score: score, funding_readiness_tier: tier.label };

          try {
            await fetch(FRA_ENDPOINT, {
              method: "POST",
              headers: { "Content-Type": "application/json", Accept: "application/json" },
              body: JSON.stringify(payload),
            });
          } catch (err) {
            // even if the email notification fails, still show the client their score
            console.error("Notification failed", err);
          }

          fraForm.style.display = "none";
          const resultEl = document.getElementById("fra-result");
          resultEl.style.display = "block";
          resultEl.innerHTML = \`
            <h2>Your Funding Readiness Score&trade;</h2>
            <div style="font-size:48px; font-weight:bold; color:\${tier.color};">\${score} / 100</div>
            <div style="font-size:20px; font-weight:bold; color:\${tier.color}; margin-top:8px;">\${tier.label}</div>
            <p style="margin-top:8px;">\${tier.desc}</p>
            <h3 style="margin-top:24px;">Recommended Services</h3>
            <ul>\${tier.services.map(s => \`<li>\${s}</li>\`).join("")}</ul>
            <p style="margin-top:24px;">A member of our team will follow up shortly to walk through your results. Want to get started sooner?</p>
            ${calendlyBtn("Book Your Free Consultation")}
          \`;
        });
      }
    </script>
  `,
};