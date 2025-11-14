import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navItems = [
    { label: 'Кейсы', href: '#work' },
    { label: 'Услуги', href: '#services' },
    { label: 'Награды', href: '#awards' },
    { label: 'О компании', href: '#about' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-black/40 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-3 text-white">
            <img
              src="https://goose.gg/assets/logo-1cb895a3.svg"
              alt="Goose Gaming"
              className="h-7 w-auto select-none"
            />
            <span className="sr-only">Goose Gaming</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((n) => (
              <a key={n.label} href={n.href} className="text-sm text-zinc-300 hover:text-white transition-colors">
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              className="text-sm px-4 py-2 rounded-md bg-gradient-to-r from-fuchsia-500 to-violet-400 text-black font-medium hover:opacity-90 transition-opacity"
            >
              Связаться
            </a>
          </nav>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-zinc-900/90 backdrop-blur-sm">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((n) => (
              <a key={n.label} href={n.href} onClick={() => setOpen(false)} className="block text-zinc-300 hover:text-white">
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-block mt-2 text-sm px-4 py-2 rounded-md bg-gradient-to-r from-fuchsia-500 to-violet-400 text-black font-medium"
            >
              Связаться
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
