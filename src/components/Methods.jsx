import Section from './Section'
import { methodologies, softSkills } from '../data/methods' // 👈 se editan en src/data/methods.js

export default function Methods() {
  return (
    <Section id="methods" eyebrow="Metodologías y habilidades" title="Cómo trabajo">
      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-3xl border border-white/10 bg-apple-card/60 p-6 sm:p-8">
          <h3 className="text-2xl font-semibold tracking-tight">Metodologías</h3>
          <p className="mt-1 text-sm text-apple-gray">Cómo organizo el trabajo en equipo</p>

          <ul className="mt-6 divide-y divide-white/10">
            {methodologies.map((m) => (
              <li key={m.name} className="py-4 first:pt-0 last:pb-0">
                <p className="font-medium text-white">{m.name}</p>
                <p className="mt-1 text-sm text-apple-gray">{m.description}</p>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-3xl border border-white/10 bg-apple-card/60 p-6 sm:p-8">
          <h3 className="text-2xl font-semibold tracking-tight">Habilidades blandas</h3>
          <p className="mt-1 text-sm text-apple-gray">Lo que aporto además del código</p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {softSkills.map((s) => (
              <li key={s} className="rounded-full bg-white/10 px-4 py-2 text-sm text-white/85">
                {s}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </Section>
  )
}
