import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/jQwvQSncGp8maF9S/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight"
        >
          We help brands speak gamer.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 max-w-2xl text-lg text-zinc-300"
        >
          Full‑stack marketing for gaming and esports audiences. Serious craft with playful soul—quests, loot, levels, boss fights. We bring exclusive mechanics, data, and inventory to win every campaign.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
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
    </section>
  )
}
