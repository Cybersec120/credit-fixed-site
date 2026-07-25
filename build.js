const fs = require("fs");
const path = require("path");

const SITE = "https://www.credit-fixed.com";
const BIZ_NAME = "Credit-Fixed";
const PHONE = "570-572-5771";
const PHONE_TEL = "+15705725771";
const EMAIL = "rj@credit-fixed.com";
const ADDR = "P.O. Box 3052, Scranton, PA 18505";
const CALENDLY = "https://calendly.com/credit-fixed";
const FB = "https://www.facebook.com/159279043937093";
const IG = "https://www.instagram.com/credit_fixed/";
const OG_IMAGE = `${SITE}/images/og-cover.jpg`;

const NAV = [
  { href: "/", label: "Home" },
  { href: "/tradelines.html", label: "Tradelines" },
  { href: "/business-funding.html", label: "Business Funding" },
  { href: "/knowledge-center.html", label: "Resources" },
  { href: "/faq.html", label: "FAQ" },
];

function ledgerDivider() {
  return `
  <div class="ledger-divider" aria-hidden="true">
    <svg viewBox="0 0 1200 22" preserveAspectRatio="none">
      <line x1="0" y1="16" x2="520" y2="16" stroke="#C6CFD6" stroke-width="1"/>
      <polyline points="520,16 590,16 640,4 690,16 1200,16" fill="none" stroke="#0A6DE6" stroke-width="1.4"/>
      <circle cx="640" cy="4" r="3.2" fill="#0A2540"/>
    </svg>
  </div>`;
}

function articleSchema({ headline, description, datePublished, canonicalPath }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "datePublished": datePublished,
    "author": { "@type": "Organization", "name": BIZ_NAME },
    "publisher": { "@type": "Organization", "name": BIZ_NAME },
    "mainEntityOfPage": `${SITE}${canonicalPath}`,
  };
}

function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": BIZ_NAME,
    "url": SITE,
    "telephone": PHONE_TEL,
    "email": EMAIL,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "P.O. Box 3052",
      "addressLocality": "Scranton",
      "addressRegion": "PA",
      "postalCode": "18505",
      "addressCountry": "US",
    },
    "areaServed": "US",
    "priceRange": "$$",
    "sameAs": [FB, IG],
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "09:00",
      "closes": "17:00",
    }],
  };
}

function head({ title, description, canonicalPath, noindex, extraSchema }) {
  const canonical = `${SITE}${canonicalPath}`;
  const schemas = [localBusinessSchema()].concat(extraSchema || []);
  return `<meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${title}</title>
  <meta name="description" content="${description}" />
  <link rel="canonical" href="${canonical}" />
  ${noindex ? '<meta name="robots" content="noindex, nofollow" />' : '<meta name="robots" content="index, follow" />'}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="${BIZ_NAME}" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:url" content="${canonical}" />
  <meta property="og:image" content="${OG_IMAGE}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Credit-Fixed — Tradelines & Business Funding" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${title}" />
  <meta name="twitter:description" content="${description}" />
  <meta name="twitter:image" content="${OG_IMAGE}" />
  <meta name="twitter:image:alt" content="Credit-Fixed — Tradelines & Business Funding" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@500;600;700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/css/styles.css" />
  <link rel="icon" href="/images/favicon.svg" type="image/svg+xml">
  <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
  ${schemas.map(s => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join("\n  ")}`;
}

function headerHtml(activeHref) {
  return `<a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header">
    <div class="container nav-row">
      <a href="/" class="wordmark" aria-label="Credit-Fixed home">
        <img src="/images/logo.png" alt="Credit-Fixed" class="logo-img">
      </a>
      <button class="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">&#9776;</button>
      <nav class="primary-nav" aria-label="Primary">
        ${NAV.map(n => `<a href="${n.href}"${n.href === activeHref ? ' class="active" aria-current="page"' : ''}>${n.label}</a>`).join("\n        ")}
        <a href="/client-login.html">Client Login</a>
        <a href="/sign-up.html" class="btn btn-gold">Free Consultation</a>
      </nav>
    </div>
  </header>`;
}

function footerHtml() {
  return `<footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <div class="footer-brand">Credit-Fixed</div>
        <p class="small" style="color:#C9D6E4;">Authorized user tradelines and business funding brokering, backed by real local guidance out of Scranton, PA. Credit-Fixed is not a credit repair company.</p>
        <div class="social-row">
          <a href="${FB}" target="_blank" rel="noopener" aria-label="Credit-Fixed on Facebook">Facebook</a>
          <a href="${IG}" target="_blank" rel="noopener" aria-label="Credit-Fixed on Instagram">Instagram</a>
        </div>
      </div>
      <div>
        <h4>Company</h4>
        <a href="/about-us.html">About Us</a>
        <a href="/tradelines.html">Tradelines</a>
        <a href="/business-funding.html">Business Funding</a>
        <a href="/partners.html">Partners</a>
      </div>
      <div>
        <h4>Resources</h4>
        <a href="/knowledge-center.html">Knowledge Center</a>
        <a href="/what-is-a-tradeline.html">What Is a Tradeline?</a>
        <a href="/faq.html">FAQ</a>
        <a href="/testimonials.html">Testimonials</a>
        <a href="/sign-up.html">Sign Up</a>
        <a href="/client-login.html">Client Login</a>
      </div>
      <div>
        <h4>Contact</h4>
        <a href="tel:${PHONE_TEL}">${PHONE}</a>
        <a href="mailto:${EMAIL}">${EMAIL}</a>
        <a href="#" style="pointer-events:none;">${ADDR}</a>
      </div>
    </div>
    <div class="container footer-bottom">
      <span>&copy; ${new Date().getFullYear()} Credit-Fixed. All rights reserved.</span>
      <span><a href="/terms.html" style="display:inline;text-decoration:underline;">Terms &amp; Conditions</a> &nbsp;&middot;&nbsp; <a href="/privacy.html" style="display:inline;text-decoration:underline;">Privacy Policy</a></span>
    </div>
  </footer>
  <script src="/js/main.js"></script>
  <script src="https://assets.calendly.com/assets/external/widget.js" async></script>`;
}

function calendlyBtn(label, extraClass) {
  const cls = extraClass ? `btn ${extraClass}` : "btn btn-gold";
  const safeUrl = CALENDLY.replace(/'/g, "\\'");
  return `<a href="${CALENDLY}" class="${cls}" onclick="if(window.Calendly){Calendly.initPopupWidget({url:'${safeUrl}'});return false;}" target="_blank" rel="noopener">${label}</a>`;
}

function page({ title, description, canonicalPath, activeHref, body, noindex, extraSchema }) {
  return `<!DOCTYPE html>
<html lang="en-US">
<head>
  ${head({ title, description, canonicalPath, noindex, extraSchema })}
</head>
<body>
  ${headerHtml(activeHref)}
  <main id="main">
    ${body}
  </main>
  ${footerHtml()}
</body>
</html>`;
}

module.exports = { page, ledgerDivider, calendlyBtn, articleSchema, SITE, BIZ_NAME, PHONE, PHONE_TEL, EMAIL, ADDR, CALENDLY, FB, IG, NAV };
