<script setup>
import { onMounted, onBeforeUnmount, useTemplateRef } from 'vue'
import { initHeroCanvas } from '../composables/useHeroCanvas.js'

const canvas = useTemplateRef('canvas')
let teardown = null

onMounted(() => {
  teardown = initHeroCanvas(canvas.value)
})

onBeforeUnmount(() => {
  if (teardown) teardown()
})
</script>

<template>
  <section class="hero" id="hero" data-screen-label="Hero">
    <canvas class="hero-canvas" id="heroCanvas" ref="canvas" aria-hidden="true"></canvas>
    <div class="hero-content container">
      <p class="hero-eyebrow mono">Madhurjya Bora — Full-Stack Engineer · TypeScript / Node.js / Vue</p>
      <h1 class="hero-title">
        <span class="ht-line">Software that</span>
        <span class="ht-line"><em>earns its keep.</em></span>
      </h1>
      <p class="hero-sub">Six years of end-to-end ownership across SaaS, social platforms, and commerce — production systems serving 50,000+ users, built remote-first from Guwahati, India.</p>
      <div class="hero-ctas">
        <a class="btn btn-solid magnetic" href="#work">View the work</a>
        <a class="btn btn-ghost magnetic" href="#contact">Get in touch</a>
      </div>
    </div>
    <div class="hero-foot container">
      <ul class="hero-stats" aria-label="Career highlights">
        <li class="hstat"><span class="hstat-n">6+</span><span class="hstat-l mono">years in production</span></li>
        <li class="hstat"><span class="hstat-n">50K+</span><span class="hstat-l mono">active users served</span></li>
        <li class="hstat"><span class="hstat-n">100K+</span><span class="hstat-l mono">transactions processed</span></li>
      </ul>
      <div class="scroll-cue mono" aria-hidden="true"><span class="scroll-line"></span>Scroll</div>
    </div>
  </section>
</template>
