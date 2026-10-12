/*
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  SKILLS POR CATEGORÍA                                        ║
 * ║                                                              ║
 * ║  ➕ Nuevo lenguaje: copia una línea { name, icon } dentro de  ║
 * ║     la categoría que corresponda.                            ║
 * ║  ➕ Nueva categoría: copia un bloque completo                 ║
 * ║     { title, description, gradient, skills: [...] }          ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 * Campos de cada categoría:
 *   title       → nombre de la categoría (ej: 'Frontend')
 *   description → frase corta bajo el título
 *   gradient    → colores del título, clases de Tailwind (ej: 'from-sky-400 to-blue-600')
 *   skills      → lista de lenguajes/herramientas de esa categoría
 *
 * Campos de cada skill:
 *   name → nombre que se muestra bajo el ícono
 *   icon → URL del ícono. Busca el tuyo en https://devicon.dev
 *          Formato: `${DEVICON}/<nombre>/<nombre>-original.svg`
 *
 * Las categorías con 4 o más skills se muestran como tarjeta grande; las demás, como tarjetas
 * pequeñas a su lado. Los íconos se estiran solos para llenar cada tarjeta.
 */

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons'

export const skillCategories = [
  {
    title: 'Frontend',
    description: 'Interfaces y experiencia de usuario',
    gradient: 'from-sky-400 to-blue-600',
    skills: [
      { name: 'HTML',       icon: `${DEVICON}/html5/html5-original.svg` },
      { name: 'CSS',        icon: `${DEVICON}/css3/css3-original.svg` },
      { name: 'JavaScript', icon: `${DEVICON}/javascript/javascript-original.svg` },
      { name: 'React',      icon: `${DEVICON}/react/react-original.svg` },
      { name: 'Tailwind',   icon: `${DEVICON}/tailwindcss/tailwindcss-original.svg` },
      // 👇 Agrega aquí más tecnologías frontend
    ],
  },
  {
    title: 'Backend',
    description: 'Lógica, servidores y datos',
    gradient: 'from-violet-400 to-fuchsia-600',
    skills: [
      { name: 'Python', icon: `${DEVICON}/python/python-original.svg` },
      { name: 'MySQL',  icon: `${DEVICON}/mysql/mysql-original.svg` },
      // 👇 Agrega aquí más tecnologías backend (ej: Node.js, Java)
      // { name: 'Node.js', icon: `${DEVICON}/nodejs/nodejs-original.svg` },
    ],
  },
  {
    title: 'Herramientas',
    description: 'Lo que uso en el día a día',
    gradient: 'from-pink-400 to-orange-500',
    skills: [
      { name: 'VS Code', icon: `${DEVICON}/vscode/vscode-original.svg` },
      { name: 'Git',     icon: `${DEVICON}/git/git-original.svg` },
      // 👇 Agrega aquí más herramientas (ej: GitHub, Figma)
      // { name: 'Figma', icon: `${DEVICON}/figma/figma-original.svg` },
    ],
  },
  // 👇 Agrega aquí una nueva categoría, por ejemplo:
  // {
  //   title: 'Mobile',
  //   description: 'Apps para teléfonos',
  //   gradient: 'from-emerald-400 to-teal-600',
  //   skills: [
  //     { name: 'Flutter', icon: `${DEVICON}/flutter/flutter-original.svg` },
  //   ],
  // },
]
