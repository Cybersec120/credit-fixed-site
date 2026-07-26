// pages/tradeline-list.js
// Gated tradeline inventory page — NOT linked in nav, noindex: true
// Prices below are YOUR ACTUAL COST from supplier. The page automatically
// applies a 33% markup at build time — do not hand-calculate marked-up
// prices, just keep "cost" accurate and the display price is computed here.

const { calendlyBtn } = require("../build.js");

const MARKUP = 1.33;

// Raw inventory — cost is what you pay your supplier (the discounted/sale
// price from their sheet). Update this array whenever inventory changes.
const inventory = [
  { bank: "US BANK", limit: 2000, age: "4 Yrs, 5 Mos", addBy: "16th", reporting: "04th - 9th", stock: 1, cost: 229 },
  { bank: "AMERICAN EXPRESS", limit: 9900, age: "Amex reports limit only, not history", addBy: "25th", reporting: "14th - 19th", stock: 1, cost: 199 },
  { bank: "US BANK", limit: 500, age: "4 Yrs, 4 Mos", addBy: "16th", reporting: "04th - 9th", stock: 1, cost: 179 },
  { bank: "DISCOVER", limit: 3500, age: "5 Yrs, 9 Mos", addBy: "12th", reporting: "01st - 06th", stock: 1, cost: 269 },
  { bank: "CITIBANK", limit: 7600, age: "2 Yrs, 3 Mos", addBy: "7th", reporting: "26th - 1st", stock: 1, cost: 239 },
  { bank: "CITIBANK", limit: 7300, age: "6 Yrs, 9 Mos", addBy: "4th", reporting: "23rd - 28th", stock: 1, cost: 369 },
  { bank: "CAPITAL ONE", limit: 5000, age: "12 Yrs, 8 Mos", addBy: "2nd", reporting: "21st - 26th", stock: 1, cost: 459 },
  { bank: "CHASE", limit: 31500, age: "9 Yrs, 3 Mos", addBy: "21th", reporting: "10th - 15th", stock: 1, cost: 689 },
  { bank: "CITIBANK", limit: 6000, age: "2 Yrs, 4 Mos", addBy: "3rd", reporting: "22nd - 27th", stock: 1, cost: 229 },
  { bank: "CITIBANK", limit: 25000, age: "7 Yrs, 6 Mos", addBy: "10th", reporting: "29th - 4th", stock: 1, cost: 549 },
  { bank: "DISCOVER", limit: 18400, age: "21 Yrs, 8 Mos", addBy: "4th", reporting: "23rd - 28th", stock: 1, cost: 949 },
  { bank: "CHASE", limit: 5000, age: "12 Yrs, 6 Mos", addBy: "22th", reporting: "11th-16th", stock: 1, cost: 449 },
  { bank: "CHASE", limit: 10000, age: "20 Yrs, 3 Mos", addBy: "24th", reporting: "13th - 18th", stock: 1, cost: 799 },
  { bank: "AMERICAN EXPRESS", limit: 50000, age: "Amex reports limit only, not history", addBy: "20th", reporting: "08th - 13th", stock: 1, cost: 549 },
  { bank: "DISCOVER", limit: 6000, age: "5 Yrs, 3 Mos", addBy: "11th", reporting: "30th - 4th", stock: 1, cost: 289 },
  { bank: "CAPITAL ONE", limit: 10000, age: "3 Yrs, 8 Mos", addBy: "6th", reporting: "26th - 1st", stock: 1, cost: 289 },
  { bank: "CAPITAL ONE", limit: 3900, age: "11 Yrs, 7 Mos", addBy: "28th", reporting: "17th - 22nd", stock: 1, cost: 399 },
  { bank: "CHASE", limit: 3000, age: "5 Yrs, 6 Mos", addBy: "21th", reporting: "11th - 16th", stock: 1, cost: 269 },
  { bank: "CITIBANK", limit: 4830, age: "4 Yrs, 1 Mos", addBy: "26th", reporting: "14th - 19th", stock: 1, cost: 249 },
  { bank: "PNC", limit: 7500, age: "1 Yrs, 2 Mos", addBy: "3rd", reporting: "22nd - 27th", stock: 1, cost: 189 },
  { bank: "BANK OF AMERICA", limit: 3000, age: "2 Yrs, 3 Mos", addBy: "1st", reporting: "22nd - 27th", stock: 1, cost: 219 },
  { bank: "CITIBANK", limit: 9200, age: "6 Yrs, 9 Mos", addBy: "26th", reporting: "16th - 21st", stock: 1, cost: 399 },
  { bank: "AMERICAN EXPRESS", limit: 3000, age: "Amex reports limit only, not history", addBy: "3rd", reporting: "21st - 26th", stock: 1, cost: 119 },
  { bank: "AMERICAN EXPRESS", limit: 12400, age: "Amex reports limit only, not history", addBy: "29th", reporting: "16th - 21st", stock: 1, cost: 209 },
  { bank: "PNC", limit: 12000, age: "6 Yrs, 6 Mos", addBy: "1st", reporting: "20th - 25th", stock: 1, cost: 439 },
  { bank: "DISCOVER", limit: 3000, age: "5 Yrs, 7 Mos", addBy: "20th", reporting: "09th - 14th", stock: 1, cost: 269 },
  { bank: "CITIBANK", limit: 17500, age: "6 Yrs, 8 Mos", addBy: "20th", reporting: "09th - 14th", stock: 1, cost: 499 },
  { bank: "CITIBANK", limit: 13000, age: "7 Yrs, 10 Mos", addBy: "25th", reporting: "15th - 20th", stock: 1, cost: 459 },
  { bank: "CHASE", limit: 9000, age: "6 Yrs, 4 Mos", addBy: "4th", reporting: "23rd - 28th", stock: 1, cost: 389 },
  { bank: "CAPITAL ONE", limit: 10000, age: "8 Yrs, 5 Mos", addBy: "30th", reporting: "17th - 23rd", stock: 1, cost: 389 },
  { bank: "CITIBANK", limit: 52000, age: "25 Yrs, 11 Mos", addBy: "2nd", reporting: "21st - 26th", stock: 1, cost: 1549 },
  { bank: "DISCOVER", limit: 28200, age: "16 Yrs, 0 Mos", addBy: "10th", reporting: "29th - 4th", stock: 1, cost: 859 },
  { bank: "PENFED", limit: 50000, age: "10 Yrs, 1 Mos", addBy: "25th", reporting: "15th - 20th", stock: 1, cost: 1049 },
  { bank: "DISCOVER", limit: 3000, age: "4 Yrs, 8 Mos", addBy: "5th", reporting: "25th - 30th", stock: 1, cost: 249 },
  { bank: "CHASE", limit: 8000, age: "20 Yrs, 9 Mos", addBy: "7th", reporting: "30th - 4th", stock: 1, cost: 749 },
  { bank: "CHASE", limit: 17000, age: "14 Yrs, 3 Mos", addBy: "4th", reporting: "23rd - 28th", stock: 1, cost: 619 },
  { bank: "CAPITAL ONE", limit: 5700, age: "26 Yrs, 1 Mos", addBy: "30th", reporting: "16th - 21st", stock: 1, cost: 849 },
  { bank: "CAPITAL ONE", limit: 1500, age: "0 Yrs, 6 Mos", addBy: "7th", reporting: "26th - 1st", stock: 1, cost: 159 },
  { bank: "DISCOVER", limit: 11500, age: "3 Yrs, 4 Mos", addBy: "29th", reporting: "18th - 23rd", stock: 1, cost: 289 },
  { bank: "BARCLAYS", limit: 17000, age: "4 Yrs, 4 Mos", addBy: "18th", reporting: "10th - 15th", stock: 1, cost: 349 },
  { bank: "DISCOVER", limit: 10000, age: "10 Yrs, 5 Mos", addBy: "13th", reporting: "02nd - 7th", stock: 1, cost: 449 },
  { bank: "US BANK", limit: 500, age: "2 Yrs, 0 Mos", addBy: "18th", reporting: "07th - 12th", stock: 1, cost: 149 },
  { bank: "DISCOVER", limit: 19000, age: "7 Yrs, 7 Mos", addBy: "13th", reporting: "02nd - 7th", stock: 1, cost: 499 },
  { bank: "CITIBANK", limit: 13000, age: "7 Yrs, 9 Mos", addBy: "2nd", reporting: "22nd - 27th", stock: 1, cost: 459 },
  { bank: "AMERICAN EXPRESS", limit: 20100, age: "Amex reports limit only, not history", addBy: "30th", reporting: "18th - 23rd", stock: 1, cost: 259 },
  { bank: "DISCOVER", limit: 20000, age: "9 Yrs, 4 Mos", addBy: "30th", reporting: "18th - 23rd", stock: 1, cost: 529 },
  { bank: "CITIBANK", limit: 16500, age: "11 Yrs, 9 Mos", addBy: "7th", reporting: "26th - 1st", stock: 1, cost: 549 },
  { bank: "PENFED", limit: 3500, age: "3 Yrs, 2 Mos", addBy: "2nd", reporting: "21st - 26th", stock: 1, cost: 229 },
  { bank: "CAPITAL ONE", limit: 32000, age: "3 Yrs, 0 Mos", addBy: "30th", reporting: "19th - 24th", stock: 1, cost: 459 },
  { bank: "CHASE", limit: 21100, age: "9 Yrs, 0 Mos", addBy: "3rd", reporting: "20th - 25th", stock: 1, cost: 509 },
  { bank: "CAPITAL ONE", limit: 5000, age: "3 Yrs, 7 Mos", addBy: "4th", reporting: "23rd - 28th", stock: 1, cost: 239 },
  { bank: "ELAN", limit: 25000, age: "1 Yrs, 0 Mos", addBy: "2nd", reporting: "21st - 26th", stock: 1, cost: 329 },
  { bank: "ELAN", limit: 20000, age: "0 Yrs, 0 Mos", addBy: "2nd", reporting: "21st - 26th", stock: 1, cost: 289 },
  { bank: "US BANK", limit: 1000, age: "2 Yrs, 0 Mos", addBy: "29th", reporting: "18th - 23rd", stock: 1, cost: 169 },
  { bank: "CHASE", limit: 7800, age: "3 Yrs, 4 Mos", addBy: "8th", reporting: "30th - 5th", stock: 1, cost: 269 },
  { bank: "CITIBANK", limit: 3500, age: "3 Yrs, 6 Mos", addBy: "25th", reporting: "14th - 19th", stock: 1, cost: 229 },
  { bank: "CHASE", limit: 19300, age: "0 Yrs, 4 Mos", addBy: "30th", reporting: "18th - 23rd", stock: 1, cost: 279 },
  { bank: "CHASE", limit: 15000, age: "2 Yrs, 0 Mos", addBy: "1st", reporting: "20th - 25th", stock: 1, cost: 289 },
  { bank: "CITIBANK", limit: 46100, age: "8 Yrs, 7 Mos", addBy: "7th", reporting: "26th - 1st", stock: 1, cost: 879 },
  { bank: "CHASE", limit: 35000, age: "10 Yrs, 0 Mos", addBy: "5th", reporting: "25th - 30th", stock: 1, cost: 749 },
  { bank: "BARCLAYS", limit: 2000, age: "4 Yrs, 5 Mos", addBy: "01th", reporting: "21st - 26th", stock: 2, cost: 229 },
  { bank: "AMERICAN EXPRESS", limit: 31000, age: "Amex reports limit only, not history", addBy: "19th", reporting: "08th -13th", stock: 2, cost: 389 },
  { bank: "BARCLAYS", limit: 22500, age: "2 Yrs, 8 Mos", addBy: "25th", reporting: "14th - 19th", stock: 2, cost: 319 },
  { bank: "BARCLAYS", limit: 25000, age: "2 Yrs, 9 Mos", addBy: "9th", reporting: "29th - 4th", stock: 2, cost: 349 },
  { bank: "ELAN", limit: 25000, age: "5 Yrs, 4 Mos", addBy: "13th", reporting: "04th - 9th", stock: 2, cost: 529 },
  { bank: "ELAN", limit: 12500, age: "5 Yrs, 5 Mos", addBy: "5th", reporting: "04th - 9th", stock: 2, cost: 349 },
  { bank: "AMERICAN EXPRESS", limit: 30000, age: "Amex reports limit only, not history", addBy: "7th", reporting: "26th - 1st", stock: 2, cost: 379 },
  { bank: "DISCOVER", limit: 5600, age: "21 Yrs, 3 Mos", addBy: "20th", reporting: "10th - 15th", stock: 2, cost: 699 },
  { bank: "ELAN", limit: 14000, age: "14 Yrs, 7 Mos", addBy: "10th", reporting: "04th - 9th", stock: 2, cost: 579 },
  { bank: "AMERICAN EXPRESS", limit: 9500, age: "Amex reports limit only, not history", addBy: "14th", reporting: "06th - 11th", stock: 2, cost: 199 },
  { bank: "AMERICAN EXPRESS", limit: 12000, age: "Amex reports limit only, not history", addBy: "27th", reporting: "16th - 21st", stock: 2, cost: 209 },
  { bank: "CITIBANK", limit: 21000, age: "23 Yrs, 11 Mos", addBy: "5th", reporting: "23rd - 28th", stock: 2, cost: 989 },
  { bank: "ELAN", limit: 12400, age: "7 Yrs, 9 Mos", addBy: "10th", reporting: "04th - 9th", stock: 2, cost: 449 },
  { bank: "BARCLAYS", limit: 2000, age: "1 Yrs, 0 Mos", addBy: "25th", reporting: "14th - 19th", stock: 2, cost: 169 },
  { bank: "CITIBANK", limit: 15000, age: "31 Yrs, 7 Mos", addBy: "20th", reporting: "10th - 15th", stock: 2, cost: 1199 },
  { bank: "BARCLAYS", limit: 11000, age: "1 Yrs, 1 Mos", addBy: "24th", reporting: "14th - 19th", stock: 2, cost: 219 },
  { bank: "ELAN", limit: 14000, age: "11 Yrs, 6 Mos", addBy: "8th", reporting: "04th - 9th", stock: 2, cost: 529 },
  { bank: "CITIBANK", limit: 32700, age: "16 Yrs, 5 Mos", addBy: "11th", reporting: "01st - 6th", stock: 2, cost: 949 },
  { bank: "BARCLAYS", limit: 22300, age: "8 Yrs, 8 Mos", addBy: "11th", reporting: "01st - 6th", stock: 2, cost: 509 },
  { bank: "CITIBANK", limit: 52000, age: "32 Yrs, 11 Mos", addBy: "8th", reporting: "26th - 1st", stock: 2, cost: 1649 },
  { bank: "BARCLAYS", limit: 9000, age: "0 Yrs, 1 Mos", addBy: "3rd", reporting: "24th - 29th", stock: 2, cost: 209 },
  { bank: "AMERICAN EXPRESS", limit: 35000, age: "Amex reports limit only, not history", addBy: "1st", reporting: "17th - 22nd", stock: 2, cost: 419 },
  { bank: "CITIBANK", limit: 16700, age: "9 Yrs, 1 Mos", addBy: "25th", reporting: "15th - 20th", stock: 2, cost: 469 },
  { bank: "CITIBANK", limit: 13000, age: "2 Yrs, 3 Mos", addBy: "9th", reporting: "28th - 3rd", stock: 2, cost: 289 },
  { bank: "CHASE", limit: 12800, age: "11 Yrs, 4 Mos", addBy: "26th", reporting: "16th - 21st", stock: 2, cost: 519 },
  { bank: "AMERICAN EXPRESS", limit: 4000, age: "Amex reports limit only, not history", addBy: "8th", reporting: "27th - 2nd", stock: 2, cost: 129 },
  { bank: "CITIBANK", limit: 11000, age: "17 Yrs, 5 Mos", addBy: "12th", reporting: "30th - 4th", stock: 2, cost: 659 },
  { bank: "BARCLAYS", limit: 6000, age: "3 Yrs, 1 Mos", addBy: "9th", reporting: "29th - 4th", stock: 2, cost: 229 },
  { bank: "BARCLAYS", limit: 15050, age: "7 Yrs, 2 Mos", addBy: "8th", reporting: "28th - 3rd", stock: 2, cost: 479 },
  { bank: "CHASE", limit: 29500, age: "0 Yrs, 10 Mos", addBy: "10th", reporting: "29th - 4th", stock: 2, cost: 399 },
  { bank: "CITIBANK", limit: 9400, age: "11 Yrs, 1 Mos", addBy: "14th", reporting: "02nd - 7th", stock: 2, cost: 449 },
  { bank: "AMERICAN EXPRESS", limit: 15000, age: "Amex reports limit only, not history", addBy: "10th", reporting: "30th - 5th", stock: 3, cost: 229 },
  { bank: "AMERICAN EXPRESS", limit: 30000, age: "Amex reports limit only, not history", addBy: "8th", reporting: "27th - 2nd", stock: 3, cost: 379 },
  { bank: "AMERICAN EXPRESS", limit: 41000, age: "Amex reports limit only, not history", addBy: "23th", reporting: "12th - 17th", stock: 3, cost: 499 },
  { bank: "AMERICAN EXPRESS", limit: 30000, age: "Amex reports limit only, not history", addBy: "2nd", reporting: "21st - 26th", stock: 3, cost: 379 },
  { bank: "AMERICAN EXPRESS", limit: 12900, age: "Amex reports limit only, not history", addBy: "27th", reporting: "17th - 22nd", stock: 3, cost: 209 },
  { bank: "AMERICAN EXPRESS", limit: 15000, age: "Amex reports limit only, not history", addBy: "28th", reporting: "17th - 22nd", stock: 3, cost: 229 },
  { bank: "AMERICAN EXPRESS", limit: 10500, age: "Amex reports limit only, not history", addBy: "3rd", reporting: "21st - 26th", stock: 3, cost: 209 },
  { bank: "AMERICAN EXPRESS", limit: 5200, age: "Amex reports limit only, not history", addBy: "15th", reporting: "03rd - 8th", stock: 3, cost: 149 },
  { bank: "AMERICAN EXPRESS", limit: 10800, age: "Amex reports limit only, not history", addBy: "1st", reporting: "21st - 26th", stock: 3, cost: 209 },
];

function money(n) {
  return `$${n.toLocaleString("en-US")}`;
}

function markedUpPrice(cost) {
  return Math.round(cost * MARKUP);
}

function buildRows() {
  return inventory
    .map((t) => {
      const price = markedUpPrice(t.cost);
      return `
        <tr>
          <td>${t.bank}</td>
          <td>${money(t.limit)}</td>
          <td>${t.age}</td>
          <td>${t.addBy}</td>
          <td>${t.reporting}</td>
          <td>${t.stock} in stock</td>
          <td><strong>${money(price)}</strong></td>
          <td><a href="/sign-up.html" class="btn btn-gold">Request This Line</a></td>
        </tr>`;
    })
    .join("\n");
}

module.exports = {
  title: "Tradeline Inventory — Credit-Fixed",
  description: "Current tradeline inventory and pricing for verified clients.",
  canonicalPath: "/tradeline-list.html",
  activeHref: null,
  noindex: true,
  body: `
    <div class="container" style="padding: 48px 0;">
      <h1>Current Tradeline Inventory</h1>
      <p class="small">This page is for verified clients only. Please do
      not share this link. Availability and pricing are subject to
      change without notice — each listing has one confirmed slot per
      unit shown, so act before the "Add by" date.</p>

      <div style="overflow-x: auto;">
        <table>
          <thead>
            <tr>
              <th>Bank</th>
              <th>Credit Limit</th>
              <th>Tradeline Age</th>
              <th>Add By Date</th>
              <th>Reporting Window</th>
              <th>Availability</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            ${buildRows()}
          </tbody>
        </table>
      </div>

      <p style="margin-top: 32px;">Questions before you choose? Book a
      free consultation and we'll help you pick the right tradeline for
      your goals. ${calendlyBtn("Book a Free Consultation")}</p>
    </div>
  `,
};