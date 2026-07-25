module.exports = {
  title: "Client Login | Credit-Fixed",
  description: "Log in to your Credit-Fixed client portal to track your case progress.",
  canonicalPath: "/client-login.html",
  activeHref: "/client-login.html",
  noindex: true,
  body: `
    <section class="hero">
      <div class="container text-center" style="max-width:520px;margin:0 auto;">
        <span class="eyebrow">Client Login</span>
        <h1>Track your progress.</h1>
        <p class="lede">This connects to your case management / client-portal provider. Once you choose a provider (e.g. your CRM's client portal), swap this card for their embedded login or a redirect link.</p>
        <div class="card" style="text-align:left;">
          <label for="login-email">Email</label>
          <input id="login-email" type="email" placeholder="you@example.com" disabled>
          <div style="height:14px;"></div>
          <label for="login-pass">Password</label>
          <input id="login-pass" type="password" placeholder="••••••••" disabled>
          <div style="height:18px;"></div>
          <button class="btn btn-gold" style="width:100%;" disabled>Log In (connect portal to enable)</button>
        </div>
      </div>
    </section>
  `,
};
