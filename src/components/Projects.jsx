import { useEffect, useRef, useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import Section from './Section'
import { projects } from '../data/projects' // 👈 los proyectos se editan en src/data/projects.js

const GAP = 24 // gap-6 entre tarjetas

const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function Projects() {
  const track = useRef(null)
  const [active, setActive] = useState(0)
  const [edges, setEdges] = useState({ start: true, end: false })

  // Lee el scroll del carrusel: qué tarjeta está al inicio y si se llegó a un extremo
  useEffect(() => {
    const el = track.current
    let frame = 0

    const update = () => {
      frame = 0
      const { scrollLeft, scrollWidth, clientWidth } = el
      const atEnd = scrollLeft + clientWidth >= scrollWidth - 4
      setEdges({ start: scrollLeft <= 4, end: atEnd })

      // Al final la última tarjeta ya no puede quedar al inicio: se marca igual como activa
      if (atEnd) return setActive(el.children.length - 1)
      const pad = parseFloat(getComputedStyle(el).paddingLeft)
      let nearest = 0
      let min = Infinity
      ;[...el.children].forEach((card, i) => {
        const d = Math.abs(card.offsetLeft - pad - scrollLeft)
        if (d < min) [min, nearest] = [d, i]
      })
      setActive(nearest)
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    el.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      el.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const goTo = (i) => {
    const el = track.current
    const card = el.children[i]
    if (!card) return
    const pad = parseFloat(getComputedStyle(el).paddingLeft)
    el.scrollTo({ left: card.offsetLeft - pad, behavior: reduceMotion() ? 'auto' : 'smooth' })
  }

  const step = (dir) => {
    const el = track.current
    const width = el.children[0]?.offsetWidth ?? 0
    el.scrollBy({ left: dir * (width + GAP), behavior: reduceMotion() ? 'auto' : 'smooth' })
  }

  // Si todas las tarjetas caben, no hay nada que deslizar
  const scrollable = !(edges.start && edges.end)

  return (
    <Section id="projects" eyebrow="Trabajo" title="Proyectos">
      {/* El carrusel sale hasta el borde en el celular para que se vea que hay más tarjetas */}
      <div
        ref={track}
        role="region"
        aria-roledescription="carrusel"
        aria-label="Proyectos"
        tabIndex={0}
        className="no-scrollbar -mx-4 flex snap-x snap-mandatory scroll-px-4 gap-6 overflow-x-auto px-4 py-2 outline-none focus-visible:ring-2 focus-visible:ring-apple-blue/60 sm:-mx-6 sm:scroll-px-6 sm:px-6"
      >
        {projects.map((p, i) => (
          <article
            key={p.title}
            aria-roledescription="diapositiva"
            aria-label={`${i + 1} de ${projects.length}: ${p.title}`}
            className="group relative flex w-[85%] shrink-0 snap-start flex-col overflow-hidden rounded-3xl border border-white/10 bg-apple-card/60 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 sm:w-88"
          >
            {/* Brillo de color al pasar el mouse */}
            <div
              aria-hidden
              className={`pointer-events-none absolute inset-0 bg-linear-to-br ${p.gradient ?? 'from-blue-500 to-purple-600'} opacity-0 transition-opacity duration-500 group-hover:opacity-15`}
            />

            <div className="relative aspect-16/10 overflow-hidden">
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width="800"
                  height="500"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                // Sin captura: el nombre del proyecto sobre su gradiente
                <div
                  className={`flex h-full w-full items-center justify-center bg-linear-to-br ${p.gradient ?? 'from-blue-500 to-purple-600'} transition-transform duration-500 group-hover:scale-105`}
                >
                  <span className="text-4xl font-semibold tracking-tight text-white">{p.title}</span>
                </div>
              )}
            </div>

            <div className="relative flex flex-1 flex-col p-6">
              {p.badge && (
                <p className="mb-2 w-fit rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/70">
                  {p.badge}
                </p>
              )}
              <h3 className="text-2xl font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-2 flex-1 text-apple-gray">{p.description}</p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <li key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex gap-5 text-sm font-medium">
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer" className="text-apple-blue hover:underline">
                    Ver sitio ›
                  </a>
                )}
                {p.link && (
                  <a href={p.link} target="_blank" rel="noreferrer" className="text-apple-blue hover:underline">
                    Ver código ›
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {scrollable && (
        <div className="mt-8 flex items-center justify-center gap-6">
          <ArrowButton label="Proyecto anterior" disabled={edges.start} onClick={() => step(-1)}>
            <FiChevronLeft className="size-5" />
          </ArrowButton>

          <div className="flex items-center gap-2">
            {projects.map((p, i) => (
              <button
                key={p.title}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Ir a ${p.title}`}
                aria-current={i === active}
                className="grid size-6 place-items-center"
              >
                <span
                  className={`block h-1.5 rounded-full transition-all duration-300 ${
                    i === active ? 'w-6 bg-white' : 'w-1.5 bg-white/30 hover:bg-white/60'
                  }`}
                />
              </button>
            ))}
          </div>

          <ArrowButton label="Proyecto siguiente" disabled={edges.end} onClick={() => step(1)}>
            <FiChevronRight className="size-5" />
          </ArrowButton>
        </div>
      )}
    </Section>
  )
}

function ArrowButton({ label, disabled, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className="grid size-11 place-items-center rounded-full border border-white/15 bg-apple-card text-white transition-all hover:border-white/30 hover:bg-white/10 active:scale-95 disabled:pointer-events-none disabled:opacity-30"
    >
      {children}
    </button>
  )
}
