<template>
  <section class="work section" id="work" data-screen-label="Selected Work">
    <div class="container">
      <header class="sec-head">
        <span class="sec-no mono">02</span>
        <h2 class="sec-label mono">Selected work</h2>
      </header>

      <!-- Case 01 — Leaders.org -->
      <article class="case" id="case-leaders" data-screen-label="Case — Leaders.org">
        <span class="case-ghost" aria-hidden="true">01</span>
        <div class="case-grid">
          <aside class="case-meta">
            <dl>
              <div class="meta-row"><dt class="mono">Client</dt><dd>Leaders.org <span class="meta-sub">formerly C-Suite Circle</span></dd></div>
              <div class="meta-row"><dt class="mono">Role</dt><dd>Full-Stack Developer, Remote Contractor</dd></div>
              <div class="meta-row"><dt class="mono">Period</dt><dd>Aug 2020 — Present</dd></div>
              <div class="meta-row"><dt class="mono">Stack</dt><dd class="tags"><span>TypeScript</span><span>Vue 3</span><span>Node.js</span><span>GraphQL</span><span>PostgreSQL</span><span>AWS</span><span>OpenAPI</span><span>Storybook</span></dd></div>
            </dl>
          </aside>
          <div class="case-body">
            <h3 class="case-title">One engineer across a portfolio of platforms.</h3>
            <p class="case-lede">Six years inside one organization's product portfolio — building and maintaining high-traffic production SaaS that supports 50,000+ active users, with ownership spanning social, commerce, and AI-powered systems.</p>
            <div class="case-metrics">
              <div class="metric"><span class="metric-n">50K+</span><span class="metric-l mono">active users supported</span></div>
              <div class="metric"><span class="metric-n">25K+</span><span class="metric-l mono">daily actives, Clouthub</span></div>
              <div class="metric"><span class="metric-n">15K+</span><span class="metric-l mono">orders / month, Kaizen</span></div>
              <div class="metric"><span class="metric-n">−40%</span><span class="metric-l mono">manual ops time, AI workflows</span></div>
            </div>
            <ul class="case-points">
              <li><h4>Social at scale — Clouthub</h4><p>Profiles, content feeds, engagement systems, and real-time updates serving 25,000+ daily active users.</p></li>
              <li><h4>Commerce backbone — Kaizen</h4><p>Owned backend architecture and APIs that reliably process over 15,000 monthly e-commerce orders.</p></li>
              <li><h4>AI-powered workflows</h4><p>TypeScript backend services for content analysis and media processing — cutting manual operational time by 40%.</p></li>
              <li><h4>Platform engineering</h4><p>OpenAPI-documented microservices, deploy automation across GitHub and Bitbucket that accelerated release cycles by 30%, a shared Storybook library used across teams, and internal tools for transactions, reporting, and exports.</p></li>
            </ul>
          </div>
        </div>
      </article>

      <!-- Case 02 — Independent commerce -->
      <article class="case" id="case-stores" data-screen-label="Case — Independent Commerce">
        <span class="case-ghost" aria-hidden="true">02</span>
        <div class="case-grid">
          <aside class="case-meta">
            <dl>
              <div class="meta-row"><dt class="mono">Venture</dt><dd>Independent Commerce <span class="meta-sub">4 production storefronts</span></dd></div>
              <div class="meta-row"><dt class="mono">Role</dt><dd>Founder-Engineer — every layer</dd></div>
              <div class="meta-row"><dt class="mono">Period</dt><dd>2021 — Present</dd></div>
              <div class="meta-row"><dt class="mono">Stack</dt><dd class="tags"><span>TypeScript</span><span>Vue / Nuxt</span><span>Node / Express</span><span>Payment gateways</span><span>Webhooks</span><span>Cloudflare</span></dd></div>
            </dl>
          </aside>
          <div class="case-body">
            <h3 class="case-title">Four storefronts. One engineer. 100,000+ transactions.</h3>
            <p class="case-lede">Not a side project — a business. I built and operate a portfolio of four production e-commerce platforms serving 5,000+ daily users, where every line of code answers to revenue and every outage is mine to fix.</p>
            <div class="case-metrics">
              <div class="metric"><span class="metric-n">100K+</span><span class="metric-l mono">transactions processed</span></div>
              <div class="metric"><span class="metric-n">5K+</span><span class="metric-l mono">daily users</span></div>
              <div class="metric"><span class="metric-n">−80%</span><span class="metric-l mono">manual ops effort</span></div>
              <div class="metric"><span class="metric-n">4</span><span class="metric-l mono">platforms, owned end-to-end</span></div>
            </div>
            <div class="store-tiles" aria-label="Storefront screenshots">
              <figure class="store-tile"><image-slot id="store-1" src="/stores/crochika.webp" fit="cover" shape="rounded" radius="2" placeholder="Storefront screenshot"></image-slot><figcaption class="mono">crochika.com — live</figcaption></figure>
              <figure class="store-tile"><image-slot id="store-2" src="/stores/konpkay.webp" fit="cover" shape="rounded" radius="2" placeholder="Storefront screenshot"></image-slot><figcaption class="mono">konpkay.com — live</figcaption></figure>
              <figure class="store-tile"><image-slot id="store-3" src="/stores/mfsstore.webp" fit="cover" shape="rounded" radius="2" placeholder="Storefront screenshot"></image-slot><figcaption class="mono">mfsstore.in — live</figcaption></figure>
              <figure class="store-tile"><image-slot id="store-4" src="/stores/ubersam14store.webp" fit="cover" shape="rounded" radius="2" placeholder="Storefront screenshot"></image-slot><figcaption class="mono">ubersam14store.com — live</figcaption></figure>
            </div>
            <ul class="case-points">
              <li><h4>Payments without a safety net</h4><p>Secure payment systems integrating multiple gateways, QR payments, transaction monitoring, and reconciliation — designed, built, and operated end-to-end.</p></li>
              <li><h4>Wallet infrastructure</h4><p>Deposits, balances, withdrawals, and multi-provider payment processing.</p></li>
              <li><h4>Reseller APIs</h4><p>Developer-facing APIs that let third-party partners automate order fulfillment and business operations.</p></li>
              <li><h4>Automation everywhere</h4><p>Webhook-driven systems cut manual operational effort by over 80%; WhatsApp automation handles customer support and digital product delivery.</p></li>
              <li><h4>Security as a feature</h4><p>OTP authentication for phone and email; Cloudflare DDoS mitigation, bot protection, rate limiting, reCAPTCHA, and fraud prevention.</p></li>
              <li><h4>The whole pager</h4><p>Infrastructure, deployments, monitoring, incident response, and production reliability — no ops team, just me.</p></li>
            </ul>
          </div>
        </div>
      </article>

      <!-- Case 03 — Instoried -->
      <article class="case case-compact" id="case-instoried" data-screen-label="Case — Instoried">
        <span class="case-ghost" aria-hidden="true">03</span>
        <div class="case-grid">
          <aside class="case-meta">
            <dl>
              <div class="meta-row"><dt class="mono">Company</dt><dd>Instoried</dd></div>
              <div class="meta-row"><dt class="mono">Role</dt><dd>Frontend Developer</dd></div>
              <div class="meta-row"><dt class="mono">Period</dt><dd>Sep 2019 — Aug 2020</dd></div>
              <div class="meta-row"><dt class="mono">Stack</dt><dd class="tags"><span>Vue.js</span><span>Chart.js</span><span>Chrome Extensions</span></dd></div>
            </dl>
          </aside>
          <div class="case-body">
            <h3 class="case-title">Where the discipline started.</h3>
            <p class="case-lede">First product role, at an AI content-analysis startup — turning sentiment models into interfaces people could actually read.</p>
            <ul class="case-points">
              <li><h4>Analytics, made legible</h4><p>Dashboards and reporting interfaces built with Vue.js and Chart.js.</p></li>
              <li><h4>Sentiment in the browser</h4><p>A Chrome extension integrated with the company platform for sentiment-analysis workflows.</p></li>
              <li><h4>Locked down</h4><p>Secure authentication and authorization systems across the product.</p></li>
            </ul>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
