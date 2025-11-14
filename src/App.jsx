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
          <h2 className="text-3xl sm:text-4xl font-bold">About</h2>
          <p className="mt-4 text-zinc-400 max-w-3xl">We are a specialist team helping world‑class brands communicate with gamers. Strategy, creative, production, media, and measurement—built by veterans across esports, publishing, and AAA studios. We operate like a raid party: tight coordination, rare loot, and clean executions.</p>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default App
