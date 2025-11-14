import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RefreshCw, PackageOpen } from 'lucide-react'

// Placeholder cases – will be replaced by Goose site content if provided
const allCases = [
  { id: 1, title: 'Valorant Launch Ops', brand: 'Riot Games', result: '+42% lift in recall', img: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=1600&auto=format&fit=crop', summary: 'Tactical creator squads, shroud co-streams, and custom Twitch units.' },
  { id: 2, title: 'Game Pass Bounty', brand: 'Xbox', result: '1.2M trials', img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1600&auto=format&fit=crop', summary: 'UGC questline, lootable codes, and Discord economy.' },
  { id: 3, title: 'Legends Collab', brand: 'Apex Legends', result: 'Top trending asset', img: 'https://images.unsplash.com/photo-1526657782770-5491f6c0d128?q=80&w=1600&auto=format&fit=crop', summary: 'Streetwear drop + event takeover with streamers.' },
  { id: 4, title: 'Indie Showcase', brand: 'Steam', result: '3.1M viewers', img: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1600&auto=format&fit=crop', summary: 'Twitch front-page programming and mini-games.' },
  { id: 5, title: 'Arcane Night', brand: 'Netflix', result: '500K streams', img: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1600&auto=format&fit=crop', summary: 'Watch party mechanics and talent-driven activations.' },
  { id: 6, title: 'Creator Cup', brand: 'YouTube', result: 'Top 3 ad unit', img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1600&auto=format&fit=crop', summary: 'Mid-roll storyline and live overlays.' },
]

function randomThree(source) {
  const shuffled = [...source].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, 3)
}

export default function Work() {
  const [revealed, setRevealed] = useState([false, false, false])
  const [selection, setSelection] = useState(() => randomThree(allCases))

  const reset = () => {
    setRevealed([false, false, false])
    setSelection(randomThree(allCases))
  }

  return (
    <section id="work" className="relative bg-[#0A0A0B] text-white py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.08] bg-[url('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'120\' height=\'120\' viewBox=\'0 0 60 60\'><path d=\'M0 30h60M30 0v60\' stroke=\'rgba(255,255,255,0.14)\' stroke-width=\'0.5\' /><circle cx=\'30\' cy=\'30\' r=\'8\' fill=\'none\' stroke=\'rgba(255,255,255,0.12)\' stroke-width=\'0.5\'/></svg>')]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.08),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-4xl sm:text-5xl font-bold">Cases — Loot the Crates</motion.h2>
        <p className="mt-3 text-zinc-400 max-w-2xl">Choose a loot box to reveal a client case. Hit refresh to randomize new crates.</p>

        <div className="mt-8 flex items-center gap-3">
          <button onClick={reset} className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 border border-white/10">
            <RefreshCw size={16} /> Refresh crates
          </button>
        </div>

        <div className="mt-8 grid sm:grid-cols-3 gap-6">
          {selection.map((item, idx) => (
            <div key={item.id} className="relative">
              <AnimatePresence initial={false}>
                {!revealed[idx] ? (
                  <motion.button
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                    onClick={() => setRevealed(r => r.map((v, i) => i === idx ? true : v))}
                    className="group w-full aspect-[4/5] rounded-xl border border-emerald-400/20 bg-gradient-to-b from-emerald-400/10 to-cyan-400/10 p-6 grid place-items-center overflow-hidden"
                  >
                    <div className="relative">
                      <div className="absolute -inset-10 bg-[conic-gradient(from_0deg,transparent,rgba(16,185,129,0.2),transparent)] blur-xl opacity-50 group-hover:opacity-80 transition" />
                      <PackageOpen className="relative z-10 text-emerald-300" size={48} />
                    </div>
                    <div className="absolute bottom-4 left-0 right-0 text-center text-emerald-200/80 text-sm tracking-wide">Click to open</div>
                  </motion.button>
                ) : (
                  <motion.div
                    key={`card-${item.id}`}
                    initial={{ rotateY: 90, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    exit={{ rotateY: -90, opacity: 0 }}
                    transition={{ duration: 0.45 }}
                    className="overflow-hidden rounded-xl border border-white/10 bg-white/5 h-full"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={item.img} alt={item.title} className="h-full w-full object-cover" />
                    </div>
                    <div className="p-5">
                      <div className="text-sm text-zinc-400">{item.brand}</div>
                      <h3 className="mt-1 text-xl font-semibold">{item.title}</h3>
                      <div className="mt-2 text-sm text-emerald-400">{item.result}</div>
                      <p className="mt-3 text-sm text-zinc-300">{item.summary}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
