<template>
  <section class="manifesto section" id="about" data-screen-label="Profile">
    <div class="container">
      <header class="sec-head">
        <span class="sec-no mono">01</span>
        <h2 class="sec-label mono">Profile</h2>
      </header>
      <div class="about-grid">
        <figure class="about-portrait">
          <image-slot id="portrait" shape="rounded" radius="2" placeholder="Drop a portrait"></image-slot>
          <figcaption class="mono">Guwahati, IN — 26.14° N, 91.73° E</figcaption>
        </figure>
        <div class="about-copy">
          <p>I'm Madhurjya — a full-stack engineer working remote-first with teams worldwide. Since 2020 I've been the contractor companies trust with production: building high-traffic SaaS in TypeScript, Vue&nbsp;3, Node.js, and PostgreSQL, then scaling it and keeping it alive.</p>
          <p>On the side, I own and operate my own e-commerce platforms. Running my own storefronts means I've felt every bug as a business problem — not a ticket. That instinct comes with me into every codebase.</p>
          <ul class="about-stats">
            <li><span class="astat-n"><span data-count="6" data-suffix="+">0</span></span><span class="astat-l mono">years shipping production software</span></li>
            <li><span class="astat-n"><span data-count="50000" data-suffix="+">0</span></span><span class="astat-l mono">active users on platforms I build</span></li>
            <li><span class="astat-n"><span data-count="100000" data-suffix="+">0</span></span><span class="astat-l mono">customer transactions processed</span></li>
            <li><span class="astat-n"><span data-count="4">0</span></span><span class="astat-l mono">storefronts owned &amp; operated end-to-end</span></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
