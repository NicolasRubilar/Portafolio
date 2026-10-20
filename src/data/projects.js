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
 *   image       → (opcional, sin imagen se muestra el nombre sobre el gradiente) guarda la imagen en /public/img/ y escribe '/img/archivo.webp'
 *                 (usa .webp de ~800px de ancho para que cargue rápido: https://squoosh.app)
 *   link        → repositorio de GitHub
 *   badge       → (opcional) etiqueta sobre el título, ej: 'Concepto de diseño'
 *   demo        → (opcional) sitio publicado; agrega el botón "Ver sitio"
 *   gradient    → (opcional) colores del brillo de la tarjeta, clases de Tailwind
 *                 ej: 'from-blue-500 to-purple-600', 'from-pink-500 to-orange-400'
 */

export const projects = [
  {
    title: 'Sipobus',
    description:
      'Plataforma de venta de pasajes de bus: búsqueda de viajes, selección de asientos, pago, cupones, boleto en PDF y gestión de cambios y anulaciones. Proyecto universitario optimizado hasta 93/100 en Lighthouse móvil y 100 en escritorio.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'React Router', 'jsPDF'],
    image: '/img/imagenSipoBus.webp',
    link: 'https://github.com/NicolasRubilar/sipobus-react-tailwindcss.git',
    gradient: 'from-blue-500 to-purple-600',
  },
  {
    title: 'NutriVida',
    description:
      'Sistema para una clínica nutricional: agenda de citas en línea, fichas clínicas, seguimiento de mediciones con gráficos, planes alimenticios y estadísticas. Cuatro roles con permisos, contraseñas protegidas con hash, mapa de la clínica y 109 pruebas unitarias con 90 % de cobertura.',
    tags: ['React', 'React Router', 'Bootstrap', 'Leaflet', 'Jasmine', 'Karma'],
    image: '/img/NutriVida.webp',
    link: 'https://github.com/NicolasRubilar/Nutri-Vida-Fullstack',
    gradient: 'from-emerald-400 to-teal-600',
  },
  {
    title: 'Tienda de bebidas',
    badge: 'Concepto de diseño',
    description:
      'Rediseño no oficial de una tienda online inspirada en Coca-Cola. Cada marca cambia el color de toda la página, las latas y botellas se dibujan en código según el formato elegido, e incluye carrito lateral y efecto 3D al mover el mouse.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'SVG', 'Animaciones CSS'],
    image: '/img/TiendaBebidas.webp',
    link: 'https://github.com/NicolasRubilar/e-commerce-bebida-Prueba-de-dise-o-',
    gradient: 'from-red-500 to-orange-500',
  },
]
