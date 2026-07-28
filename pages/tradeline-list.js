// pages/tradeline-list.js
// Public tradeline inventory page — linked from tradelines.html
//
// SECURITY NOTE: The wholesale "cost" figures below are your supplier
// price and must NEVER reach the browser. The markup is calculated right
// here, at BUILD TIME (when you run `node generate.js` on your own
// machine) — the "inventory" array below never leaves your computer.
// Only "clientInventory" (cost already replaced by the final price) gets
// embedded into the page's HTML/JS that ships to visitors. Do not change
// this so that "cost" or MARKUP_FLAT ends up inside the returned `body`
// template string, or the wholesale price becomes visible via View Source.

const { calendlyBtn } = require("../build.js");

const MARKUP_FLAT = 100;

// Your actual supplier cost — stays server-side only, used to compute
// clientInventory below and then discarded.
const inventory = [
  { bank: "WELLS FARGO", limit: 21000, age: "2022", closeDate: "2ND", availability: "15", cost: 250 },
  { bank: "AMERICAN EXPRESS", limit: 25000, age: "Amex reports limit only, not history", closeDate: "2ND", availability: "Many", cost: 210 },
  { bank: "AMERICAN EXPRESS", limit: 22000, age: "Amex reports limit only, not history", closeDate: "2ND", availability: "Many", cost: 200 },
  { bank: "CITIBANK", limit: 19500, age: "2023", closeDate: "2ND", availability: "2", cost: 215 },
  { bank: "AMERICAN EXPRESS", limit: 35000, age: "Amex reports limit only, not history", closeDate: "2ND", availability: "Many", cost: 235 },
  { bank: "BANK OF AMERICA", limit: 14800, age: "2025", closeDate: "2ND", availability: "2", cost: 215 },
  { bank: "CAPITAL ONE", limit: 7000, age: "2022", closeDate: "2ND", availability: "4", cost: 170 },
  { bank: "CHASE", limit: 7300, age: "2018", closeDate: "2ND", availability: "11", cost: 200 },
  { bank: "CITIBANK", limit: 3000, age: "2023", closeDate: "2ND", availability: "8", cost: 145 },
  { bank: "AMERICAN EXPRESS", limit: 30000, age: "Amex reports limit only, not history", closeDate: "3RD", availability: "Many", cost: 230 },
  { bank: "CITIBANK", limit: 4500, age: "2022", closeDate: "3RD", availability: "8", cost: 145 },
  { bank: "AMERICAN EXPRESS", limit: 21800, age: "Amex reports limit only, not history", closeDate: "3RD", availability: "Many", cost: 200 },
  { bank: "WELLS FARGO", limit: 7000, age: "2024", closeDate: "3RD", availability: "15", cost: 140 },
  { bank: "AMERICAN EXPRESS", limit: 6500, age: "Amex reports limit only, not history", closeDate: "3RD", availability: "Many", cost: 130 },
  { bank: "CITIBANK", limit: 3000, age: "2025", closeDate: "3RD", availability: "6", cost: 140 },
  { bank: "CITIBANK", limit: 3000, age: "2023", closeDate: "3RD", availability: "5", cost: 145 },
  { bank: "CITIBANK", limit: 15500, age: "2019", closeDate: "3RD", availability: "1", cost: 250 },
  { bank: "WELLS FARGO", limit: 11000, age: "2022", closeDate: "3RD", availability: "15", cost: 180 },
  { bank: "CHASE", limit: 7000, age: "2007", closeDate: "3RD", availability: "1", cost: 300 },
  { bank: "CHASE", limit: 2500, age: "2024", closeDate: "3RD", availability: "1", cost: 145 },
  { bank: "WELLS FARGO", limit: 9700, age: "2017", closeDate: "3RD", availability: "15", cost: 240 },
  { bank: "BARCLAYS", limit: 20000, age: "2018", closeDate: "3RD", availability: "3", cost: 255 },
  { bank: "BARCLAYS", limit: 5500, age: "2021", closeDate: "3RD", availability: "15", cost: 160 },
  { bank: "CAPITAL ONE", limit: 500, age: "2019", closeDate: "3RD", availability: "2", cost: 100 },
  { bank: "CAPITAL ONE", limit: 5000, age: "2018", closeDate: "3RD", availability: "2", cost: 185 },
  { bank: "US BANK", limit: 7000, age: "2024", closeDate: "3RD", availability: "1", cost: 160 },
  { bank: "CHASE", limit: 8500, age: "2016", closeDate: "3RD", availability: "1", cost: 225 },
  { bank: "CITIBANK", limit: 11100, age: "2025", closeDate: "3RD", availability: "2", cost: 160 },
  { bank: "CITIBANK", limit: 10000, age: "2016", closeDate: "3RD", availability: "1", cost: 260 },
  { bank: "CAPITAL ONE", limit: 3500, age: "2018", closeDate: "3RD", availability: "10", cost: 185 },
  { bank: "AMERICAN EXPRESS", limit: 15000, age: "Amex reports limit only, not history", closeDate: "3RD", availability: "Many", cost: 160 },
  { bank: "AMERICAN EXPRESS", limit: 3000, age: "Amex reports limit only, not history", closeDate: "3RD", availability: "Many", cost: 110 },
  { bank: "CHASE", limit: 14200, age: "2025", closeDate: "3RD", availability: "3", cost: 195 },
  { bank: "CHASE", limit: 13200, age: "2025", closeDate: "3RD", availability: "3", cost: 185 },
  { bank: "BARCLAYS", limit: 50000, age: "2024", closeDate: "3RD", availability: "5", cost: 285 },
  { bank: "CITIBANK", limit: 1500, age: "2025", closeDate: "3RD", availability: "3", cost: 115 },
  { bank: "CITIBANK", limit: 17600, age: "2022", closeDate: "3RD", availability: "10", cost: 210 },
  { bank: "CITIBANK", limit: 11800, age: "2025", closeDate: "3RD", availability: "7", cost: 170 },
  { bank: "CITIBANK", limit: 17000, age: "2025", closeDate: "3RD", availability: "2", cost: 195 },
  { bank: "CITIBANK", limit: 7000, age: "2025", closeDate: "4TH", availability: "2", cost: 150 },
  { bank: "BARCLAYS", limit: 2000, age: "2025", closeDate: "4TH", availability: "15", cost: 100 },
  { bank: "CITIBANK", limit: 3000, age: "2025", closeDate: "4TH", availability: "10", cost: 100 },
  { bank: "CITIBANK", limit: 11600, age: "2025", closeDate: "5TH", availability: "7", cost: 155 },
  { bank: "CITIBANK", limit: 4000, age: "2025", closeDate: "5TH", availability: "3", cost: 100 },
  { bank: "CHASE", limit: 14000, age: "2022", closeDate: "5TH", availability: "5", cost: 215 },
  { bank: "BARCLAYS", limit: 4800, age: "2025", closeDate: "5TH", availability: "2", cost: 150 },
  { bank: "CITIZENS", limit: 11000, age: "90 day term 2016", closeDate: "5TH", availability: "1", cost: 350 },
  { bank: "BARCLAYS", limit: 6200, age: "2022", closeDate: "5TH", availability: "5", cost: 170 },
  { bank: "WELLS FARGO", limit: 7000, age: "2025", closeDate: "5TH", availability: "13", cost: 135 },
  { bank: "CAPITAL ONE", limit: 20000, age: "2024", closeDate: "5TH", availability: "5", cost: 250 },
  { bank: "CITIBANK", limit: 3000, age: "2020", closeDate: "6TH", availability: "5", cost: 140 },
  { bank: "WELLS FARGO", limit: 7500, age: "2022", closeDate: "6TH", availability: "15", cost: 160 },
  { bank: "WELLS FARGO", limit: 4400, age: "2019", closeDate: "6TH", availability: "15", cost: 150 },
  { bank: "ROBINHOOD", limit: 5000, age: "2024", closeDate: "6TH", availability: "4", cost: 140 },
  { bank: "AMERICAN EXPRESS", limit: 9500, age: "Amex reports limit only, not history", closeDate: "6TH", availability: "Many", cost: 155 },
  { bank: "CHASE", limit: 7500, age: "2023", closeDate: "6TH", availability: "1", cost: 160 },
  { bank: "CITIBANK", limit: 8800, age: "2025", closeDate: "6TH", availability: "7", cost: 150 },
  { bank: "AMERICAN EXPRESS", limit: 22000, age: "Amex reports limit only, not history", closeDate: "6TH", availability: "Many", cost: 200 },
  { bank: "WELLS FARGO", limit: 2000, age: "2022", closeDate: "6TH", availability: "15", cost: 110 },
  { bank: "CITIBANK", limit: 21700, age: "2019", closeDate: "6TH", availability: "1", cost: 275 },
  { bank: "WELLS FARGO", limit: 20000, age: "2019", closeDate: "6TH", availability: "15", cost: 280 },
  { bank: "CAPITAL ONE", limit: 5500, age: "2019", closeDate: "6TH", availability: "1", cost: 160 },
  { bank: "CITIBANK", limit: 6600, age: "2022", closeDate: "6TH", availability: "2", cost: 165 },
  { bank: "CITIBANK", limit: 8800, age: "2025", closeDate: "6TH", availability: "9", cost: 155 },
  { bank: "AMERICAN EXPRESS", limit: 35000, age: "Amex reports limit only, not history", closeDate: "6TH", availability: "Many", cost: 230 },
  { bank: "TD BANK", limit: 8000, age: "2025", closeDate: "6TH", availability: "3", cost: 150 },
  { bank: "BARCLAYS", limit: 15000, age: "2024", closeDate: "6TH", availability: "4", cost: 215 },
  { bank: "AMERICAN EXPRESS", limit: 20000, age: "Amex reports limit only, not history", closeDate: "7TH", availability: "Many", cost: 195 },
  { bank: "WELLS FARGO", limit: 10000, age: "2021", closeDate: "7TH", availability: "15", cost: 190 },
  { bank: "CITIBANK", limit: 8800, age: "2025", closeDate: "7TH", availability: "2", cost: 155 },
  { bank: "CITIBANK", limit: 15000, age: "2024", closeDate: "7TH", availability: "1", cost: 200 },
  { bank: "CITIBANK", limit: 7000, age: "2024", closeDate: "7TH", availability: "5", cost: 160 },
  { bank: "CAPITAL ONE", limit: 2000, age: "2023", closeDate: "7TH", availability: "1", cost: 115 },
  { bank: "NFCU", limit: 25000, age: "2018", closeDate: "7TH", availability: "1", cost: 285 },
  { bank: "BARCLAYS", limit: 11200, age: "2024", closeDate: "7TH", availability: "7", cost: 165 },
  { bank: "CITIBANK", limit: 6500, age: "2022", closeDate: "7TH", availability: "3", cost: 150 },
  { bank: "GOLDMAN SACHS", limit: 12000, age: "2024", closeDate: "7TH", availability: "2", cost: 175 },
  { bank: "CITIBANK", limit: 14000, age: "2024", closeDate: "7TH", availability: "4", cost: 185 },
  { bank: "CITIBANK", limit: 1000, age: "2019", closeDate: "7TH", availability: "5", cost: 150 },
  { bank: "CITIBANK", limit: 8800, age: "2025", closeDate: "7TH", availability: "5", cost: 165 },
  { bank: "CAPITAL ONE", limit: 4000, age: "2025", closeDate: "7TH", availability: "10", cost: 150 },
  { bank: "TD BANK", limit: 6000, age: "2021", closeDate: "7TH", availability: "4", cost: 155 },
  { bank: "DISCOVER", limit: 5000, age: "2025", closeDate: "7TH", availability: "2", cost: 155 },
  { bank: "CITIBANK", limit: 8700, age: "2022", closeDate: "7TH", availability: "5", cost: 150 },
  { bank: "WELLS FARGO", limit: 3000, age: "2023", closeDate: "7TH", availability: "15", cost: 110 },
  { bank: "DISCOVER", limit: 7000, age: "2015", closeDate: "7TH", availability: "3", cost: 295 },
  { bank: "CITIBANK", limit: 10000, age: "2024", closeDate: "7TH", availability: "2", cost: 185 },
  { bank: "CHASE", limit: 15000, age: "2020", closeDate: "7TH", availability: "5", cost: 225 },
  { bank: "WELLS FARGO", limit: 1000, age: "2022", closeDate: "8TH", availability: "13", cost: 115 },
  { bank: "CAPITAL ONE", limit: 3000, age: "2021", closeDate: "8TH", availability: "5", cost: 150 },
  { bank: "DISCOVER", limit: 10000, age: "2025", closeDate: "8TH", availability: "1", cost: 185 },
  { bank: "CAPITAL ONE", limit: 4400, age: "2024", closeDate: "8TH", availability: "2", cost: 140 },
  { bank: "CAPITAL ONE", limit: 500, age: "2025", closeDate: "8TH", availability: "1", cost: 90 },
  { bank: "BARCLAYS", limit: 9000, age: "2023", closeDate: "8TH", availability: "8", cost: 180 },
  { bank: "ELAN", limit: 23000, age: "2021", closeDate: "9TH", availability: "4", cost: 285 },
  { bank: "CHASE", limit: 22000, age: "2024", closeDate: "9TH", availability: "9", cost: 250 },
  { bank: "CITIBANK", limit: 9900, age: "2023", closeDate: "9TH", availability: "1", cost: 165 },
  { bank: "CITIBANK", limit: 2200, age: "2015", closeDate: "9TH", availability: "2", cost: 215 },
  { bank: "CITIBANK", limit: 5000, age: "2022", closeDate: "9TH", availability: "3", cost: 150 },
  { bank: "CITIBANK", limit: 4000, age: "2025", closeDate: "9TH", availability: "5", cost: 130 },
  { bank: "CITIBANK", limit: 9200, age: "2025", closeDate: "9TH", availability: "6", cost: 150 },
  { bank: "CHASE", limit: 12600, age: "2025", closeDate: "9TH", availability: "1", cost: 175 },
  { bank: "AMERICAN EXPRESS", limit: 23000, age: "Amex reports limit only, not history", closeDate: "9TH", availability: "Many", cost: 200 },
  { bank: "WELLS FARGO", limit: 4200, age: "2023", closeDate: "9TH", availability: "4", cost: 145 },
  { bank: "CAPITAL ONE", limit: 3000, age: "2024", closeDate: "9TH", availability: "6", cost: 145 },
  { bank: "CAPITAL ONE", limit: 15000, age: "2025", closeDate: "9TH", availability: "3", cost: 195 },
  { bank: "CITIBANK", limit: 2300, age: "2022", closeDate: "9TH", availability: "1", cost: 145 },
  { bank: "BARCLAYS", limit: 12000, age: "2024", closeDate: "10TH", availability: "5", cost: 180 },
  { bank: "CITIBANK", limit: 7200, age: "2025", closeDate: "10TH", availability: "9", cost: 150 },
  { bank: "AMERICAN EXPRESS", limit: 9200, age: "Amex reports limit only, not history", closeDate: "10TH", availability: "Many", cost: 150 },
  { bank: "WELLS FARGO", limit: 9000, age: "2020", closeDate: "10TH", availability: "15", cost: 185 },
  { bank: "CITIBANK", limit: 6200, age: "2021", closeDate: "10TH", availability: "3", cost: 180 },
  { bank: "CITIBANK", limit: 2200, age: "2018", closeDate: "10TH", availability: "2", cost: 150 },
  { bank: "WELLS FARGO", limit: 15700, age: "2023", closeDate: "10TH", availability: "14", cost: 195 },
  { bank: "CITIBANK", limit: 1500, age: "2026", closeDate: "10TH", availability: "4", cost: 110 },
  { bank: "CITIBANK", limit: 8000, age: "2023", closeDate: "10TH", availability: "8", cost: 165 },
  { bank: "CHASE", limit: 17000, age: "2024", closeDate: "10TH", availability: "2", cost: 200 },
  { bank: "BARCLAYS", limit: 9000, age: "2022", closeDate: "10TH", availability: "2", cost: 185 },
  { bank: "CITIBANK", limit: 10000, age: "2022", closeDate: "10TH", availability: "5", cost: 195 },
  { bank: "AMERICAN EXPRESS", limit: 5000, age: "Amex reports limit only, not history", closeDate: "10TH", availability: "Many", cost: 120 },
  { bank: "WELLS FARGO", limit: 4200, age: "2023", closeDate: "10TH", availability: "15", cost: 130 },
  { bank: "AMERICAN EXPRESS", limit: 95500, age: "Amex reports limit only, not history", closeDate: "10TH", availability: "Many", cost: 325 },
  { bank: "WELLS FARGO", limit: 72000, age: "2022", closeDate: "10TH", availability: "15", cost: 300 },
  { bank: "CAPITAL ONE", limit: 3000, age: "2021", closeDate: "10TH", availability: "4", cost: 155 },
  { bank: "CAPITAL ONE", limit: 3000, age: "2025", closeDate: "10TH", availability: "5", cost: 110 },
  { bank: "AMERICAN EXPRESS", limit: 33000, age: "Amex reports limit only, not history", closeDate: "10TH", availability: "Many", cost: 225 },
  { bank: "CITIBANK", limit: 2000, age: "2026", closeDate: "10TH", availability: "4", cost: 120 },
  { bank: "NFCU", limit: 11700, age: "2026", closeDate: "10TH", availability: "2", cost: 185 },
  { bank: "AMERICAN EXPRESS", limit: 2100, age: "Amex reports limit only, not history", closeDate: "10TH", availability: "Many", cost: 110 },
  { bank: "CAPITAL ONE", limit: 23000, age: "2024", closeDate: "10TH", availability: "9", cost: 250 },
  { bank: "CITIBANK", limit: 50000, age: "2015", closeDate: "10TH", availability: "4", cost: 325 },
  { bank: "CAPITAL ONE", limit: 3000, age: "2024", closeDate: "10TH", availability: "5", cost: 135 },
  { bank: "AMERICAN EXPRESS", limit: 15000, age: "Amex reports limit only, not history", closeDate: "10TH", availability: "Many", cost: 170 },
  { bank: "CITIBANK", limit: 6800, age: "2023", closeDate: "12TH", availability: "5", cost: 165 },
  { bank: "WELLS FARGO", limit: 6000, age: "2024", closeDate: "12TH", availability: "10", cost: 150 },
  { bank: "DISCOVER", limit: 9500, age: "2024", closeDate: "12TH", availability: "1", cost: 170 },
  { bank: "CITIBANK", limit: 2000, age: "2025", closeDate: "12TH", availability: "5", cost: 100 },
  { bank: "WELLS FARGO", limit: 7200, age: "2013", closeDate: "12TH", availability: "10", cost: 265 },
  { bank: "AMERICAN EXPRESS", limit: 18900, age: "Amex reports limit only, not history", closeDate: "12TH", availability: "Many", cost: 180 },
  { bank: "CITIBANK", limit: 9000, age: "2019", closeDate: "13TH", availability: "5", cost: 200 },
  { bank: "CAPITAL ONE", limit: 3000, age: "2021", closeDate: "13TH", availability: "1", cost: 120 },
  { bank: "CITIBANK", limit: 2300, age: "2001", closeDate: "13TH", availability: "1", cost: 300 },
  { bank: "CAPITAL ONE", limit: 3000, age: "2024", closeDate: "13TH", availability: "5", cost: 115 },
  { bank: "CITIBANK", limit: 560, age: "2021", closeDate: "13TH", availability: "5", cost: 100 },
  { bank: "ALLIANT", limit: 15000, age: "2019", closeDate: "13TH", availability: "3", cost: 250 },
  { bank: "WELLS FARGO", limit: 6000, age: "2024", closeDate: "13TH", availability: "15", cost: 145 },
  { bank: "CITIBANK", limit: 4000, age: "2021", closeDate: "13TH", availability: "1", cost: 145 },
  { bank: "BARCLAYS", limit: 2000, age: "2023", closeDate: "13TH", availability: "4", cost: 125 },
  { bank: "CITIBANK", limit: 17500, age: "2025", closeDate: "13TH", availability: "5", cost: 195 },
  { bank: "CITIBANK", limit: 3500, age: "2020", closeDate: "13TH", availability: "4", cost: 145 },
  { bank: "CITIBANK", limit: 20000, age: "2021", closeDate: "13TH", availability: "7", cost: 260 },
  { bank: "CITIBANK", limit: 15000, age: "2016", closeDate: "13TH", availability: "1", cost: 265 },
  { bank: "AMERICAN EXPRESS", limit: 10000, age: "Amex reports limit only, not history", closeDate: "13TH", availability: "Many", cost: 155 },
  { bank: "CAPITAL ONE", limit: 500, age: "2025", closeDate: "13TH", availability: "3", cost: 90 },
  { bank: "CAPITAL ONE", limit: 6200, age: "2021", closeDate: "13TH", availability: "15", cost: 165 },
  { bank: "CHASE", limit: 20000, age: "2025", closeDate: "13TH", availability: "4", cost: 255 },
  { bank: "AMERICAN EXPRESS", limit: 11500, age: "Amex reports limit only, not history", closeDate: "13TH", availability: "Many", cost: 160 },
  { bank: "WELLS FARGO", limit: 11000, age: "2025", closeDate: "13TH", availability: "4", cost: 140 },
  { bank: "BARCLAYS", limit: 22000, age: "2024", closeDate: "13TH", availability: "8", cost: 220 },
  { bank: "BARCLAYS", limit: 20000, age: "2024", closeDate: "13TH", availability: "10", cost: 215 },
  { bank: "DISCOVER", limit: 4000, age: "6 MO TERM 2025", closeDate: "13TH", availability: "1", cost: 250 },
  { bank: "CHASE", limit: 26000, age: "2025", closeDate: "14TH", availability: "2", cost: 225 },
  { bank: "CAPITAL ONE", limit: 500, age: "2017", closeDate: "14TH", availability: "2", cost: 140 },
  { bank: "BARCLAYS", limit: 1500, age: "2022", closeDate: "14TH", availability: "4", cost: 150 },
  { bank: "CITIBANK", limit: 12000, age: "2017", closeDate: "14TH", availability: "4", cost: 250 },
  { bank: "WELLS FARGO", limit: 14000, age: "2025", closeDate: "14TH", availability: "15", cost: 180 },
  { bank: "CITIBANK", limit: 20000, age: "2018", closeDate: "14TH", availability: "2", cost: 260 },
  { bank: "CAPITAL ONE", limit: 4000, age: "2025", closeDate: "14TH", availability: "10", cost: 125 },
  { bank: "CAPITAL ONE", limit: 3300, age: "2022", closeDate: "14TH", availability: "5", cost: 150 },
  { bank: "WELLS FARGO", limit: 11000, age: "2025", closeDate: "14TH", availability: "11", cost: 155 },
  { bank: "CAPITAL ONE", limit: 1000, age: "2022", closeDate: "15TH", availability: "3", cost: 120 },
  { bank: "CITIBANK", limit: 3000, age: "2025", closeDate: "15TH", availability: "2", cost: 120 },
  { bank: "DISCOVER", limit: 12500, age: "2020", closeDate: "15TH", availability: "5", cost: 215 },
  { bank: "AMERICAN EXPRESS", limit: 75000, age: "90 DAY TERM", closeDate: "15TH", availability: "Many", cost: 350 },
  { bank: "CITIBANK", limit: 9200, age: "2025", closeDate: "15TH", availability: "10", cost: 160 },
  { bank: "CAPITAL ONE", limit: 7500, age: "2020", closeDate: "15TH", availability: "2", cost: 195 },
  { bank: "CITIBANK", limit: 8400, age: "2019", closeDate: "15TH", availability: "2", cost: 185 },
  { bank: "TD BANK", limit: 8000, age: "2024", closeDate: "15TH", availability: "3", cost: 160 },
  { bank: "US BANK", limit: 500, age: "2024", closeDate: "15TH", availability: "3", cost: 95 },
  { bank: "CAPITAL ONE", limit: 13700, age: "2022", closeDate: "15TH", availability: "4", cost: 195 },
  { bank: "US BANK", limit: 4700, age: "2023", closeDate: "15TH", availability: "1", cost: 150 },
  { bank: "CITIBANK", limit: 9200, age: "2025", closeDate: "15TH", availability: "5", cost: 160 },
  { bank: "CAPITAL ONE", limit: 1000, age: "2022", closeDate: "15TH", availability: "3", cost: 125 },
  { bank: "BARCLAYS", limit: 4000, age: "2022", closeDate: "15TH", availability: "10", cost: 165 },
  { bank: "CITIBANK", limit: 6200, age: "2024", closeDate: "15TH", availability: "5", cost: 155 },
  { bank: "CHASE", limit: 8900, age: "2022", closeDate: "15TH", availability: "11", cost: 195 },
  { bank: "BARCLAYS", limit: 1500, age: "2026", closeDate: "15TH", availability: "2", cost: 115 },
  { bank: "WELLS FARGO", limit: 15000, age: "2021", closeDate: "15TH", availability: "15", cost: 245 },
  { bank: "CHASE", limit: 600, age: "2022", closeDate: "16TH", availability: "9", cost: 120 },
  { bank: "CITIBANK", limit: 1000, age: "2025", closeDate: "16TH", availability: "2", cost: 100 },
  { bank: "CAPITAL ONE", limit: 1000, age: "2024", closeDate: "16TH", availability: "4", cost: 100 },
  { bank: "CITIBANK", limit: 1000, age: "2025", closeDate: "16TH", availability: "4", cost: 100 },
  { bank: "DISCOVER", limit: 6700, age: "2021", closeDate: "16TH", availability: "2", cost: 215 },
  { bank: "CHASE", limit: 25000, age: "2025", closeDate: "16TH", availability: "2", cost: 215 },
  { bank: "CITIBANK", limit: 4100, age: "2018", closeDate: "16TH", availability: "1", cost: 175 },
  { bank: "PENFED", limit: 8700, age: "2020", closeDate: "16TH", availability: "5", cost: 195 },
  { bank: "CITIBANK", limit: 7500, age: "2023", closeDate: "16TH", availability: "3", cost: 165 },
  { bank: "CITIBANK", limit: 8500, age: "2022", closeDate: "16TH", availability: "4", cost: 170 },
  { bank: "WELLS FARGO", limit: 31000, age: "2025", closeDate: "16TH", availability: "15", cost: 250 },
  { bank: "CITIBANK", limit: 8900, age: "2022", closeDate: "16TH", availability: "2", cost: 175 },
  { bank: "AMERICAN EXPRESS", limit: 4000, age: "Amex reports limit only, not history", closeDate: "16TH", availability: "Many", cost: 115 },
  { bank: "BANK OF AMERICA", limit: 1100, age: "2018", closeDate: "16TH", availability: "2", cost: 175 },
  { bank: "WELLS FARGO", limit: 8000, age: "2025", closeDate: "16TH", availability: "15", cost: 160 },
  { bank: "WELLS FARGO", limit: 25000, age: "2025", closeDate: "16TH", availability: "14", cost: 225 },
  { bank: "CITIBANK", limit: 19000, age: "2024", closeDate: "16TH", availability: "2", cost: 195 },
  { bank: "CITIBANK", limit: 5200, age: "2023", closeDate: "17TH", availability: "6", cost: 155 },
  { bank: "CITIBANK", limit: 3500, age: "2025", closeDate: "17TH", availability: "2", cost: 130 },
  { bank: "CHASE", limit: 8500, age: "2017", closeDate: "17TH", availability: "7", cost: 225 },
  { bank: "CITIBANK", limit: 16500, age: "2018", closeDate: "17TH", availability: "1", cost: 265 },
  { bank: "WELLS FARGO", limit: 7500, age: "2021", closeDate: "17TH", availability: "5", cost: 165 },
  { bank: "CITIBANK", limit: 17500, age: "2011", closeDate: "17TH", availability: "1", cost: 285 },
  { bank: "CAPITAL ONE", limit: 850, age: "2016", closeDate: "17TH", availability: "5", cost: 160 },
  { bank: "TD BANK", limit: 10000, age: "2022", closeDate: "17TH", availability: "4", cost: 185 },
  { bank: "BARCLAYS", limit: 750, age: "2023", closeDate: "17TH", availability: "6", cost: 120 },
  { bank: "CITIBANK", limit: 5000, age: "2019", closeDate: "17TH", availability: "2", cost: 185 },
  { bank: "CHASE", limit: 3200, age: "2023", closeDate: "18TH", availability: "10", cost: 150 },
  { bank: "WELLS FARGO", limit: 15000, age: "2019", closeDate: "18TH", availability: "15", cost: 215 },
  { bank: "CITIBANK", limit: 14800, age: "2025", closeDate: "18TH", availability: "6", cost: 165 },
  { bank: "CITIBANK", limit: 12800, age: "2023", closeDate: "18TH", availability: "6", cost: 180 },
  { bank: "CAPITAL ONE", limit: 30000, age: "2025", closeDate: "18TH", availability: "10", cost: 285 },
  { bank: "CITIBANK", limit: 3600, age: "2018", closeDate: "18TH", availability: "2", cost: 175 },
  { bank: "TRUIST", limit: 20500, age: "2025", closeDate: "18TH", availability: "5", cost: 200 },
  { bank: "AMERICAN EXPRESS", limit: 30000, age: "Amex reports limit only, not history", closeDate: "18TH", availability: "Many", cost: 230 },
  { bank: "AMERICAN EXPRESS", limit: 1000, age: "Amex reports limit only, not history", closeDate: "18TH", availability: "Many", cost: 90 },
  { bank: "BARCLAYS", limit: 2000, age: "2026", closeDate: "18TH", availability: "15", cost: 100 },
  { bank: "CITIBANK", limit: 5000, age: "2014", closeDate: "18TH", availability: "1", cost: 250 },
  { bank: "TRUIST", limit: 25000, age: "2025", closeDate: "18TH", availability: "5", cost: 215 },
  { bank: "DISCOVER", limit: 8000, age: "2022", closeDate: "18TH", availability: "1", cost: 200 },
  { bank: "BARCLAYS", limit: 900, age: "2022", closeDate: "19TH", availability: "6", cost: 155 },
  { bank: "CAPITAL ONE", limit: 500, age: "2023", closeDate: "19TH", availability: "10", cost: 235 },
  { bank: "CITIBANK", limit: 6000, age: "2020", closeDate: "19TH", availability: "10", cost: 180 },
  { bank: "DISCOVER", limit: 9000, age: "2022", closeDate: "19TH", availability: "1", cost: 200 },
  { bank: "CAPITAL ONE", limit: 2600, age: "2022", closeDate: "19TH", availability: "4", cost: 150 },
  { bank: "WELLS FARGO", limit: 17000, age: "2025", closeDate: "19TH", availability: "15", cost: 195 },
  { bank: "AMERICAN EXPRESS", limit: 25000, age: "Amex reports limit only, not history", closeDate: "19TH", availability: "Many", cost: 215 },
  { bank: "AMERICAN EXPRESS", limit: 8000, age: "Amex reports limit only, not history", closeDate: "19TH", availability: "Many", cost: 140 },
  { bank: "WELLS FARGO", limit: 12000, age: "2024", closeDate: "19TH", availability: "9", cost: 165 },
  { bank: "AMERICAN EXPRESS", limit: 28000, age: "Amex reports limit only, not history", closeDate: "19TH", availability: "Many", cost: 210 },
  { bank: "DISCOVER", limit: 11500, age: "2023", closeDate: "20TH", availability: "1", cost: 200 },
  { bank: "WELLS FARGO", limit: 17000, age: "2025", closeDate: "20TH", availability: "10", cost: 200 },
  { bank: "WELLS FARGO", limit: 6000, age: "2021", closeDate: "20TH", availability: "4", cost: 175 },
  { bank: "CITIBANK", limit: 16000, age: "2017", closeDate: "20TH", availability: "1", cost: 265 },
  { bank: "AMERICAN EXPRESS", limit: 2000, age: "Amex reports limit only, not history", closeDate: "20TH", availability: "Many", cost: 100 },
  { bank: "WELLS FARGO", limit: 12000, age: "2025", closeDate: "20TH", availability: "15", cost: 170 },
  { bank: "TRUIST", limit: 10500, age: "2020", closeDate: "20TH", availability: "4", cost: 200 },
  { bank: "CITIBANK", limit: 5700, age: "2025", closeDate: "20TH", availability: "5", cost: 140 },
  { bank: "AMERICAN EXPRESS", limit: 2800, age: "Amex reports limit only, not history", closeDate: "20TH", availability: "Many", cost: 110 },
  { bank: "WELLS FARGO", limit: 12000, age: "2024", closeDate: "20TH", availability: "15", cost: 180 },
  { bank: "WELLS FARGO", limit: 15000, age: "2024", closeDate: "20TH", availability: "14", cost: 180 },
  { bank: "CITIBANK", limit: 6400, age: "2021", closeDate: "20TH", availability: "2", cost: 180 },
  { bank: "AMERICAN EXPRESS", limit: 7500, age: "Amex reports limit only, not history", closeDate: "20TH", availability: "Many", cost: 140 },
  { bank: "DISCOVER", limit: 4000, age: "2024", closeDate: "20TH", availability: "2", cost: 150 },
  { bank: "CAPITAL ONE", limit: 2600, age: "2022", closeDate: "20TH", availability: "4", cost: 150 },
  { bank: "AMERICAN EXPRESS", limit: 10500, age: "Amex reports limit only, not history", closeDate: "20TH", availability: "Many", cost: 155 },
  { bank: "CITIBANK", limit: 3000, age: "2021", closeDate: "20TH", availability: "2", cost: 140 },
  { bank: "CITIBANK", limit: 5800, age: "2017", closeDate: "20TH", availability: "7", cost: 225 },
  { bank: "AMERICAN EXPRESS", limit: 88000, age: "90 DAY TERM", closeDate: "20TH", availability: "Many", cost: 380 },
  { bank: "CITIBANK", limit: 6400, age: "2021", closeDate: "20TH", availability: "8", cost: 170 },
  { bank: "WELLS FARGO", limit: 25000, age: "2012", closeDate: "20TH", availability: "10", cost: 295 },
  { bank: "CAPITAL ONE", limit: 5000, age: "2025", closeDate: "20TH", availability: "1", cost: 145 },
  { bank: "CITIBANK", limit: 4900, age: "2023", closeDate: "20TH", availability: "6", cost: 160 },
  { bank: "AMERICAN EXPRESS", limit: 10000, age: "Amex reports limit only, not history", closeDate: "20TH", availability: "Many", cost: 150 },
  { bank: "BARCLAYS", limit: 1000, age: "2026", closeDate: "20TH", availability: "6", cost: 100 },
  { bank: "AMERICAN EXPRESS", limit: 24000, age: "Amex reports limit only, not history", closeDate: "20TH", availability: "Many", cost: 200 },
  { bank: "WELLS FARGO", limit: 20000, age: "2025", closeDate: "20TH", availability: "15", cost: 200 },
  { bank: "BARCLAYS", limit: 19300, age: "2026", closeDate: "20TH", availability: "15", cost: 195 },
  { bank: "WELLS FARGO", limit: 4000, age: "2021", closeDate: "20TH", availability: "4", cost: 150 },
  { bank: "WELLS FARGO", limit: 18000, age: "2025", closeDate: "21ST", availability: "14", cost: 185 },
  { bank: "WELLS FARGO", limit: 15000, age: "2024", closeDate: "21ST", availability: "15", cost: 190 },
  { bank: "PNC", limit: 5000, age: "2025", closeDate: "21ST", availability: "5", cost: 150 },
  { bank: "WELLS FARGO", limit: 6000, age: "2021", closeDate: "21ST", availability: "15", cost: 160 },
  { bank: "CAPITAL ONE", limit: 1300, age: "2024", closeDate: "21ST", availability: "2", cost: 150 },
  { bank: "CITIBANK", limit: 4000, age: "2023", closeDate: "21ST", availability: "1", cost: 130 },
  { bank: "AMERICAN EXPRESS", limit: 44000, age: "Amex reports limit only, not history", closeDate: "21ST", availability: "Many", cost: 250 },
  { bank: "CITIBANK", limit: 1500, age: "2019", closeDate: "21ST", availability: "3", cost: 130 },
  { bank: "NFCU", limit: 13000, age: "2023", closeDate: "22ND", availability: "1", cost: 195 },
  { bank: "PNC", limit: 9500, age: "2024", closeDate: "22ND", availability: "5", cost: 185 },
  { bank: "BARCLAYS", limit: 22000, age: "2022", closeDate: "22ND", availability: "15", cost: 265 },
  { bank: "CHASE", limit: 10000, age: "2024", closeDate: "22ND", availability: "1", cost: 180 },
  { bank: "CITIBANK", limit: 15000, age: "2020", closeDate: "22ND", availability: "1", cost: 200 },
  { bank: "WELLS FARGO", limit: 11500, age: "2023", closeDate: "22ND", availability: "3", cost: 180 },
  { bank: "WELLS FARGO", limit: 2000, age: "2021", closeDate: "22ND", availability: "15", cost: 110 },
  { bank: "WELLS FARGO", limit: 11000, age: "2017", closeDate: "22ND", availability: "15", cost: 255 },
  { bank: "CAPITAL ONE", limit: 5000, age: "2020", closeDate: "22ND", availability: "3", cost: 190 },
  { bank: "WELLS FARGO", limit: 300, age: "2009", closeDate: "22ND", availability: "15", cost: 215 },
  { bank: "CITIBANK", limit: 10000, age: "2023", closeDate: "22ND", availability: "4", cost: 185 },
  { bank: "CITIBANK", limit: 3000, age: "2015", closeDate: "22ND", availability: "3", cost: 245 },
  { bank: "WELLS FARGO", limit: 30000, age: "2022", closeDate: "22ND", availability: "15", cost: 255 },
  { bank: "CITIBANK", limit: 5000, age: "2020", closeDate: "22ND", availability: "2", cost: 160 },
  { bank: "CITIBANK", limit: 8300, age: "2021", closeDate: "22ND", availability: "5", cost: 175 },
  { bank: "WELLS FARGO", limit: 4000, age: "2021", closeDate: "23RD", availability: "5", cost: 155 },
  { bank: "CITIBANK", limit: 8400, age: "2020", closeDate: "23RD", availability: "8", cost: 180 },
  { bank: "WELLS FARGO", limit: 16000, age: "2024", closeDate: "23RD", availability: "15", cost: 185 },
  { bank: "CHASE", limit: 12000, age: "90 DAY TERM 2018", closeDate: "23RD", availability: "7", cost: 300 },
  { bank: "AMERICAN EXPRESS", limit: 25000, age: "Amex reports limit only, not history", closeDate: "23RD", availability: "Many", cost: 215 },
  { bank: "WELLS FARGO", limit: 3600, age: "2021", closeDate: "23RD", availability: "15", cost: 155 },
  { bank: "WELLS FARGO", limit: 4000, age: "2022", closeDate: "23RD", availability: "8", cost: 150 },
  { bank: "BARCLAYS", limit: 7700, age: "2025", closeDate: "23RD", availability: "14", cost: 150 },
  { bank: "WELLS FARGO", limit: 18000, age: "2023", closeDate: "23RD", availability: "15", cost: 215 },
  { bank: "CAPITAL ONE", limit: 6000, age: "2022", closeDate: "23RD", availability: "2", cost: 175 },
  { bank: "BARCLAYS", limit: 1000, age: "2026", closeDate: "23RD", availability: "5", cost: 100 },
  { bank: "WELLS FARGO", limit: 15500, age: "2022", closeDate: "23RD", availability: "14", cost: 185 },
  { bank: "NFCU", limit: 1000, age: "2022", closeDate: "23RD", availability: "2", cost: 150 },
  { bank: "CITIBANK", limit: 14300, age: "1987", closeDate: "23RD", availability: "1", cost: 450 },
  { bank: "CITIBANK", limit: 11600, age: "6MO", closeDate: "23RD", availability: "9", cost: 140 },
  { bank: "CITIBANK", limit: 2000, age: "2021", closeDate: "23RD", availability: "2", cost: 140 },
  { bank: "CAPITAL ONE", limit: 5200, age: "2016", closeDate: "23RD", availability: "5", cost: 250 },
  { bank: "CITIBANK", limit: 13200, age: "2025", closeDate: "23RD", availability: "4", cost: 170 },
  { bank: "CITIBANK", limit: 5000, age: "2018", closeDate: "23RD", availability: "5", cost: 195 },
  { bank: "CITIBANK", limit: 8000, age: "2016", closeDate: "24TH", availability: "5", cost: 265 },
  { bank: "CITIBANK", limit: 8000, age: "2018", closeDate: "24TH", availability: "4", cost: 215 },
  { bank: "WELLS FARGO", limit: 4000, age: "2023", closeDate: "24TH", availability: "15", cost: 140 },
  { bank: "WELLS FARGO", limit: 11900, age: "2020", closeDate: "24TH", availability: "15", cost: 200 },
  { bank: "CITIBANK", limit: 3000, age: "2025", closeDate: "24TH", availability: "4", cost: 115 },
  { bank: "WELLS FARGO", limit: 14000, age: "2025", closeDate: "24TH", availability: "14", cost: 145 },
  { bank: "AMERICAN EXPRESS", limit: 17500, age: "Amex reports limit only, not history", closeDate: "24TH", availability: "Many", cost: 190 },
  { bank: "WELLS FARGO", limit: 5000, age: "2021", closeDate: "24TH", availability: "15", cost: 150 },
  { bank: "CITIBANK", limit: 5000, age: "2018", closeDate: "24TH", availability: "5", cost: 185 },
  { bank: "NFCU", limit: 28500, age: "2018", closeDate: "24TH", availability: "1", cost: 285 },
  { bank: "NFCU", limit: 15000, age: "2020", closeDate: "24TH", availability: "1", cost: 200 },
  { bank: "CITIBANK", limit: 1000, age: "2021", closeDate: "24TH", availability: "5", cost: 140 },
  { bank: "WELLS FARGO", limit: 18500, age: "2019", closeDate: "24TH", availability: "10", cost: 245 },
  { bank: "CITIBANK", limit: 6800, age: "2024", closeDate: "24TH", availability: "8", cost: 155 },
  { bank: "CITIBANK", limit: 2000, age: "2025", closeDate: "24TH", availability: "3", cost: 110 },
  { bank: "WELLS FARGO", limit: 9200, age: "2023", closeDate: "24TH", availability: "15", cost: 160 },
  { bank: "CAPITAL ONE", limit: 11000, age: "2023", closeDate: "24TH", availability: "10", cost: 195 },
  { bank: "CITIBANK", limit: 11200, age: "2025", closeDate: "24TH", availability: "5", cost: 160 },
  { bank: "AMERICAN EXPRESS", limit: 2000, age: "Amex reports limit only, not history", closeDate: "24TH", availability: "Many", cost: 100 },
  { bank: "CITIBANK", limit: 8300, age: "2021", closeDate: "24TH", availability: "6", cost: 185 },
  { bank: "CITIBANK", limit: 9100, age: "2023", closeDate: "24TH", availability: "10", cost: 185 },
  { bank: "PNC", limit: 14500, age: "2025 Wise", closeDate: "25TH", availability: "1", cost: 160 },
  { bank: "CITIBANK", limit: 7000, age: "2026", closeDate: "25TH", availability: "3", cost: 125 },
  { bank: "AMERICAN EXPRESS", limit: 43900, age: "Amex reports limit only, not history", closeDate: "25TH", availability: "Many", cost: 255 },
  { bank: "CITIBANK", limit: 2000, age: "2021", closeDate: "25TH", availability: "5", cost: 140 },
  { bank: "CHASE", limit: 22000, age: "2024", closeDate: "25TH", availability: "11", cost: 250 },
  { bank: "DISCOVER", limit: 22000, age: "2019", closeDate: "25TH", availability: "5", cost: 295 },
  { bank: "CITIBANK", limit: 11000, age: "2023", closeDate: "25TH", availability: "8", cost: 170 },
  { bank: "FNBO", limit: 4000, age: "2022", closeDate: "25TH", availability: "5", cost: 150 },
  { bank: "AMERICAN EXPRESS", limit: 50000, age: "Amex reports limit only, not history", closeDate: "25TH", availability: "Many", cost: 260 },
  { bank: "AMERICAN EXPRESS", limit: 39800, age: "Amex reports limit only, not history", closeDate: "25TH", availability: "Many", cost: 240 },
  { bank: "CAPITAL ONE", limit: 7500, age: "2023", closeDate: "25TH", availability: "2", cost: 180 },
  { bank: "WELLS FARGO", limit: 31000, age: "2022", closeDate: "25TH", availability: "15", cost: 270 },
  { bank: "WELLS FARGO", limit: 2500, age: "2023", closeDate: "25TH", availability: "4", cost: 130 },
  { bank: "CITIBANK", limit: 8000, age: "2023", closeDate: "25TH", availability: "10", cost: 170 },
  { bank: "WELLS FARGO", limit: 14500, age: "2023", closeDate: "26TH", availability: "15", cost: 170 },
  { bank: "CITIBANK", limit: 4500, age: "2023", closeDate: "26TH", availability: "2", cost: 150 },
  { bank: "AMERICAN EXPRESS", limit: 15000, age: "Amex reports limit only, not history", closeDate: "26TH", availability: "Many", cost: 180 },
  { bank: "WELLS FARGO", limit: 4000, age: "2022", closeDate: "26TH", availability: "15", cost: 150 },
  { bank: "CITIBANK", limit: 4000, age: "2025", closeDate: "26TH", availability: "2", cost: 130 },
  { bank: "CITIBANK", limit: 9500, age: "2025", closeDate: "26TH", availability: "4", cost: 150 },
  { bank: "WELLS FARGO", limit: 17000, age: "2023", closeDate: "26TH", availability: "15", cost: 215 },
  { bank: "CHASE", limit: 17000, age: "2024", closeDate: "26TH", availability: "1", cost: 215 },
  { bank: "CITIBANK", limit: 7000, age: "2024", closeDate: "26TH", availability: "4", cost: 150 },
  { bank: "AMERICAN EXPRESS", limit: 34400, age: "Amex reports limit only, not history", closeDate: "26TH", availability: "Many", cost: 240 },
  { bank: "CITIBANK", limit: 11600, age: "2025", closeDate: "26TH", availability: "5", cost: 135 },
  { bank: "AMERICAN EXPRESS", limit: 5800, age: "Amex reports limit only, not history", closeDate: "26TH", availability: "Many", cost: 135 },
  { bank: "CITIBANK", limit: 5600, age: "2025", closeDate: "26TH", availability: "9", cost: 120 },
  { bank: "WELLS FARGO", limit: 1300, age: "2021", closeDate: "26TH", availability: "15", cost: 115 },
  { bank: "CHASE", limit: 500, age: "2025", closeDate: "26TH", availability: "11", cost: 95 },
  { bank: "WELLS FARGO", limit: 4000, age: "2022", closeDate: "26TH", availability: "7", cost: 215 },
  { bank: "TD BANK", limit: 6000, age: "2024", closeDate: "26TH", availability: "2", cost: 150 },
  { bank: "CITIBANK", limit: 8000, age: "2025", closeDate: "26TH", availability: "2", cost: 135 },
  { bank: "WELLS FARGO", limit: 10000, age: "2020", closeDate: "27TH", availability: "15", cost: 195 },
  { bank: "AMERICAN EXPRESS", limit: 11800, age: "Amex reports limit only, not history", closeDate: "27TH", availability: "Many", cost: 155 },
  { bank: "SOFI", limit: 7000, age: "2023", closeDate: "27TH", availability: "4", cost: 170 },
  { bank: "WELLS FARGO", limit: 22000, age: "2021", closeDate: "27TH", availability: "15", cost: 250 },
  { bank: "AMERICAN EXPRESS", limit: 3400, age: "Amex reports limit only, not history", closeDate: "27TH", availability: "Many", cost: 115 },
  { bank: "AMERICAN EXPRESS", limit: 20000, age: "Amex reports limit only, not history", closeDate: "27TH", availability: "Many", cost: 200 },
  { bank: "AMERICAN EXPRESS", limit: 29000, age: "Amex reports limit only, not history", closeDate: "27TH", availability: "Many", cost: 220 },
  { bank: "AMERICAN EXPRESS", limit: 25000, age: "Amex reports limit only, not history", closeDate: "27TH", availability: "Many", cost: 215 },
  { bank: "TRUIST", limit: 11600, age: "2026", closeDate: "27TH", availability: "4", cost: 130 },
  { bank: "WELLS FARGO", limit: 2700, age: "2019", closeDate: "27TH", availability: "15", cost: 170 },
  { bank: "CAPITAL ONE", limit: 7000, age: "2025", closeDate: "27TH", availability: "4", cost: 150 },
  { bank: "SOFI", limit: 8000, age: "2025", closeDate: "27TH", availability: "5", cost: 160 },
  { bank: "WELLS FARGO", limit: 23400, age: "2019", closeDate: "27TH", availability: "15", cost: 265 },
  { bank: "FNBO", limit: 15100, age: "2022", closeDate: "27TH", availability: "5", cost: 200 },
  { bank: "AMERICAN EXPRESS", limit: 5000, age: "Amex reports limit only, not history", closeDate: "27TH", availability: "Many", cost: 125 },
  { bank: "CITIBANK", limit: 9900, age: "2024", closeDate: "27TH", availability: "8", cost: 175 },
  { bank: "AMERICAN EXPRESS", limit: 10000, age: "Amex reports limit only, not history", closeDate: "27TH", availability: "Many", cost: 150 },
  { bank: "CAPITAL ONE", limit: 3000, age: "2019", closeDate: "27TH", availability: "4", cost: 150 },
  { bank: "CITIBANK", limit: 9500, age: "2023", closeDate: "27TH", availability: "1", cost: 180 },
  { bank: "CITIBANK", limit: 7500, age: "2024", closeDate: "27TH", availability: "6", cost: 155 },
  { bank: "CITIBANK", limit: 5800, age: "2026", closeDate: "28TH", availability: "2", cost: 125 },
  { bank: "WELLS FARGO", limit: 24000, age: "2024", closeDate: "28TH", availability: "15", cost: 260 },
  { bank: "AMERICAN EXPRESS", limit: 1000, age: "Amex reports limit only, not history", closeDate: "28TH", availability: "Many", cost: 90 },
  { bank: "CITIBANK", limit: 13200, age: "2024", closeDate: "28TH", availability: "1", cost: 175 },
  { bank: "WELLS FARGO", limit: 12500, age: "2024", closeDate: "28TH", availability: "15", cost: 185 },
  { bank: "AMERICAN EXPRESS", limit: 20000, age: "Amex reports limit only, not history", closeDate: "28TH", availability: "Many", cost: 200 },
  { bank: "NFCU", limit: 500, age: "2022", closeDate: "29TH", availability: "4", cost: 130 },
  { bank: "CHASE", limit: 4500, age: "2025", closeDate: "29TH", availability: "11", cost: 140 },
  { bank: "CITIBANK", limit: 29000, age: "2019", closeDate: "29TH", availability: "8", cost: 295 },
  { bank: "CITIBANK", limit: 11000, age: "2023", closeDate: "29TH", availability: "9", cost: 195 },
  { bank: "WELLS FARGO", limit: 10000, age: "2022", closeDate: "29TH", availability: "15", cost: 170 },
  { bank: "AMERICAN EXPRESS", limit: 14000, age: "Amex reports limit only, not history", closeDate: "30TH", availability: "Many", cost: 155 },
  { bank: "WELLS FARGO", limit: 10000, age: "2024", closeDate: "30TH", availability: "15", cost: 180 },
  { bank: "CITIBANK", limit: 9000, age: "2023", closeDate: "30TH", availability: "4", cost: 195 },
  { bank: "CITIBANK", limit: 20000, age: "2024", closeDate: "30TH", availability: "10", cost: 250 },
  { bank: "NFCU", limit: 30000, age: "2024", closeDate: "30TH", availability: "1", cost: 295 },
  { bank: "AMERICAN EXPRESS", limit: 30000, age: "Amex reports limit only, not history", closeDate: "30TH", availability: "11", cost: 225 },
  { bank: "WELLS FARGO", limit: 8800, age: "2020", closeDate: "30TH", availability: "14", cost: 185 },
  { bank: "CITIBANK", limit: 9000, age: "2023", closeDate: "30TH", availability: "9", cost: 180 },
  { bank: "WELLS FARGO", limit: 18000, age: "2025", closeDate: "30TH", availability: "15", cost: 190 },
  { bank: "AMERICAN EXPRESS", limit: 12200, age: "Amex reports limit only, not history", closeDate: "30TH", availability: "Many", cost: 155 },
  { bank: "BANK OF AMERICA", limit: 25000, age: "2025", closeDate: "30TH", availability: "2", cost: 260 },
  { bank: "WELLS FARGO", limit: 8000, age: "2024", closeDate: "30TH", availability: "8", cost: 140 },
  { bank: "CITIBANK", limit: 11000, age: "2024", closeDate: "30TH", availability: "5", cost: 175 },
  { bank: "AMERICAN EXPRESS", limit: 5100, age: "Amex reports limit only, not history", closeDate: "30TH", availability: "Many", cost: 115 },
  { bank: "BANK OF AMERICA", limit: 10000, age: "2025", closeDate: "30TH", availability: "1", cost: 185 },
  { bank: "AMERICAN EXPRESS", limit: 2000, age: "Amex reports limit only, not history", closeDate: "30TH", availability: "Many", cost: 100 },
];

// This is the ONLY version of the data that gets sent to the browser —
// "cost" has already been replaced with the final client-facing "price"
// before this gets JSON-stringified into the page.
const clientInventory = inventory.map((t) => ({
  bank: t.bank,
  limit: t.limit,
  age: t.age,
  closeDate: t.closeDate,
  availability: t.availability,
  price: t.cost + MARKUP_FLAT,
}));

module.exports = {
  title: "Tradeline Inventory — Credit-Fixed",
  description: "Browse, search, and filter Credit-Fixed's current tradeline inventory and pricing.",
  canonicalPath: "/tradeline-list.html",
  activeHref: null,
  noindex: false,
  body: `
    <div class="container" style="padding: 48px 0;">
      <h1>Current Tradeline Inventory</h1>
      <p class="small">Availability and pricing are subject to change without
      notice. Lines may skip a reporting cycle once entered into the system;
      purchase at least 7 days before the statement close date shown to
      avoid a skipped cycle. We guarantee posting to at least one of the
      three major bureaus. Each tradeline is a 30-day reporting cycle —
      to continue reporting beyond 30 days, a new cycle must be
      purchased.</p>

      <div id="tl-controls" style="display:flex; flex-wrap:wrap; gap:12px; margin:24px 0; align-items:end;">
        <div style="flex:1; min-width:200px;">
          <label for="tl-search" style="display:block; font-size:13px; margin-bottom:4px;">Search bank or age</label>
          <input id="tl-search" type="text" placeholder="e.g. Chase, 2023...">
        </div>
        <div>
          <label for="tl-bank-filter" style="display:block; font-size:13px; margin-bottom:4px;">Bank</label>
          <select id="tl-bank-filter">
            <option value="">All Banks</option>
          </select>
        </div>
        <div>
          <label for="tl-sort" style="display:block; font-size:13px; margin-bottom:4px;">Sort by</label>
          <select id="tl-sort">
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="limit-desc">Credit Limit: High to Low</option>
            <option value="limit-asc">Credit Limit: Low to High</option>
            <option value="bank-asc">Bank: A to Z</option>
          </select>
        </div>
      </div>

      <p id="tl-count" class="small"></p>

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
          <tbody id="tl-body"></tbody>
        </table>
      </div>

      <div id="tl-pagination" style="display:flex; justify-content:center; gap:8px; margin-top:24px; flex-wrap:wrap;"></div>

      <p style="margin-top: 32px;">Questions before you choose? Book a
      free consultation and we'll help you pick the right tradeline for
      your goals. ${calendlyBtn("Book a Free Consultation")}</p>
    </div>

    <script>
      // NOTE: this array contains ONLY final client-facing prices —
      // the wholesale cost was already stripped out at build time.
      const tlInventory = ${JSON.stringify(clientInventory)};
      const TL_PAGE_SIZE = 25;
      let tlCurrentPage = 1;

      function tlMoney(n) {
        return "$" + n.toLocaleString("en-US");
      }

      function tlPopulateBankFilter() {
        const banks = [...new Set(tlInventory.map(t => t.bank))].sort();
        const select = document.getElementById("tl-bank-filter");
        banks.forEach(b => {
          const opt = document.createElement("option");
          opt.value = b;
          opt.textContent = b;
          select.appendChild(opt);
        });
      }

      function tlGetFiltered() {
        const search = document.getElementById("tl-search").value.toLowerCase().trim();
        const bankFilter = document.getElementById("tl-bank-filter").value;
        const sortBy = document.getElementById("tl-sort").value;

        let results = tlInventory.filter(t => {
          const matchesSearch = !search || t.bank.toLowerCase().includes(search) || t.age.toLowerCase().includes(search);
          const matchesBank = !bankFilter || t.bank === bankFilter;
          return matchesSearch && matchesBank;
        });

        results.sort((a, b) => {
          switch (sortBy) {
            case "price-asc": return a.price - b.price;
            case "price-desc": return b.price - a.price;
            case "limit-desc": return b.limit - a.limit;
            case "limit-asc": return a.limit - b.limit;
            case "bank-asc": return a.bank.localeCompare(b.bank);
            default: return 0;
          }
        });

        return results;
      }

      function tlRender() {
        const filtered = tlGetFiltered();
        const totalPages = Math.max(1, Math.ceil(filtered.length / TL_PAGE_SIZE));
        if (tlCurrentPage > totalPages) tlCurrentPage = totalPages;

        const start = (tlCurrentPage - 1) * TL_PAGE_SIZE;
        const pageItems = filtered.slice(start, start + TL_PAGE_SIZE);

        document.getElementById("tl-count").textContent =
          filtered.length + " tradeline" + (filtered.length === 1 ? "" : "s") + " found — showing " +
          (pageItems.length ? (start + 1) + "-" + (start + pageItems.length) : "0") + " of " + filtered.length;

        const tbody = document.getElementById("tl-body");
        tbody.innerHTML = pageItems.map(t => {
          return "<tr>" +
            "<td>" + t.bank + "</td>" +
            "<td>" + tlMoney(t.limit) + "</td>" +
            "<td>" + t.age + "</td>" +
            "<td>" + t.closeDate + "</td>" +
            "<td>30 days</td>" +
            "<td>" + t.availability + "</td>" +
            "<td><strong>" + tlMoney(t.price) + "</strong></td>" +
            "<td><a href=\\"/sign-up.html\\" class=\\"btn btn-gold\\">Request This Line</a></td>" +
            "</tr>";
        }).join("");

        tlRenderPagination(totalPages);
      }

      function tlRenderPagination(totalPages) {
        const container = document.getElementById("tl-pagination");
        if (totalPages <= 1) {
          container.innerHTML = "";
          return;
        }
        let html = "";
        html += "<button class=\\"btn\\" " + (tlCurrentPage === 1 ? "disabled" : "") + " onclick=\\"tlGoToPage(" + (tlCurrentPage - 1) + ")\\">Prev</button>";
        const maxButtons = 7;
        let startPage = Math.max(1, tlCurrentPage - 3);
        let endPage = Math.min(totalPages, startPage + maxButtons - 1);
        startPage = Math.max(1, endPage - maxButtons + 1);
        for (let p = startPage; p <= endPage; p++) {
          html += "<button class=\\"btn" + (p === tlCurrentPage ? " btn-gold" : "") + "\\" onclick=\\"tlGoToPage(" + p + ")\\">" + p + "</button>";
        }
        html += "<button class=\\"btn\\" " + (tlCurrentPage === totalPages ? "disabled" : "") + " onclick=\\"tlGoToPage(" + (tlCurrentPage + 1) + ")\\">Next</button>";
        container.innerHTML = html;
      }

      function tlGoToPage(p) {
        tlCurrentPage = p;
        tlRender();
        document.getElementById("tl-controls").scrollIntoView({ behavior: "smooth", block: "start" });
      }

      document.getElementById("tl-search").addEventListener("input", () => { tlCurrentPage = 1; tlRender(); });
      document.getElementById("tl-bank-filter").addEventListener("change", () => { tlCurrentPage = 1; tlRender(); });
      document.getElementById("tl-sort").addEventListener("change", () => { tlCurrentPage = 1; tlRender(); });

      tlPopulateBankFilter();
      tlRender();
    </script>
  `,
};