import { useEffect, useRef } from 'react'

// Lightweight transparent particle field for gaming vibe
// Renders on a canvas with requestAnimationFrame; tuned for low CPU usage
export default function Particles({ density = 0.6, max = 90, color = 'rgba(255,255,255,0.35)' }) {
  const canvasRef = useRef(null)
  const rafRef = useRef(0)
  const particlesRef = useRef([])
  const sizeRef = useRef({ w: 0, h: 0, dpr: 1 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const rect = canvas.getBoundingClientRect()
      canvas.width = Math.floor(rect.width * dpr)
      canvas.height = Math.floor(rect.height * dpr)
      sizeRef.current = { w: canvas.width, h: canvas.height, dpr }
      ctx.scale(dpr, dpr)
      initParticles()
    }

    const initParticles = () => {
      const viewW = canvas.clientWidth || (sizeRef.current.w / sizeRef.current.dpr)
      const viewH = canvas.clientHeight || (sizeRef.current.h / sizeRef.current.dpr)
      const area = viewW * viewH
      const count = Math.min(max, Math.floor((area / 25000) * density))
      particlesRef.current = Array.from({ length: count }).map(() => ({
        x: Math.random() * viewW,
        y: Math.random() * viewH,
        r: 0.6 + Math.random() * 1.8,
        vx: (Math.random() - 0.5) * 0.15,
        vy: -0.1 - Math.random() * 0.25,
        a: 0.2 + Math.random() * 0.5,
        tw: Math.random() * Math.PI * 2,
      }))
    }

    const step = () => {
      const viewW = canvas.clientWidth || (sizeRef.current.w / sizeRef.current.dpr)
      const viewH = canvas.clientHeight || (sizeRef.current.h / sizeRef.current.dpr)
      ctx.clearRect(0, 0, viewW, viewH)
      ctx.globalCompositeOperation = 'lighter'
      for (const p of particlesRef.current) {
        p.x += p.vx
        p.y += p.vy
        p.tw += 0.01
        const jitter = Math.sin(p.tw) * 0.15
        const x = p.x + jitter
        const y = p.y
        // wrap
        if (y < -5) p.y = viewH + 5
        if (x < -5) p.x = viewW + 5
        if (x > viewW + 5) p.x = -5
        ctx.beginPath()
        ctx.fillStyle = color
        ctx.globalAlpha = p.a
        ctx.arc(x, y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1
      rafRef.current = requestAnimationFrame(step)
    }

    resize()
    step()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [density, max, color])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true" />
}
