import { motion } from 'framer-motion'
import { Sword, BadgeDollarSign, Tv, Headphones, Users, Sparkles } from 'lucide-react'

const items = [
  { icon: Sparkles, title: 'Креатив и стратегия', desc: 'Разработка концепции присутствия бренда в гейминге и киберспорте.' },
  { icon: Users, title: 'Лидеры мнений', desc: 'Интеграции и спецпроекты со стримерами, видеоблогерами и селебрити.' },
  { icon: Tv, title: 'SMM и контент', desc: 'Создание контента, ведение тематических сообществ и content hub.' },
  { icon: Sword, title: 'Продакшн', desc: 'Организация цифровых и офлайн‑ивентов, постановочные и непостановочные форматы.' },
  { icon: Headphones, title: 'IT‑решения', desc: 'Сайты, приложения, VR/AR, программы лояльности, разработка игр.' },
  { icon: BadgeDollarSign, title: 'Медиа и PR', desc: 'Медиапланирование и закупка, PR‑кампании и спецразмещения.' },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-[#0A0A0B] text-white py-20">
      <div className="mx-auto max-w-[92rem] px-6 sm:px-8 lg:px-10">
        <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-3xl sm:text-4xl font-bold">Услуги</motion.h2>
        <p className="mt-3 text-zinc-400 max-w-2xl">Точные направления нашей экспертизы — от креатива и инфлюенсеров до IT и медиа.</p>

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
