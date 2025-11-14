import { useState } from 'react'
import { Menu, X, Gamepad2 } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Awards', href: '#awards' },
    { label: 'About', href: '#about' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-white">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-fuchsia-500 to-indigo-500 grid place-items-center">
              <Gamepad2 size={18} className="text-white" />
            </div>
            <span className="font-semibold tracking-tight">Dragonloop</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((n) => (
              <a key={n.label} href={n.href} className="text-sm text-zinc-300 hover:text-white transition-colors">
                {n.label}
              </a>
            ))}
            <a href="#contact" className="text-sm px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-colors">Get in touch</a>
          </nav>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-zinc-900/80 backdrop-blur-sm">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((n) => (
              <a key={n.label} href={n.href} onClick={() => setOpen(false)} className="block text-zinc-300 hover:text-white">
                {n.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="inline-block mt-2 text-sm px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white border border-white/10">Get in touch</a>
          </div>
        </div>
      )}
    </header>
  )
}
