import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import Services from './components/Capabilities'
import Awards from './components/Awards'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Work />
      <Services />
      <Awards />
      <section id="about" className="bg-[#0A0A0B] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold">О компании</h2>
          <p className="mt-4 text-zinc-300 max-w-3xl">
            Рекламное агентство полного цикла в области гейминга и киберспорта. Мы объединяем бренды с видеоиграми, лигами и командами,
            стримерами и игровыми инфлюенсерами. Goose Gaming — самое награжденное гейминговое агентство в СНГ. На нашем счету — более
            60 побед на отраслевых фестивалях, премиях и конкурсах.
          </p>
          <p className="mt-4 text-zinc-400 max-w-3xl">
            Мы предлагаем полный спектр рекламных услуг: от стратегии и креатива до разработки и продакшена.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default App
