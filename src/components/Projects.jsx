import Section from './Section'
import { projects } from '../data/projects' // 👈 los proyectos se editan en src/data/projects.js

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Trabajo" title="Proyectos">
      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group relative flex w-full flex-col sm:w-88 overflow-hidden rounded-3xl border border-white/10 bg-apple-card/60 transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
          >
            {/* Brillo de color al pasar el mouse */}
            <div
              aria-hidden
              className={`pointer-events-none absolute inset-0 bg-linear-to-br ${p.gradient ?? 'from-blue-500 to-purple-600'} opacity-0 transition-opacity duration-500 group-hover:opacity-15`}
            />

            <div className="relative aspect-16/10 overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                width="800"
                height="500"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="relative flex flex-1 flex-col p-6">
              <h3 className="text-2xl font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-2 flex-1 text-apple-gray">{p.description}</p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <li key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
                    {tag}
                  </li>
                ))}
              </ul>

              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="mt-6 text-sm font-medium text-apple-blue hover:underline"
              >
                Ver proyecto ›
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
