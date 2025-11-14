export default function Footer() {
  return (
    <footer className="bg-black text-zinc-400 pt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 items-center pb-8">
          <p className="text-sm">© {new Date().getFullYear()} Goose Gaming — Gaming & Esports Advertising</p>
          <div className="text-sm flex gap-6 justify-start sm:justify-end">
            <a href="#about" className="hover:text-white">О компании</a>
            <a href="#work" className="hover:text-white">Кейсы</a>
            <a href="#contact" className="hover:text-white">Связаться</a>
          </div>
        </div>
      </div>

      {/* Office interior looping video */}
      <div className="relative">
        <video
          src="https://goose.gg/api/wp-content/uploads/2023/05/gg-footer-wm.webm"
          className="w-full h-[280px] object-cover opacity-60"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />
      </div>
    </footer>
  )
}
