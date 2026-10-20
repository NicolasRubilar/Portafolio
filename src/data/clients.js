/*
 * CLIENTES: sitios hechos para negocios reales y publicados en la web.
 * Para agregar uno, copia un bloque { ... } (igual que en projects.js).
 *
 * Campos:
 *   name        → nombre del cliente
 *   type        → rubro o tipo de proyecto
 *   description → qué se hizo, en una o dos frases
 *   tags        → tecnologías y servicios entregados
 *   image       → captura o logo en /public/img/
 *   url         → sitio en producción
 */

export const clients = [
  {
    name: 'IT - Support',
    type: 'Servicios computacionales',
    description:
      'Sitio web para una empresa de soporte TI: servicios, preguntas frecuentes, orden de servicio y contacto directo, optimizado para buscadores y celulares.',
    tags: ['React', 'Vite', 'SEO', 'Responsive', 'Vercel'],
    image: '/img/it-support.png',
    url: 'https://www.it-support.cl/',
  },
]
