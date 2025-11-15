import { motion } from 'framer-motion'
import { useRef } from 'react'
import Particles from './Particles'
import TornPaperDivider from './TornPaperDivider'

export default function Hero() {
  const ref = useRef(null)

  return (
    <section ref={ref} className="relative min-h-[96vh] overflow-hidden bg-black text-white">
      {/* High-detail hero art backdrop */}
      <div className="absolute inset-0">
        <img
          src="https://wallpaperbat.com/img/53723586-hd-wallpaper-dauntless-videogame.jpg"
          alt="Фентези‑пейзаж — финальное арт‑изображение"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark veil for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/55 to-black/70" />
      </div>

      {/* Sky glow + subtle particles for gaming vibe */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,rgba(147,51,234,0.25)_0%,rgba(59,130,246,0.18)_26%,rgba(14,165,233,0.08)_48%,rgba(0,0,0,0.35)_66%,rgba(0,0,0,0.85)_100%)] mix-blend-screen" />
        <Particles density={0.7} max={100} color="rgba(167,139,250,0.35)" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[92rem] px-6 sm:px-8 lg:px-10 pt-36 pb-28">
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

      {/* Torn paper divider: uneven full-width edge with shadow so hero tucks under next section */}
      <div className="relative z-20 -mb-px">
        <TornPaperDivider color="#0A0A0B" />
      </div>
    </section>
  )
}
