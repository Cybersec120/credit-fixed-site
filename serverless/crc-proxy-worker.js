/**
 * Credit-Fixed → Credit Repair Cloud lead proxy
 * ------------------------------------------------
 * This runs on Cloudflare Workers (free tier), NOT in the browser.
 * The site's forms POST simple JSON here; this Worker builds the
 * CRC XML payload and calls CRC's insertRecord API using secrets
 * that live only in Cloudflare's encrypted secret store — never in
 * the website's HTML/JS, never in the GitHub repo.
 *
 * Deploy steps are in serverless/README.md.
 */

const CRC_ENDPOINT = "https://app.creditrepaircloud.com/api/lead/insertRecord";

// Only allow requests from your own site.
const ALLOWED_ORIGINS = [
  "https://www.credit-fixed.com",
  "https://credit-fixed.com",
];

function corsHeaders(origin) {
  const allow = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

function xmlEscape(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Builds the <crcloud><lead>...</lead></crcloud> XML CRC expects.
// Only pass through fields CRC documents — never forward arbitrary
// user input into the XML structure itself.
function buildLeadXml(fields) {
  const f = (name) => xmlEscape(fields[name] || "");
  return `<crcloud><lead>` +
    `<type>Lead</type>` +
    `<firstname>${f("firstname")}</firstname>` +
    `<lastname>${f("lastname")}</lastname>` +
    `<email>${f("email")}</email>` +
    `<phone_mobile>${f("phone")}</phone_mobile>` +
    `<memo>${f("memo")}</memo>` +
    `</lead></crcloud>`;
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders(origin) });
    }

    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405 });
    }

    if (!ALLOWED_ORIGINS.includes(origin)) {
      return new Response("Forbidden", { status: 403 });
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return new Response(JSON.stringify({ error: "Invalid JSON" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders(origin) },
      });
    }

    // Minimal required-field check — keep this in sync with your actual form.
    if (!body.firstname || !body.lastname || !body.email) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders(origin) },
      });
    }

    const xmlData = buildLeadXml(body);

    // Secrets come from Cloudflare's encrypted store (set via
    // `wrangler secret put`), never from the request or repo.
    const params = new URLSearchParams({
      apiauthkey: env.CRC_API_KEY,
      secretkey: env.CRC_SECRET_KEY,
      xmlData,
    });

    try {
      const crcResponse = await fetch(`${CRC_ENDPOINT}?${params.toString()}`, {
        method: "POST",
      });
      const text = await crcResponse.text();

      return new Response(JSON.stringify({ ok: crcResponse.ok, crcResponse: text }), {
        status: crcResponse.ok ? 200 : 502,
        headers: { "Content-Type": "application/json", ...corsHeaders(origin) },
      });
    } catch (err) {
      return new Response(JSON.stringify({ error: "Upstream request failed" }), {
        status: 502,
        headers: { "Content-Type": "application/json", ...corsHeaders(origin) },
      });
    }
  },
};
