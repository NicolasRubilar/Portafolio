/*
 * CLIENTES: sitios hechos para negocios reales y publicados en la web.
 * Para agregar uno, copia un bloque { ... } (igual que en projects.js).
 *
 * Campos:
 *   name        → nombre del cliente
 *   type        → rubro o tipo de proyecto
 *   description → qué se hizo, en una o dos frases
 *   tags        → tecnologías y servicios entregados
 *   image       → captura o logo en /public/img/ (se muestra completa, sin recortes)
 *   imageBg     → (opcional) fondo detrás de la imagen, clases de Tailwind
 *   screenshot  → (opcional) true si es una captura: se muestra como ventana flotante con sombra
 *   url         → (opcional) sitio público. Si es un sistema interno del cliente, déjalo fuera
 *   code        → (opcional) repositorio de GitHub
 */

export const clients = [
  {
    name: 'IT - Support',
    type: 'Servicios computacionales',
    description:
      'Sitio web para una empresa de soporte TI: servicios, preguntas frecuentes, orden de servicio y contacto directo, optimizado para buscadores y celulares.',
    tags: ['React', 'Vite', 'SEO', 'Responsive', 'Vercel'],
    image: '/img/it-support.png',
    imageBg: 'bg-[#f3f2ef]',
    url: 'https://www.it-support.cl/',
  },
  {
    name: 'Mi Taller',
    type: 'Sistema interno · Taller de bisutería',
    description:
      'Sistema de inventario para una pyme de bisutería: control de insumos, productos y movimientos de stock, con inicio de sesión, respaldos y pruebas automáticas. Se instala en el celular como app.',
    tags: ['React', 'Node.js', 'Express', 'SQLite', 'Turso', 'Netlify'],
    image: '/img/MiTaller.webp',
    imageBg: 'bg-linear-to-br from-pink-200 to-rose-300',
    screenshot: true,
    code: 'https://github.com/NicolasRubilar/Sistema-de-Inventario-Anais',
  },
]
