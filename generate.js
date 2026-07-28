const fs = require("fs");
const path = require("path");
const { page, SITE } = require("./build.js");

const pages = [
  ["index.html", require("./pages/index.js")],
  ["tradelines.html", require("./pages/tradelines.js")],
  ["business-funding.html", require("./pages/business-funding.js")],
  ["funding-readiness-assessment.html", require("./pages/funding-readiness-assessment.js")],
  ["what-is-a-tradeline.html", require("./pages/what-is-a-tradeline.js")],
  ["knowledge-center.html", require("./pages/knowledge-center.js")],
  ["tradelines-vs-credit-repair.html", require("./pages/articles/tradelines-vs-credit-repair.js")],
  ["how-many-tradelines-do-i-need.html", require("./pages/articles/how-many-tradelines-do-i-need.js")],
  ["tradeline-buyers-checklist.html", require("./pages/articles/tradeline-buyers-checklist.js")],
  ["types-of-business-financing-explained.html", require("./pages/articles/types-of-business-financing-explained.js")],
  ["personal-vs-business-loans.html", require("./pages/articles/personal-vs-business-loans.js")],
  ["about-us.html", require("./pages/about-us.js")],
  ["faq.html", require("./pages/faq.js")],
  ["partners.html", require("./pages/partners.js")],
  ["sign-up.html", require("./pages/sign-up.js")],
  ["client-login.html", require("./pages/client-login.js")],
  ["terms.html", require("./pages/terms.js")],
  ["privacy.html", require("./pages/privacy.js")],
  ["tradeline-list.html", require("./pages/tradeline-list.js")],
];

for (const [filename, cfg] of pages) {
  const html = page(cfg);
  fs.writeFileSync(path.join(__dirname, filename), html);
  console.log("wrote", filename);
}

// sitemap.xml — only indexable pages
const today = new Date().toISOString().slice(0, 10);
const indexable = pages.filter(([, cfg]) => !cfg.noindex);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexable.map(([, cfg]) => `  <url>
    <loc>${SITE}${cfg.canonicalPath}</loc>
    <lastmod>${today}</lastmod>
  </url>`).join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(__dirname, "sitemap.xml"), sitemap);
console.log("wrote sitemap.xml");

const robots = `User-agent: *
Allow: /
Disallow: /client-login.html

Sitemap: ${SITE}/sitemap.xml
`;
fs.writeFileSync(path.join(__dirname, "robots.txt"), robots);
console.log("wrote robots.txt");