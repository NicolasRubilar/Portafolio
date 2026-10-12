import Section from './Section'
import { skillCategories } from '../data/skills' // 👈 categorías y lenguajes se editan en src/data/skills.js

const gcd = (a, b) => (b ? gcd(b, a % b) : a)

// Calcula la grilla para que las skills llenen la tarjeta sin huecos.
// Si la última fila queda incompleta, sus íconos se reparten el ancho en partes iguales
// (ej: 5 skills → fila de 3 + fila de 2 más anchos, en vez de dejar un hueco).
function getGrid(count) {
  const perRow = count <= 3 ? count : Math.min(4, Math.ceil(count / 2))
  const lastRow = count % perRow || perRow
  const totalCols = (perRow * lastRow) / gcd(perRow, lastRow) // mínimo común múltiplo
  const firstLastRowIndex = count - lastRow

  return {
    totalCols,
    spanFor: (i) => (i >= firstLastRowIndex ? totalCols / lastRow : totalCols / perRow),
  }
}

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Tecnologías" title="Skills">
      {/* Bento: las categorías grandes (4+ skills) ocupan 2 columnas y 2 filas */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-flow-dense lg:grid-cols-3">
        {skillCategories.map((category) => {
          const isLarge = category.skills.length >= 4
          const { totalCols, spanFor } = getGrid(category.skills.length)

          return (
            <article
              key={category.title}
              className={`flex flex-col rounded-3xl border border-white/10 bg-apple-card/60 p-5 sm:p-6 ${
                isLarge ? 'md:col-span-2 lg:row-span-2' : ''
              }`}
            >
              <header className="mb-4">
                <h3
                  className={`bg-linear-to-r ${category.gradient} w-fit bg-clip-text text-2xl font-semibold tracking-tight text-transparent`}
                >
                  {category.title}
                </h3>
                <p className="mt-1 text-sm text-apple-gray">{category.description}</p>
              </header>

              <ul
                className="grid flex-1 auto-rows-fr gap-3"
                style={{ gridTemplateColumns: `repeat(${totalCols}, minmax(0, 1fr))` }}
              >
                {category.skills.map((skill, i) => (
                  <li
                    key={skill.name}
                    style={{ gridColumn: `span ${spanFor(i)}` }}
                    className="group flex min-h-28 flex-col items-center justify-center gap-3 rounded-2xl bg-white/5 p-4 transition-colors duration-300 hover:bg-white/10"
                  >
                    <img
                      src={skill.icon}
                      alt=""
                      loading="lazy"
                      width="48"
                      height="48"
                      className={`transition-transform duration-300 group-hover:scale-110 ${isLarge ? 'size-12' : 'size-10'}`}
                    />
                    <span className="text-sm font-medium text-white/90">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </article>
          )
        })}
      </div>
    </Section>
  )
}
