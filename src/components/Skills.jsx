import Section from './Section'
import { skillCategories } from '../data/skills' // 👈 categorías y lenguajes se editan en src/data/skills.js

// Estilo "ficha técnica" de Apple: una sola tarjeta con una fila por categoría.
// Cada fila tiene el título a la izquierda y las tecnologías a la derecha en celdas del mismo
// tamaño, así una categoría con 2 skills se ve igual de ordenada que una con 7.
export default function Skills() {
  return (
    <Section id="skills" eyebrow="Lo que uso" title="Tecnologías">
      <div className="divide-y divide-white/10 overflow-hidden rounded-3xl border border-white/10 bg-apple-card/60">
        {skillCategories.map((category) => (
          <article
            key={category.title}
            className="grid gap-5 p-6 sm:p-8 md:grid-cols-[13rem_1fr] md:gap-10"
          >
            <header>
              <h3
                className={`bg-linear-to-r ${category.gradient} w-fit bg-clip-text text-2xl font-semibold tracking-tight text-transparent`}
              >
                {category.title}
              </h3>
              <p className="mt-1 text-sm text-apple-gray">{category.description}</p>
            </header>

            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {category.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="group flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 transition-colors duration-300 hover:bg-white/10"
                >
                  <img
                    src={skill.icon}
                    alt=""
                    loading="lazy"
                    width="32"
                    height="32"
                    className={`size-8 shrink-0 transition-transform duration-300 group-hover:scale-110 ${skill.invert ? 'brightness-0 invert' : ''}`}
                  />
                  <span className="text-sm leading-tight font-medium text-white/90">{skill.name}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
