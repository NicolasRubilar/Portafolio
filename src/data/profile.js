/*
 * Datos personales: nombre, textos y enlaces de contacto.
 * Cambia aquí tu WhatsApp y correo reales.
 */
import { BsInstagram } from 'react-icons/bs'
import { FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

export const profile = {
  name: 'Nicolas H. Rubilar',
  role: 'Computer Engineering student',
  about:
    "I'm a Computer Engineering student passionate about software development, particularly front-end development. I enjoy learning new technologies and turning ideas into impactful projects.",
  cvUrl: '/img/Curriculum%20Nicolas%20Ignacio%20Hernandez%20Rubilar.pdf.pdf',
}

// Para agregar un contacto, copia una línea. Íconos disponibles: https://react-icons.github.io/react-icons
export const contacts = [
  { label: 'WhatsApp', href: 'https://wa.me/569XXXXXXXX',          icon: FaWhatsapp },
  { label: 'GitHub',   href: 'https://github.com/NicolasRubilar', icon: FaGithub },
  { label: 'Email',    href: 'mailto:tuemail@dominio.com',        icon: HiOutlineMail },
  { label: 'Instagram',    href: 'https://www.instagram.com/nicolas_h_rubilar/',        icon: BsInstagram }
]
