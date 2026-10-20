import Section from './Section'
import { profile } from '../data/profile'

export default function About() {
  return (
    <Section id="about" eyebrow="Quién soy" title="Sobre mí">
      <p className="mx-auto max-w-3xl text-center text-xl leading-relaxed text-white/80 sm:text-2xl">
        {profile.about}
      </p>

      <ul className="mt-10 flex flex-wrap justify-center gap-3">
        {profile.availability.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-apple-card/60 px-4 py-2 text-sm text-white/85"
          >
            <span aria-hidden className="size-1.5 rounded-full bg-emerald-400" />
            {item}
          </li>
        ))}
      </ul>
    </Section>
  )
}
