import Section from './Section'
import { profile } from '../data/profile'

export default function About() {
  return (
    <Section id="about" eyebrow="Quién soy" title="Sobre mí">
      <p className="mx-auto max-w-3xl text-center text-xl leading-relaxed text-white/80 sm:text-2xl">
        {profile.about}
      </p>
    </Section>
  )
}
