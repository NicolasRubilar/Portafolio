import { useEffect, useState } from 'react';
import projectImage from '../imagenes.img/imagen_sipobus.jpg';
import logo from '../imagenes.img/logo_portafolio_NR.png';

const skills = [
  { name: 'HTML', icon: 'html5/html5-original.svg' },
  { name: 'CSS', icon: 'css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'javascript/javascript-original.svg' },
  { name: 'Python', icon: 'python/python-original.svg' },
  { name: 'MySQL', icon: 'mysql/mysql-original.svg' },
  { name: 'VS Code', icon: 'vscode/vscode-original.svg' },
  { name: 'Git Bash', icon: 'git/git-original.svg' },
];

function App() {
  const [isDark, setIsDark] = useState(
    () => window.localStorage.getItem('dark-mode') === 'true',
  );

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDark);
    window.localStorage.setItem('dark-mode', String(isDark));
    document.querySelector('link[rel="icon"]').href = logo;
  }, [isDark]);

  return (
    <>
      <header className="site-header sticky-top">
        <nav className="navbar portfolio-navbar">
          <div className="container-fluid header-inner">
            <a className="navbar-brand" href="#inicio" aria-label="Inicio">
              NR<span>.</span>
            </a>
            <div className="nav-links">
              <a className="nav-link curriculum-link" href="Curriculum">Curriculum</a>
              <a className="nav-link" href="#Skills">Skills</a>
              <a className="nav-link" href="#Projects">Projects</a>
              <a className="nav-link" href="#about-me">Sobre Mí</a>
              <a className="nav-link" href="#Contactos">Contactos</a>
            </div>
            <div className="form-check form-switch theme-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="darkModeToggle"
                checked={isDark}
                onChange={(event) => setIsDark(event.target.checked)}
                aria-label="Activar modo oscuro"
              />
            </div>
          </div>
        </nav>
      </header>

      <main className="container portfolio-main">
        <section className="hero-section" id="inicio">
          <p className="hero-kicker">
            Console.log("<span className="rainbow-text">Hello, World!</span> 👋")
          </p>
          <h1 className="nom_apple">Nicolas H. Rubilar</h1>
          <p className="subtitulo">Computer Engineering student</p>
        </section>

        <section className="content-section" id="Skills">
          <div className="section-heading">
            <span className="section-index">01 / TOOLKIT</span>
            <h2 className="nom_apple">Skills</h2>
          </div>
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-3 justify-content-center">
            {skills.map((skill) => (
              <div className="col" key={skill.name}>
                <article className="skill-card card h-100">
                  <img
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}`}
                    alt=""
                    loading="lazy"
                  />
                  <h3>{skill.name}</h3>
                </article>
              </div>
            ))}
          </div>
        </section>

        <section className="content-section" id="Projects">
          <div className="section-heading">
            <span className="section-index">02 / SELECTED WORK</span>
            <h2 className="nom_apple">Projects</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-7">
              <article className="project-box card h-100">
                <img src={projectImage} alt="Vista previa del proyecto Sipobus" loading="lazy" />
                <div className="project-copy">
                  <span className="project-type">PROYECTO WEB</span>
                  <h3>Sipobus</h3>
                  <p>Una experiencia web creada con HTML, CSS y JavaScript.</p>
                  <a
                    href="https://github.com/NicolasRubilar/SipoBus-.git"
                    className="btn btn-primary project-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ver proyecto <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="content-section" id="about-me">
          <div className="section-heading">
            <span className="section-index">03 / A LITTLE ABOUT ME</span>
            <h2 className="nom_apple">Sobre mí</h2>
          </div>
          <div className="about-box">
            <p>
              Soy estudiante de Ingeniería en Computación y me apasiona el desarrollo de
              software, especialmente el desarrollo front-end. Disfruto aprender nuevas
              tecnologías y convertir ideas en proyectos con impacto.
            </p>
          </div>
        </section>

        <section className="content-section" id="Contactos">
          <div className="section-heading">
            <span className="section-index">04 / LET&apos;S TALK</span>
            <h2 className="nom_apple">Contacto</h2>
          </div>
          <div className="contact-box">
            <a href="https://wa.me/569XXXXXXXX" target="_blank" rel="noreferrer" className="contact-link whatsapp">
              <i className="fab fa-whatsapp" aria-hidden="true"></i> WhatsApp
            </a>
            <a href="https://github.com/NicolasRubilar" target="_blank" rel="noreferrer" className="contact-link github">
              <i className="fab fa-github" aria-hidden="true"></i> GitHub
            </a>
            <a href="mailto:tuemail@dominio.com" className="contact-link email">
              <i className="fas fa-envelope" aria-hidden="true"></i> Email
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-content">
          <p>© 2025 Nicolás H. Rubilar.</p>
          <a href="#inicio">Volver arriba ↑</a>
        </div>
      </footer>
    </>
  );
}

export default App;