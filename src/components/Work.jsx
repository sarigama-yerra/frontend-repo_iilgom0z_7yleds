import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RefreshCw, PackageOpen } from 'lucide-react'

// Goose.gg-inspired cases with real image assets
const allCases = [
  {
    id: 1,
    title: 'Home Credit Bank. 5% — это много',
    brand: 'Home Credit Bank',
    result: '5% кешбэк на любые игровые покупки',
    img: 'https://goose.gg/api/wp-content/uploads/2023/05/home-credit-bank.jpg',
    summary: 'Промо на Twitch: интеграции со стримерами и инфлюенсерами, механики вовлечения.'
  },
  {
    id: 2,
    title: 'Winline EML',
    brand: 'Winline',
    result: 'Медиалига по CS:GO',
    img: 'https://goose.gg/api/wp-content/uploads/2023/05/winline-eml.jpg',
    summary: 'Про и полупро-игроки, артисты и блогеры. Турнирный продакшн и инфлюенс-активации.'
  },
  {
    id: 3,
    title: 'Avito CUP',
    brand: 'Авито',
    result: 'Турнир LoL для новых талантов',
    img: 'https://goose.gg/api/wp-content/uploads/2023/05/avito-cup.jpg',
    summary: 'Организация турнира и коммуникация с сообществом. Возможность войти в проф-лигу.'
  },
  {
    id: 4,
    title: 'KFC Games',
    brand: 'KFC',
    result: 'Виджет + любительский турнир по Dota 2',
    img: 'https://goose.gg/api/wp-content/uploads/2023/05/kfc-games.jpg',
    summary: 'Промокампания на Twitch с разработкой кастомного виджета и турнира.'
  },
  {
    id: 5,
    title: 'AXE Collision Games',
    brand: 'Unilever / AXE',
    result: 'Первый брендированный PVP-виджет в СНГ',
    img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1600&auto=format&fit=crop',
    summary: 'Геймифицированная механика на Twitch, интеграции с инфлюенсерами.'
  },
  {
    id: 6,
    title: 'King of the Hill. Lenovo Legion',
    brand: 'Lenovo',
    result: 'Программа лояльности и скидки за киллы',
    img: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1600&auto=format&fit=crop',
    summary: 'Начисление бонусов за игровые действия и их конвертация в скидки.'
  },
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(168,85,247,0.14),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-4xl sm:text-5xl font-bold">Кейсы — Loot the Crates</motion.h2>
        <p className="mt-3 text-zinc-400 max-w-2xl">Выберите лутбокс, чтобы раскрыть кейс клиента. Нажмите обновить, чтобы перегенерировать.</p>

        <div className="mt-8 flex items-center gap-3">
          <button onClick={reset} className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 border border-white/10">
            <RefreshCw size={16} /> Обновить лутбоксы
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
                    className="group w-full aspect-[4/5] rounded-xl border border-fuchsia-400/20 bg-gradient-to-b from-fuchsia-400/10 to-violet-400/10 p-6 grid place-items-center overflow-hidden"
                  >
                    <div className="relative">
                      <div className="absolute -inset-10 bg-[conic-gradient(from_0deg,transparent,rgba(168,85,247,0.25),transparent)] blur-xl opacity-50 group-hover:opacity-80 transition" />
                      <PackageOpen className="relative z-10 text-fuchsia-300" size={48} />
                    </div>
                    <div className="absolute bottom-4 left-0 right-0 text-center text-fuchsia-200/80 text-sm tracking-wide">Нажмите, чтобы открыть</div>
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
                      <div className="mt-2 text-sm text-fuchsia-400">{item.result}</div>
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
