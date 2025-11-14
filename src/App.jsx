import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import Capabilities from './components/Capabilities'
import Awards from './components/Awards'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Work />
      <Capabilities />
      <Awards />
      <section id="about" className="bg-[#0A0A0B] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold">About</h2>
          <p className="mt-4 text-zinc-400 max-w-3xl">Мы помогаем брендам говорить на языке игроков. Команда со стажем в киберспорте, паблишинге и AAA‑продакшне. Стратегия, креатив, медиа, продакшн и измерение эффективности — полный цикл под задачи бизнеса.</p>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default App
