import { motion } from 'framer-motion'
import { Sword, BadgeDollarSign, Tv, Headphones, Users, Sparkles } from 'lucide-react'

const items = [
  { icon: Sword, title: 'Esports Strategy', desc: 'League-ready playbooks, tournament integrations, team partnerships.' },
  { icon: Tv, title: 'Creator & Streamer', desc: 'Twitch, YouTube, TikTok—co-created narratives with top talent.' },
  { icon: BadgeDollarSign, title: 'Media & Inventory', desc: 'Exclusive gaming placements, custom units, performance craft.' },
  { icon: Headphones, title: 'Audio & Sonic IP', desc: 'Branded sounds, OSTs, voice packs, in-game audio drops.' },
  { icon: Users, title: 'Community & Social', desc: 'Discord ops, UGC quests, fan missions, live events.' },
  { icon: Sparkles, title: 'Experiential & XR', desc: 'Pop-ups, AR filters, virtual worlds, immersive launches.' },
]

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative bg-[#0A0A0B] text-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-3xl sm:text-4xl font-bold">Capabilities</motion.h2>
        <p className="mt-3 text-zinc-400 max-w-2xl">From strategy and storytelling to production and media—end-to-end systems designed for gamers.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <motion.div key={title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 hover:from-white/10 hover:to-white/[0.06] transition-colors">
              <div className="h-10 w-10 grid place-items-center rounded-lg bg-white/10 border border-white/10">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
