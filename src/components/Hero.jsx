import { profile } from '../data/profile'

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh items-center justify-center overflow-hidden px-4 pt-14">
      {/* Brillos de color de fondo (gradientes radiales: mucho más livianos que un filtro blur) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(28rem circle at 38% 40%, rgb(37 99 235 / 0.28), transparent 70%),' +
            'radial-gradient(26rem circle at 62% 55%, rgb(192 38 211 / 0.22), transparent 70%)',
        }}
      />

      <div className="relative text-center">
        <p className="mb-6 font-mono text-sm text-white/60 sm:text-base">
          console.log(&quot;<span className="text-gradient font-semibold">Hello, World!</span>&quot;) 👋
        </p>
        <h1 className="text-gradient pb-2 text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl">
          {profile.name}
        </h1>
        <p className="mt-6 text-xl text-apple-gray sm:text-2xl">{profile.role}</p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          <a
            href="#projects"
            className="rounded-full bg-[#0071e3] px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Ver proyectos
          </a>
          <a href="#contact" className="text-sm font-medium text-apple-blue hover:underline">
            Contáctame ›
          </a>
        </div>
      </div>
    </section>
  )
}
