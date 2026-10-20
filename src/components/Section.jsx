import { useReveal } from '../hooks/useReveal'

// Contenedor común para cada sección: título con gradiente + animación al aparecer
export default function Section({ id, eyebrow, title, children }) {
  const ref = useReveal()

  return (
    <section id={id} ref={ref} className="reveal scroll-mt-16 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {eyebrow && (
          <p className="mb-3 text-center text-sm font-semibold tracking-wide text-apple-gray uppercase">
            {eyebrow}
          </p>
        )}
        <h2 className="text-gradient mb-12 pb-2 text-center text-4xl font-semibold tracking-tight sm:text-6xl">
          {title}
        </h2>
        {children}
      </div>
    </section>
  )
}
