import ProjectCard from "../components/ProjectCard";

function Home() {
    // Datos de ejemplo para los proyectos
    const projects = [
        {
            id: 1,
            title: "InnovaSpace",
            description:
                "Un proyecto full-stack CRUD de una empresa de coworking social.Donde los usuarios pueden reservar, puntuar y opiniar las oficinas.",
            image: "./upload/INNO.png",
            technologies: [
                "React",
                "Node.js",
                "SQL",
                "Express",
                "CSS",
                "JavaScript",
            ],
            link: "https://innovaspace-eta.vercel.app/",
        },
        {
            id: 2,
            title: "Milenial, the game",
            description:
                "¿Quieres vivir la experiencia milenial? sortea todos los problemas mientras acumulas deuda emomcional",
            image: "./upload/MILENIAL.png",
            technologies: ["JavaScript", "CSS", "HTML"],
            link: "albertomartinezdelacasa.github.io/milenialgame/",
        },
        {
            id: 3,
            title: "Pokedex",
            description:
                "Un clasico de entre los clasicos. Llamada a una api y un buscador para encontrar a tu pokemon favorito. El primer proyecto. Ay, se me ha metido algo en el ojo.",
            image: "./upload/pokedex.png",
            technologies: ["CSS", "JavaScript", "HTML"],
            link: "https://aperezbanks.github.io/Visualizador_Pokemon01/",
        },
    ];

    return (
        <div className="home-page">
            {/* Sección Hero */}
            <section className="home-section" id="inicio">
                <div className="hero">
                    <img src="/upload/Alberto.PNG" alt="Alberto" />
                    <h1>
                        Hola, soy <span className="highlight">ALBERTO</span>
                    </h1>
                    <h2>Desarrollador Web</h2>
                    <p className="hero-description">
                        Soy un apasionado desarrollador web con ganas de crear
                        experiencias digitales atractivas y funcionales. Me
                        encanta resolver problemas complejos y convertir ideas
                        en aplicaciones web elegantes.
                    </p>
                    <div className="hero-buttons">
                        <a href="#proyectos" className="btn primary-btn">
                            Ver Proyectos
                        </a>
                        <a href="#contacto" className="btn secondary-btn">
                            Contáctame
                        </a>
                    </div>
                </div>
            </section>

            {/* Sección Sobre Mí */}
            <section className="about-section" id="sobre-mi">
                <div className="about-me">
                    <h2>Sobre Mí</h2>
                    <div className="about-content">
                        <div className="about-text">
                            <p>
                                Asumir retos y encontrar soluciones como modo de
                                vida. Vengo del mundo creativo (guionista de
                                ficción, radio y publicidad) y he encontrado en
                                la programación un sector donde combinar mis
                                habilidades tanto lógicas como creativas.
                                Deseando aportar, ayudar y aprender.
                            </p>

                            <h3>Mis habilidades incluyen:</h3>

                            <div className="skills-container">
                                <div className="skills-category">
                                    <h4>Frontend</h4>
                                    <ul className="skills-list">
                                        <li>
                                            <img
                                                src="/upload/HTML5.png"
                                                alt="HTML"
                                                className="skill-icon"
                                            />{" "}
                                            HTML
                                        </li>
                                        <li>
                                            <img
                                                src="/upload/css.webp"
                                                alt="CSS"
                                                className="skill-icon"
                                            />{" "}
                                            CSS
                                        </li>
                                        <li>
                                            <img
                                                src="/upload/js.png"
                                                alt="JavaScript"
                                                className="skill-icon"
                                            />{" "}
                                            JavaScript
                                        </li>
                                        <li>
                                            <img
                                                src="/upload/react.jpg"
                                                alt="React"
                                                className="skill-icon"
                                            />{" "}
                                            React
                                        </li>
                                        <li>
                                            <img
                                                src="/upload/typescript.png"
                                                alt="TypeScript"
                                                className="skill-icon"
                                            />{" "}
                                            TypeScript
                                        </li>
                                        <li>
                                            <img
                                                src="/upload/figma.png"
                                                alt="Figma"
                                                className="skill-icon"
                                            />{" "}
                                            Figma
                                        </li>
                                    </ul>
                                </div>

                                <div className="skills-category">
                                    <h4>Backend</h4>
                                    <ul className="skills-list">
                                        <li>
                                            <img
                                                src="/upload/node.png"
                                                alt="Node.js"
                                                className="skill-icon"
                                            />{" "}
                                            Node.js
                                        </li>
                                        <li>
                                            <img
                                                src="/upload/node.png"
                                                alt="Express"
                                                className="skill-icon"
                                            />{" "}
                                            Express
                                        </li>
                                        <li>
                                            <img
                                                src="/upload/db.png"
                                                alt="Database"
                                                className="skill-icon"
                                            />{" "}
                                            SQL
                                        </li>
                                    </ul>
                                </div>

                                <div className="skills-category">
                                    <h4>Herramientas</h4>
                                    <ul className="skills-list">
                                        <li>
                                            <img
                                                src="/upload/Git.png"
                                                alt="Git"
                                                className="skill-icon"
                                            />{" "}
                                            Git
                                        </li>
                                        <li>
                                            <img
                                                src="/upload/gith.png"
                                                alt="GitHub"
                                                className="skill-icon"
                                            />{" "}
                                            GitHub
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sección Proyectos */}
            <section className="projects-section" id="proyectos">
                <h2>Mis Proyectos</h2>
                <p className="section-description">
                    Aquí hay una selección de proyectos en los que he trabajado.
                    Cada proyecto refleja mi pasión por el desarrollo web y mi
                    compromiso con la creación de soluciones digitales de alta
                    calidad.
                </p>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            technologies={project.technologies}
                            link={project.link}
                        />
                    ))}
                </div>
            </section>

            {/* Sección Datos Curiosos */}
            <section className="funfacts-section" id="datos-curiosos">
                <h2>Datos Curiosos</h2>
                <p className="section-description">
                    Algunas cosas interesantes sobre mí que quizás no sepas.
                </p>

                <div className="funfacts-container">
                    <div className="funfact-card">
                        <div className="funfact-icon">🎬</div>
                        <h3>Guionista</h3>
                        <p>
                            Antes de ser desarrollador, trabajé como guionista
                            de ficción, radio y publicidad. Durante un tiempo
                            fui colaborador en el programa 'yu:no te pierdas
                            nada'. Hay muchos paralelismos entre ambos sectores.
                        </p>
                    </div>

                    <div className="funfact-card">
                        <img
                            src="/upload/PYP.jpg"
                            alt="Proletario y Parásito"
                            className="funfact-image"
                        />
                        <h3>Podcaster</h3>
                        <p>
                            Tengo un podcast de Los Simpson en asociación con
                            Spotify llamado "Proletario y Parásito".
                        </p>
                    </div>
                    <div className="funfact-card">
                        <img
                            src="/upload/nlbs.jpg"
                            alt="Stand-up Comedy"
                            className="funfact-image"
                        />
                        <h3>Cómico</h3>
                        <p>
                            Soy cómico de stand-up comedy. Me encanta hacer reír
                            a la gente y compartir historias desde el escenario.
                        </p>
                    </div>

                    <div className="funfact-card">
                        <div className="funfact-icon">🎨</div>
                        <h3>Creativo</h3>
                        <p>
                            He enseñado técnicas creativas para aplicarlas en la
                            creacion de textos cómicos.
                        </p>
                    </div>

                    <div className="funfact-card">
                        <div className="funfact-icon">🤝</div>
                        <h3>Colaborador</h3>
                        <p>
                            Disfruto trabajando en equipo y compartiendo
                            conocimientos. Creo que la colaboración es clave
                            para crear proyectos exitosos.
                        </p>
                    </div>
                </div>
            </section>

            {/* Sección Contacto */}
            <section className="contact-section" id="contacto">
                <h2>Contacto</h2>
                <p className="section-description">
                    ¿Tienes alguna pregunta o quieres colaborar en un proyecto?
                    ¡No dudes en contactarme!
                </p>

                <div className="contact-container simplified">
                    <div className="contact-card">
                        <h3>Email</h3>
                        <a
                            href="mailto:albertomgraupera@gmail.com"
                            className="contact-link"
                        >
                            albertomgraupera@gmail.com
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
