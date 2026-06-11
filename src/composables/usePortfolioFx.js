/* Madhurjya Bora — Portfolio interactions
   GSAP ScrollTrigger storytelling + Lenis smooth scroll + micro-interactions.
   Ported from the static portfolio.js into a Vue-friendly init/cleanup pair. */
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

/**
 * Boots all page interactions. Call once from onMounted, after the DOM is
 * painted. Returns a cleanup function for onUnmounted / HMR teardown.
 */
export function initPortfolioFx() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const cleanups = []
  const on = (target, type, handler, opts) => {
    target.addEventListener(type, handler, opts)
    cleanups.push(() => target.removeEventListener(type, handler, opts))
  }

  /* ---------- Smooth scroll (Lenis) ---------- */
  let lenis = null
  let tickerFn = null
  if (!prefersReduced) {
    lenis = new Lenis({ lerp: 0.105, smoothWheel: true })
    lenis.on('scroll', ScrollTrigger.update)
    tickerFn = (t) => lenis.raf(t * 1000)
    gsap.ticker.add(tickerFn)
    gsap.ticker.lagSmoothing(0)
  }

  /* ---------- Anchor navigation ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    on(a, 'click', (e) => {
      const id = a.getAttribute('href')
      if (id.length < 2) return
      const el = document.querySelector(id)
      if (!el) return
      e.preventDefault()
      if (lenis) {
        lenis.scrollTo(el, { offset: 0, duration: 1.4 })
      } else {
        const top = el.getBoundingClientRect().top + window.scrollY
        window.scrollTo({ top, behavior: prefersReduced ? 'auto' : 'smooth' })
      }
    })
  })

  /* ---------- Counters (always run; instant under reduced motion) ---------- */
  function formatCount(v, suffix) {
    return Math.round(v).toLocaleString('en-US') + (suffix || '')
  }
  document.querySelectorAll('[data-count]').forEach((el) => {
    const end = parseFloat(el.dataset.count)
    const suffix = el.dataset.suffix || ''
    if (prefersReduced) {
      el.textContent = formatCount(end, suffix)
      return
    }
    el.textContent = formatCount(0, suffix)
    ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      once: true,
      onEnter: () => {
        const obj = { v: 0 }
        gsap.to(obj, {
          v: end,
          duration: 1.8,
          ease: 'power3.out',
          onUpdate: () => {
            el.textContent = formatCount(obj.v, suffix)
          },
        })
      },
    })
  })

  /* ---------- Reduced motion: show everything, done ---------- */
  if (prefersReduced) {
    document.body.classList.add('is-loaded')
    const pre = document.getElementById('preloader')
    if (pre) pre.remove()
    return () => destroy()
  }

  document.body.classList.add('js-anim')

  /* ---------- Line splitter (word spans grouped into masked lines) ---------- */
  function splitLines(el) {
    const nodes = Array.prototype.slice.call(el.childNodes)
    el.textContent = ''
    nodes.forEach((node) => {
      if (node.nodeType === 3) {
        node.textContent.split(/(\s+)/).forEach((part) => {
          if (!part) return
          if (/^\s+$/.test(part)) {
            el.appendChild(document.createTextNode(' '))
            return
          }
          const w = document.createElement('span')
          w.className = 'w'
          w.style.display = 'inline-block'
          w.textContent = part
          el.appendChild(w)
        })
      } else {
        el.appendChild(node)
      }
    })
    const words = Array.prototype.slice.call(el.querySelectorAll('.w'))
    if (!words.length) return [el]
    const lines = []
    let current = null
    let lastTop = null
    words.forEach((w) => {
      const top = w.offsetTop
      if (top !== lastTop) {
        current = []
        lines.push(current)
        lastTop = top
      }
      current.push(w)
    })
    return lines.map((lineWords) => {
      const line = document.createElement('span')
      line.className = 'line'
      const inner = document.createElement('span')
      inner.className = 'line-inner'
      line.appendChild(inner)
      lineWords[0].parentNode.insertBefore(line, lineWords[0])
      lineWords.forEach((w, i) => {
        inner.appendChild(w)
        if (i < lineWords.length - 1) inner.appendChild(document.createTextNode(' '))
      })
      return inner
    })
  }

  /* ---------- Intro: preloader → hero ---------- */
  function intro() {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    const heroLines = []
    document.querySelectorAll('.ht-line').forEach((l) => {
      l.classList.add('line')
      const inner = document.createElement('span')
      inner.className = 'line-inner'
      while (l.firstChild) inner.appendChild(l.firstChild)
      l.appendChild(inner)
      heroLines.push(inner)
    })

    tl.from('.pre-name', { yPercent: 60, opacity: 0, duration: 0.7 })
      .from('.pre-role', { opacity: 0, duration: 0.4 }, '-=0.3')
      .to('.pre-inner', { opacity: 0, duration: 0.35, delay: 0.45 })
      .to('#preloader', {
        yPercent: -100,
        duration: 0.8,
        ease: 'power4.inOut',
        onComplete: () => {
          document.body.classList.add('is-loaded')
        },
      })
      .from(heroLines, { yPercent: 112, duration: 1.1, stagger: 0.12, ease: 'power4.out' }, '-=0.35')
      .from('.hero-eyebrow', { opacity: 0, y: 12, duration: 0.6 }, '-=0.7')
      .from('.hero-sub', { opacity: 0, y: 16, duration: 0.7 }, '-=0.55')
      .from('.hero-ctas .btn', { opacity: 0, y: 14, duration: 0.55, stagger: 0.08 }, '-=0.5')
      .from('.hero-foot', { opacity: 0, y: 10, duration: 0.6 }, '-=0.4')
      .from('.site-nav', { opacity: 0, y: -12, duration: 0.6, clearProps: 'all' }, '-=0.6')
      .add(() => {
        document.querySelectorAll('.hero-title .line').forEach((l) => l.classList.add('line-open'))
      })
    return tl
  }

  /* ---------- Scroll storytelling ---------- */
  function scrollAnims() {
    document.querySelectorAll('.sec-head').forEach((h) => {
      gsap.from(h, {
        opacity: 0,
        y: 18,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: h, start: 'top 86%' },
      })
    })

    document.querySelectorAll('.mline').forEach((line) => {
      gsap.to(line, {
        opacity: 1,
        ease: 'none',
        scrollTrigger: { trigger: line, start: 'top 82%', end: 'top 45%', scrub: 0.4 },
      })
    })

    const rises = [
      '.about-portrait', '.about-copy p', '.about-stats li',
      '.case-lede', '.case-metrics .metric', '.case-points li',
      '.store-tiles .store-tile', '.cap-row', '.credentials',
      '.contact-sub', '.contact-cta', '.contact-links', '.contact-meta',
    ]
    rises.forEach((sel) => {
      document.querySelectorAll(sel).forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 26,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 90%' },
        })
      })
    })

    document.querySelectorAll('.case-title, .contact-title').forEach((t) => {
      const inners = splitLines(t)
      gsap.from(inners, {
        yPercent: 112,
        duration: 1.0,
        stagger: 0.09,
        ease: 'power4.out',
        scrollTrigger: { trigger: t, start: 'top 84%' },
        onComplete: () => {
          t.querySelectorAll('.line').forEach((l) => l.classList.add('line-open'))
        },
      })
    })

    document.querySelectorAll('.case-meta').forEach((m) => {
      gsap.from(m, {
        opacity: 0,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: { trigger: m, start: 'top 88%' },
      })
    })

    document.querySelectorAll('.case-ghost').forEach((g) => {
      gsap.fromTo(
        g,
        { yPercent: 18 },
        {
          yPercent: -18,
          ease: 'none',
          scrollTrigger: { trigger: g.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
        }
      )
    })

    gsap.to('.hero-content', {
      yPercent: -8,
      opacity: 0.25,
      ease: 'none',
      scrollTrigger: { trigger: '#hero', start: 'bottom 90%', end: 'bottom 30%', scrub: true },
    })

    const nav = document.getElementById('siteNav')
    const navTween = gsap.quickTo(nav, 'yPercent', { duration: 0.4, ease: 'power3.out' })
    ScrollTrigger.create({
      start: 'top top',
      end: 'max',
      onUpdate: (self) => {
        if (self.scroll() < 80) {
          navTween(0)
          return
        }
        navTween(self.direction === 1 ? -130 : 0)
      },
    })
  }

  /* ---------- Magnetic buttons ---------- */
  function magnetic() {
    if (!window.matchMedia('(pointer: fine)').matches) return
    document.querySelectorAll('.magnetic').forEach((btn) => {
      const xTo = gsap.quickTo(btn, 'x', { duration: 0.4, ease: 'power3.out' })
      const yTo = gsap.quickTo(btn, 'y', { duration: 0.4, ease: 'power3.out' })
      on(btn, 'pointermove', (e) => {
        const r = btn.getBoundingClientRect()
        xTo((e.clientX - (r.left + r.width / 2)) * 0.22)
        yTo((e.clientY - (r.top + r.height / 2)) * 0.32)
      })
      on(btn, 'pointerleave', () => {
        xTo(0)
        yTo(0)
      })
    })
  }

  /* ---------- Cursor dot ---------- */
  function cursor() {
    if (!window.matchMedia('(pointer: fine)').matches) return
    const dot = document.getElementById('cursor')
    if (!dot) return
    const xTo = gsap.quickTo(dot, 'x', { duration: 0.25, ease: 'power3.out' })
    const yTo = gsap.quickTo(dot, 'y', { duration: 0.25, ease: 'power3.out' })
    on(
      window,
      'pointermove',
      (e) => {
        dot.classList.add('is-active')
        xTo(e.clientX)
        yTo(e.clientY)
      },
      { passive: true }
    )
    on(document, 'mouseover', (e) => {
      const hot = e.target.closest('a, button, .btn, image-slot')
      dot.classList.toggle('is-hover', !!hot)
    })
    on(document, 'mouseleave', () => dot.classList.remove('is-active'))
  }

  /* ---------- Boot (after fonts settle) ---------- */
  function boot() {
    intro()
    scrollAnims()
    magnetic()
    cursor()
    ScrollTrigger.refresh()
  }

  let bootCalled = false
  function bootOnce() {
    if (bootCalled) return
    bootCalled = true
    boot()
  }
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(bootOnce)
    setTimeout(bootOnce, 2500)
  } else {
    bootOnce()
  }

  /* ---------- Teardown ---------- */
  function destroy() {
    cleanups.forEach((fn) => fn())
    cleanups.length = 0
    ScrollTrigger.getAll().forEach((t) => t.kill())
    if (tickerFn) gsap.ticker.remove(tickerFn)
    if (lenis) lenis.destroy()
  }

  return () => destroy()
}
