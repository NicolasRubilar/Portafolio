/*
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  PROYECTOS                                                   ║
 * ║  Para agregar uno nuevo, copia un bloque { ... } y pégalo     ║
 * ║  al final de la lista. Se crea la tarjeta automáticamente.    ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 * Campos:
 *   title       → nombre del proyecto
 *   description → una o dos frases sobre qué hace
 *   tags        → tecnologías usadas (se muestran como etiquetas)
 *   image       → guarda la imagen en /public/img/ y escribe '/img/archivo.webp'
 *                 (usa .webp de ~800px de ancho para que cargue rápido: https://squoosh.app)
 *   link        → repositorio de GitHub o demo en vivo
 *   gradient    → (opcional) colores del brillo de la tarjeta, clases de Tailwind
 *                 ej: 'from-blue-500 to-purple-600', 'from-pink-500 to-orange-400'
 */

export const projects = [
  {
    title: 'Sipobus',
    description: 'Proyecto web para consultar información de buses.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: '/img/sipobus.webp',
    link: 'https://github.com/NicolasRubilar/SipoBus-.git',
    gradient: 'from-blue-500 to-purple-600',
  },
  // 👇 Agrega aquí tu próximo proyecto, por ejemplo:
  // {
  //   title: 'Mi nuevo proyecto',
  //   description: 'Qué hace y qué aprendí.',
  //   tags: ['React', 'Tailwind'],
  //   image: '/img/mi-proyecto.webp',
  //   link: 'https://github.com/NicolasRubilar/mi-proyecto',
  //   gradient: 'from-pink-500 to-orange-400',
  // },
]
