import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Particles from './Particles'
import ParallaxSeam from './ParallaxSeam'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  // Parallax mappings for layers (subtle, tasteful)
  const yFar = useTransform(scrollYProgress, [0, 1], [0, 40])
  const yMid = useTransform(scrollYProgress, [0, 1], [0, 90])
  const yNear = useTransform(scrollYProgress, [0, 1], [0, 140])

  return (
    <section ref={ref} className="relative min-h-[96vh] overflow-hidden bg-black text-white">
      {/* High-detail hero art backdrop (replaced with provided final art) */}
      <div className="absolute inset-0">
        <img
          src="https://wallpaperbat.com/img/53723586-hd-wallpaper-dauntless-videogame.jpg"
          alt="Фентези‑пейзаж — финальное арт‑изображение"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark veil for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/50 to-black/70" />
      </div>

      {/* Optional sky glow + star particles for gaming vibe */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,rgba(147,51,234,0.25)_0%,rgba(59,130,246,0.18)_26%,rgba(14,165,233,0.08)_48%,rgba(0,0,0,0.35)_66%,rgba(0,0,0,0.85)_100%)] mix-blend-screen" />
        <Particles density={0.8} max={110} color="rgba(167,139,250,0.35)" />
      </div>

      {/* Parallax SVG layers to create depth on top of the art */}
      <motion.div style={{ y: yFar }} className="absolute inset-x-0 bottom-[28vh] pointer-events-none">
        <svg className="w-[140%] -ml-[20%] h-[42vh]" viewBox="0 0 1200 400" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="far" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.25"/>
              <stop offset="100%" stopColor="#111827" stopOpacity="0.18"/>
            </linearGradient>
          </defs>
          <path d="M0 260 L120 220 L220 250 L320 210 L440 260 L560 200 L680 250 L800 210 L920 250 L1040 220 L1200 260 L1200 400 L0 400 Z" fill="url(#far)" />
        </svg>
      </motion.div>

      <motion.div style={{ y: yMid }} className="absolute inset-x-0 bottom-[16vh] pointer-events-none">
        <svg className="w-[150%] -ml-[25%] h-[44vh]" viewBox="0 0 1200 400" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="mid" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.5"/>
              <stop offset="100%" stopColor="#0b0b0c" stopOpacity="0.35"/>
            </linearGradient>
          </defs>
          <path d="M0 290 L100 260 L200 300 L300 250 L400 310 L520 260 L640 300 L760 260 L880 310 L1000 270 L1100 300 L1200 290 L1200 400 L0 400 Z" fill="url(#mid)" />
        </svg>
      </motion.div>

      <motion.div style={{ y: yNear }} className="absolute inset-x-0 bottom-0 pointer-events-none">
        <svg className="w-[160%] -ml-[30%] h-[50vh]" viewBox="0 0 1200 400" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="near" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1f1430" stopOpacity="0.95"/>
              <stop offset="100%" stopColor="#0A0A0B" stopOpacity="1"/>
            </linearGradient>
            <linearGradient id="path" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.25"/>
              <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.18"/>
            </linearGradient>
          </defs>
          <path d="M0 300 L120 280 L260 310 L420 270 L560 320 L740 285 L900 320 L1080 290 L1200 310 L1200 400 L0 400 Z" fill="url(#near)" />
          <path d="M560 190 C520 230, 500 270, 520 310 C540 340, 620 360, 700 400 L760 400 C700 360, 640 340, 600 310 C560 280, 580 230, 620 190 Z" fill="url(#path)" opacity="0.7"/>
        </svg>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[92rem] px-6 sm:px-8 lg:px-10 pt-36 pb-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight max-w-5xl"
        >
          Goose Gaming — проводник в мир гейминга для брендов
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 max-w-2xl text-lg sm:text-xl text-zinc-300"
        >
          Рекламное агентство полного цикла в области гейминга и киберспорта. Мы объединяем бренды с видеоиграми, лигами и командами, стримерами и игровыми инфлюенсерами.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="mt-3 max-w-2xl text-base sm:text-lg text-zinc-400"
        >
          Наша цель — чтобы все бренды соприкоснулись с геймингом.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a href="#contact" className="px-5 py-3 rounded-md bg-gradient-to-r from-fuchsia-500 to-violet-400 text-black font-medium hover:opacity-90 transition-opacity">Начать квест</a>
          <a href="#work" className="px-5 py-3 rounded-md bg-white/10 border border-white/10 hover:bg-white/20 transition-colors">Смотреть кейсы</a>
        </motion.div>

        <div className="mt-12 flex gap-6 text-sm text-zinc-400">
          <div>100+ брендов</div>
          <div>60+ наград</div>
          <div>Экспертиза в киберспорте</div>
        </div>
      </div>

      {/* Animated parallax seam to blend into next section */}
      <ParallaxSeam className="absolute inset-x-0 bottom-0" />
    </section>
  )
}
