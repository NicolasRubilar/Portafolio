import { useState } from 'react'
import { FiDownload } from 'react-icons/fi'
import { profile } from '../data/profile'

const links = [
  { href: '#projects', label: 'Proyectos' },
  { href: '#clients', label: 'Clientes' },
  { href: '#skills', label: 'Tecnologías' },
  { href: '#about', label: 'Sobre mí' },
  { href: '#contact', label: 'Contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Borde superior del marco: la muesca cuelga de aquí */}
      <div className="h-2.5 bg-apple-card" />

      <div className="relative mx-4 rounded-b-2xl bg-apple-card shadow-[0_10px_30px_rgba(41,151,255,0.15)] md:mx-auto md:w-fit">
        {/* Esquinas curvas hacia afuera que unen la muesca con el marco */}
        <span aria-hidden className="notch-ear absolute top-0 -left-4" />
        <span aria-hidden className="notch-ear notch-ear-right absolute top-0 -right-4" />

        <nav className="flex h-12 items-center justify-between gap-10 px-3">
          <a href="#top" className="flex items-center gap-2.5">
            <img src="/img/logo.png" alt="" width="32" height="32" className="size-8 rounded-lg" />
            <span className="text-[15px] font-semibold text-white">{profile.name}</span>
          </a>

          <div className="hidden items-center gap-5 md:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-white/60 transition-colors hover:text-white">
                {l.label}
              </a>
            ))}
          </div>

          <a
            href={profile.cvUrl}
            className="hidden items-center gap-1.5 rounded-lg bg-white px-3.5 py-1.5 text-xs font-medium text-black transition-opacity hover:opacity-80 md:flex"
          >
            <FiDownload className="size-3.5" />
            Currículum
          </a>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label="Abrir menú"
            aria-expanded={open}
          >
            <span className={`h-px w-5 bg-white transition-transform duration-300 ${open ? 'translate-y-[3.5px] rotate-45' : ''}`} />
            <span className={`h-px w-5 bg-white transition-transform duration-300 ${open ? '-translate-y-[3.5px] -rotate-45' : ''}`} />
          </button>
        </nav>

        {open && (
          <div className="border-t border-white/10 px-4 pb-4 md:hidden">
            {[...links, { href: profile.cvUrl, label: 'Currículum' }].map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-white/5 py-3.5 text-base text-white/80 last:border-0"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
