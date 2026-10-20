import { FiArrowUpRight } from 'react-icons/fi'
import Section from './Section'
import { clients } from '../data/clients' // 👈 los clientes se editan en src/data/clients.js

export default function Clients() {
  return (
    <Section id="clients" eyebrow="En producción" title="Clientes">
      <div className="flex flex-col gap-6">
        {clients.map((c) => (
          <a
            key={c.name}
            href={c.url}
            target="_blank"
            rel="noreferrer"
            className="group grid overflow-hidden rounded-3xl border border-white/10 bg-apple-card/60 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 md:grid-cols-2"
          >
            <div className="relative aspect-1200/630 overflow-hidden bg-[#f3f2ef]">
              <img
                src={c.image}
                alt={c.name}
                loading="lazy"
                width="1200"
                height="630"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
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

              <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-apple-blue">
                Visitar sitio
                <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </Section>
  )
}
