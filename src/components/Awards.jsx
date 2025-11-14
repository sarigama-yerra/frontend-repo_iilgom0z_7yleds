import { motion } from 'framer-motion'

const awards = [
  'Cannes Lions',
  'The One Show',
  'D&AD',
  'Webby Awards',
  'Clio Entertainment',
  'Effie Awards',
]

export default function Awards() {
  return (
    <section id="awards" className="relative bg-black text-white py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-3xl sm:text-4xl font-bold">60+ Industry Awards</motion.h2>
        <p className="mt-3 text-zinc-400 max-w-2xl">Recognized by the world’s top shows for creativity, craft, and effectiveness.</p>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {awards.map((a) => (
            <motion.div key={a} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-lg border border-white/10 bg-white/5 px-4 py-6 text-center text-sm text-zinc-200">
              {a}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
