import Section from './Section'
import { contacts } from '../data/profile' // 👈 los contactos se editan en src/data/profile.js

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Hablemos" title="Contacto">
      <div className="flex flex-wrap justify-center gap-4">
        {contacts.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-full border border-white/10 bg-apple-card/60 px-6 py-3 font-medium text-white/90 transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
          >
            <Icon className="text-xl" aria-hidden />
            {label}
          </a>
        ))}
      </div>
    </Section>
  )
}
