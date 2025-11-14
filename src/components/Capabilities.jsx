import { motion } from 'framer-motion'
import { Sword, BadgeDollarSign, Tv, Headphones, Users, Sparkles } from 'lucide-react'

const items = [
  { icon: Sword, title: 'Стратегия в киберспорте', desc: 'Лиги, турниры, партнерства с командами и киберспорт-инициативы.' },
  { icon: Tv, title: 'Креаторы и стримеры', desc: 'Twitch, YouTube, TikTok — интеграции, спецпроекты и сторителлинг.' },
  { icon: BadgeDollarSign, title: 'Медиа и инвентарь', desc: 'Эксклюзивные размещения в гейминге, кастомные форматы и performance.' },
  { icon: Headphones, title: 'Аудио и Sonic IP', desc: 'Фирменные звуки, OST, озвучка, in-game аудио и саунд-дизайн.' },
  { icon: Users, title: 'Комьюнити и социальные сети', desc: 'Discord-операции, UGC-квесты, фан-миссии и лайв-ивенты.' },
  { icon: Sparkles, title: 'Экспириенсы и XR', desc: 'Pop-up, AR-фильтры, виртуальные миры и иммерсивные релизы.' },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-[#0A0A0B] text-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-3xl sm:text-4xl font-bold">Услуги</motion.h2>
        <p className="mt-3 text-zinc-400 max-w-2xl">От стратегии и креатива до продакшена и медиа — полный цикл для брендов в гейминге.</p>

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
