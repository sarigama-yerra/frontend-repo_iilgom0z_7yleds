import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-black text-white">
      {/* Background image under the title */}
      <div className="absolute inset-0">
        <img
          src="https://wallpapercave.com/wp/wp4758016.jpg"
          alt="gaming background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-black/60" />
        {/* Subtle grid + purple accent */}
        <div className="absolute inset-0 opacity-[0.18] bg-[url('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'160\' height=\'160\' viewBox=\'0 0 40 40\'><g fill=\'none\' stroke=\'rgba(255,255,255,0.10)\' stroke-width=\'0.5\'><path d=\'M0 20h40M20 0v40\'/><circle cx=\'20\' cy=\'20\' r=\'12\'/></g></svg>')]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.18),transparent_60%)]" />
      </div>

      {/* Spline shifted to the right so it doesn't overlap the text; darkened console colors */}
      <div className="absolute inset-0 flex justify-end items-center pointer-events-none">
        <div className="w-[120%] md:w-[90%] lg:w-[70%] translate-x-10 md:translate-x-6 lg:translate-x-8 mix-blend-screen opacity-80">
          <Spline scene="https://prod.spline.design/jQwvQSncGp8maF9S/scene.splinecode" style={{ width: '100%', height: '100vh', filter: 'saturate(0.8) brightness(0.85)' }} />
        </div>
      </div>

      {/* Foreground gradient veil */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24">
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

      {/* 2D game art ambience */}
      <div className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-30 blur-sm">
        <svg width="900" height="220" viewBox="0 0 900 220" xmlns="http://www.w3.org/2000/svg" fill="none">
          <g filter="url(#f)">
            <path d="M20 180h80l20-20h60l20-20h80l20-20h60l20-20h80l20-20h60l20-20h80l20-20h60" stroke="url(#g)" strokeWidth="3" strokeLinecap="round"/>
          </g>
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="900" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#a78bfa"/>
              <stop offset="1" stopColor="#f472b6"/>
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
