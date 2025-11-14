import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-black text-white">
      {/* Dark patterned background behind console */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.10),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.18] bg-[url('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'160\' height=\'160\' viewBox=\'0 0 40 40\'><g fill=\'none\' stroke=\'rgba(255,255,255,0.10)\' stroke-width=\'0.5\'><path d=\'M0 20h40M20 0v40\'/><circle cx=\'20\' cy=\'20\' r=\'12\'/></g></svg>')]" />
      </div>

      {/* Spline shifted to the right so it doesn't overlap the text */}
      <div className="absolute inset-0 flex justify-end items-center pointer-events-none">
        <div className="w-[120%] md:w-[90%] lg:w-[70%] translate-x-10 md:translate-x-6 lg:translate-x-8">
          <Spline scene="https://prod.spline.design/jQwvQSncGp8maF9S/scene.splinecode" style={{ width: '100%', height: '100vh' }} />
        </div>
      </div>

      {/* Foreground gradient veil */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-emerald-400/90 text-sm font-medium tracking-wider uppercase"
        >
          Goose Gaming
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight max-w-3xl"
        >
          We help brands speak gamer.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 max-w-2xl text-lg sm:text-xl text-zinc-300"
        >
          Full‑stack marketing for gaming and esports audiences. Serious craft with playful soul—quests, loot, levels, boss fights.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a href="#contact" className="px-5 py-3 rounded-md bg-white text-black font-medium hover:bg-zinc-200 transition-colors">Start a quest</a>
          <a href="#work" className="px-5 py-3 rounded-md bg-white/10 border border-white/10 hover:bg-white/20 transition-colors">View success stories</a>
        </motion.div>

        <div className="mt-12 flex gap-6 text-sm text-zinc-400">
          <div>100+ brands</div>
          <div>60+ industry awards</div>
          <div>Global esports expertise</div>
        </div>
      </div>

      {/* 2D game art ambience */}
      <div className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-30 blur-sm">
        <svg width="900" height="220" viewBox="0 0 900 220" xmlns="http://www.w3.org/2000/svg" fill="none">
          <g filter="url(#f)">
            <path d="M20 180h80l20-20h60l20-20h80l20-20h60l20-20h80l20-20h60l20-20h80l20-20h60" stroke="url(#g)" strokeWidth="3" strokeLinecap="round"/>
          </g>
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="900" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#22d3ee"/>
              <stop offset="1" stopColor="#10b981"/>
            </linearGradient>
            <filter id="f" x="0" y="0" width="1000" height="260" colorInterpolationFilters="sRGB">
              <feGaussianBlur stdDeviation="6"/>
            </filter>
          </defs>
        </svg>
      </div>
    </section>
  )
}
