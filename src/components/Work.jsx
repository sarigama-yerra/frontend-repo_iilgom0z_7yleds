import { motion } from 'framer-motion'

const work = [
  { title: 'Quest for the Dragon’s Loot', brand: 'Mythic Cola', result: '2.4M players, +18% sales', img: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Base Builder Challenge', brand: 'Fortis Tech', result: 'Top 1 Twitch ad unit, +40% lift', img: 'https://images.unsplash.com/photo-1526657782770-5491f6c0d128?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Boss Rush Premiere', brand: 'Prime Studio', result: 'Global trending, 500K streams', img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1600&auto=format&fit=crop' },
]

export default function Work() {
  return (
    <section id="work" className="relative bg-[#0A0A0B] text-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-3xl sm:text-4xl font-bold">Selected Work</motion.h2>
        <p className="mt-3 text-zinc-400 max-w-2xl">A few stories from 100+ campaigns across gaming, esports, and entertainment.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {work.map((w) => (
            <motion.div key={w.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="group overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={w.img} alt={w.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="text-sm text-zinc-400">{w.brand}</div>
                <h3 className="mt-1 text-lg font-semibold">{w.title}</h3>
                <div className="mt-2 text-sm text-emerald-400">{w.result}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
