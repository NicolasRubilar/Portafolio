import { FiArrowUpRight, FiLock } from 'react-icons/fi'
import Section from './Section'
import { clients } from '../data/clients' // 👈 los clientes se editan en src/data/clients.js

const cardClass =
  'group grid overflow-hidden rounded-3xl border border-white/10 bg-apple-card/60 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 md:grid-cols-2'

export default function Clients() {
  return (
    <Section id="clients" eyebrow="Trabajo real" title="Clientes">
      <div className="flex flex-col gap-6">
        {clients.map((c) => {
          const content = (
            <>
              {/* La imagen se muestra completa (object-contain) para no cortar logos ni capturas */}
              <div
                className={`flex items-center justify-center overflow-hidden ${c.imageBg ?? 'bg-white/5'} ${c.screenshot ? 'p-6 sm:p-10' : ''}`}
              >
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  className={`h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.03] ${
                    c.screenshot ? 'rounded-xl shadow-2xl shadow-black/25' : ''
                  }`}
                />
              </div>

              <div className="flex flex-col justify-center p-6 sm:p-10">
                <p className="text-sm font-medium text-apple-gray">{c.type}</p>
                <h3 className="mt-1 text-3xl font-semibold tracking-tight">{c.name}</h3>
                <p className="mt-3 text-apple-gray">{c.description}</p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {c.tags.map((tag) => (
                    <li key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap items-center gap-5 text-sm font-medium">
                  {c.url ? (
                    <span className="inline-flex items-center gap-1 text-apple-blue">
                      Visitar sitio
                      <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-apple-gray">
                      <FiLock aria-hidden /> Uso privado del cliente
                    </span>
                  )}
                  {c.code && (
                    <a href={c.code} target="_blank" rel="noreferrer" className="text-apple-blue hover:underline">
                      Ver código ›
                    </a>
                  )}
                </div>
              </div>
            </>
          )

          // Con sitio público toda la tarjeta es un enlace; si es un sistema interno, no
          return c.url ? (
            <a key={c.name} href={c.url} target="_blank" rel="noreferrer" className={cardClass}>
              {content}
            </a>
          ) : (
            <article key={c.name} className={cardClass}>
              {content}
            </article>
          )
        })}
      </div>
    </Section>
  )
}
