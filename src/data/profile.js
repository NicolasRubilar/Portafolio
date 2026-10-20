/*
 * Datos personales: nombre, textos y enlaces de contacto.
 * Cambia aquí tu WhatsApp y correo reales.
 */
import { BsInstagram } from 'react-icons/bs'
import { FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

export const profile = {
  name: 'Nicolas H. Rubilar',
  role: 'Estudiante de Ingeniería en Informática',
  about:
    'Soy estudiante de Ingeniería en Informática en Duoc UC, apasionado por el desarrollo de software, especialmente el front-end. Disfruto aprender nuevas tecnologías y convertir ideas en proyectos con impacto.',
  // Se muestran como etiquetas en "Sobre mí"
  availability: ['Santiago, Chile', 'Buscando práctica', 'Disponible para freelance'],
  cvUrl: '/img/Curriculum-Nicolas-Hernandez-Rubilar.pdf',
}

// Para agregar un contacto, copia una línea. Íconos disponibles: https://react-icons.github.io/react-icons
export const contacts = [
  // { label: 'WhatsApp', href: 'https://wa.me/569XXXXXXXX', icon: FaWhatsapp }, // 👈 descomenta cuando quieras mostrarlo
  { label: 'LinkedIn',  href: 'https://www.linkedin.com/in/nicolas-rubilar-3830a1249/', icon: FaLinkedin },
  { label: 'GitHub',    href: 'https://github.com/NicolasRubilar',           icon: FaGithub },
  { label: 'Email',     href: 'https://mail.google.com/mail/?view=cm&fs=1&to=nicolas28rubilar02@gmail.com', icon: HiOutlineMail },
  { label: 'Instagram', href: 'https://www.instagram.com/nicolas_h_rubilar/', icon: BsInstagram },
]
