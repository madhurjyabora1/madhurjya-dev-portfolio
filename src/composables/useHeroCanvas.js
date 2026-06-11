/* Hero WebGL v2 — cold cyberpunk palette: deep blue-black smoke with neon highlights.
   Pointer-reactive, pauses off-screen, static frame under reduced motion.
   Ported to accept a canvas element and return a cleanup function. */

const VERT = ['attribute vec2 p;', 'void main(){ gl_Position = vec4(p, 0.0, 1.0); }'].join('\n')

const FRAG = [
  'precision mediump float;',
  'uniform vec2 u_res;',
  'uniform float u_time;',
  'uniform vec2 u_mouse;',
  'uniform vec3 u_accent;',
  'float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123); }',
  'float noise(vec2 p){',
  '  vec2 i = floor(p); vec2 f = fract(p);',
  '  vec2 u = f * f * (3.0 - 2.0 * f);',
  '  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),',
  '             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);',
  '}',
  'float fbm(vec2 p){',
  '  float v = 0.0; float a = 0.5;',
  '  for (int i = 0; i < 5; i++){ v += a * noise(p); p = p * 2.03 + vec2(1.7, 9.2); a *= 0.5; }',
  '  return v;',
  '}',
  'void main(){',
  '  vec2 uv = gl_FragCoord.xy / u_res.xy;',
  '  vec2 p = uv * vec2(u_res.x / u_res.y, 1.0) * 1.6;',
  '  float t = u_time * 0.045;',
  '  vec2 m = (u_mouse - 0.5) * 0.55;',
  '  vec2 q = vec2(fbm(p + t), fbm(p + vec2(5.2, 1.3) - t * 0.7));',
  '  vec2 r = vec2(fbm(p + 2.6 * q + vec2(1.7, 9.2) + t * 0.5 + m),',
  '                fbm(p + 2.6 * q + vec2(8.3, 2.8) - t * 0.4 - m * 0.6));',
  '  float v = fbm(p + 2.2 * r);',
  '  vec3 base = vec3(0.010, 0.016, 0.022);',
  '  vec3 mid  = vec3(0.026, 0.058, 0.074);',
  '  vec3 col = mix(base, mid, smoothstep(0.25, 0.85, v));',
  '  float hi = pow(clamp(r.x * v, 0.0, 1.0), 3.0);',
  '  col += u_accent * hi * 0.5;',
  '  col += u_accent * pow(clamp(q.y, 0.0, 1.0), 6.0) * 0.14;',
  '  float scan = sin(gl_FragCoord.y * 1.6) * 0.012;',
  '  col -= scan;',
  '  vec2 vg = uv - 0.5;',
  '  col *= 1.0 - dot(vg, vg) * 0.9;',
  '  col += (hash(gl_FragCoord.xy + u_time) - 0.5) * 0.012;',
  '  gl_FragColor = vec4(col, 1.0);',
  '}',
].join('\n')

/**
 * @param {HTMLCanvasElement} canvas
 * @returns {() => void} cleanup
 */
export function initHeroCanvas(canvas) {
  const noop = () => {}
  if (!canvas) return noop
  const gl = canvas.getContext('webgl', { antialias: false, alpha: false, powerPreference: 'low-power' })
  if (!gl) return noop

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  function compile(type, src) {
    const s = gl.createShader(type)
    gl.shaderSource(s, src)
    gl.compileShader(s)
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) return null
    return s
  }
  const vs = compile(gl.VERTEX_SHADER, VERT)
  const fs = compile(gl.FRAGMENT_SHADER, FRAG)
  if (!vs || !fs) return noop
  const prog = gl.createProgram()
  gl.attachShader(prog, vs)
  gl.attachShader(prog, fs)
  gl.linkProgram(prog)
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return noop
  gl.useProgram(prog)

  const buf = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, buf)
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
  const loc = gl.getAttribLocation(prog, 'p')
  gl.enableVertexAttribArray(loc)
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0)

  const uRes = gl.getUniformLocation(prog, 'u_res')
  const uTime = gl.getUniformLocation(prog, 'u_time')
  const uMouse = gl.getUniformLocation(prog, 'u_mouse')
  const uAccent = gl.getUniformLocation(prog, 'u_accent')

  function hexToRgb(hex) {
    let h = hex.replace('#', '')
    if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2]
    const n = parseInt(h, 16)
    return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255]
  }
  function setAccent(hex) {
    const c = hexToRgb(hex)
    gl.uniform3f(uAccent, c[0], c[1], c[2])
  }
  setAccent((getComputedStyle(document.documentElement).getPropertyValue('--accent') || '#00E5C7').trim())

  const onAccent = (e) => {
    setAccent(e.detail)
    if (prefersReduced) drawOnce()
  }
  window.addEventListener('mb-accent', onAccent)

  const mouse = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 }
  const onPointerMove = (e) => {
    mouse.tx = e.clientX / window.innerWidth
    mouse.ty = 1.0 - e.clientY / window.innerHeight
  }
  window.addEventListener('pointermove', onPointerMove, { passive: true })

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
    const w = Math.floor(canvas.clientWidth * dpr * 0.75)
    const h = Math.floor(canvas.clientHeight * dpr * 0.75)
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w
      canvas.height = h
      gl.viewport(0, 0, w, h)
    }
    gl.uniform2f(uRes, canvas.width, canvas.height)
  }
  const onResize = () => {
    resize()
    if (prefersReduced) drawOnce()
  }
  window.addEventListener('resize', onResize)
  resize()

  let visible = true
  let io = null
  if ('IntersectionObserver' in window) {
    io = new IntersectionObserver((entries) => {
      visible = entries[0].isIntersecting
    })
    io.observe(canvas)
  }

  let rafId = 0
  let running = true
  const start = performance.now()
  function frame(now) {
    if (!running) return
    rafId = requestAnimationFrame(frame)
    if (!visible || document.hidden) return
    mouse.x += (mouse.tx - mouse.x) * 0.04
    mouse.y += (mouse.ty - mouse.y) * 0.04
    gl.uniform1f(uTime, (now - start) / 1000)
    gl.uniform2f(uMouse, mouse.x, mouse.y)
    gl.drawArrays(gl.TRIANGLES, 0, 3)
  }
  function drawOnce() {
    gl.uniform1f(uTime, 24.0)
    gl.uniform2f(uMouse, 0.5, 0.5)
    gl.drawArrays(gl.TRIANGLES, 0, 3)
  }

  if (prefersReduced) {
    drawOnce()
  } else {
    rafId = requestAnimationFrame(frame)
  }

  return () => {
    running = false
    cancelAnimationFrame(rafId)
    window.removeEventListener('mb-accent', onAccent)
    window.removeEventListener('pointermove', onPointerMove)
    window.removeEventListener('resize', onResize)
    if (io) io.disconnect()
  }
}
