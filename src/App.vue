<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import { initPortfolioFx } from './composables/usePortfolioFx.js'
import SitePreloader from './components/SitePreloader.vue'
import SiteNav from './components/SiteNav.vue'
import HeroSection from './components/HeroSection.vue'
import ProfileSection from './components/ProfileSection.vue'
import SkillsMarquee from './components/SkillsMarquee.vue'
import WorkSection from './components/WorkSection.vue'
import CapabilitiesSection from './components/CapabilitiesSection.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/SiteFooter.vue'

let teardown = null

onMounted(() => {
  // Child components have all mounted by now, so the DOM the fx queries is complete.
  teardown = initPortfolioFx()
})

onBeforeUnmount(() => {
  if (teardown) teardown()
})
</script>

<template>
  <a class="skip-link" href="#work">Skip to work</a>

  <SitePreloader />

  <div class="grain" aria-hidden="true"></div>
  <div class="cursor" id="cursor" aria-hidden="true"></div>

  <SiteNav />

  <main id="top">
    <HeroSection />
    <ProfileSection />
    <SkillsMarquee />
    <WorkSection />
    <CapabilitiesSection />
    <ContactSection />
  </main>

  <SiteFooter />
</template>
