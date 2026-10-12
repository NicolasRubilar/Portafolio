import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <p className="mx-auto max-w-6xl px-4 text-center text-xs text-apple-gray sm:px-6">
        © {new Date().getFullYear()} {profile.name}. Hecho con React y Tailwind CSS.
      </p>
    </footer>
  )
}
