import ProjectCard from "../components/ProjectCard";

function Projects() {
    // Datos de ejemplo para los proyectos
    const projects = [
        {
            id: 1,
            title: "InnovaSpace",
            description:
                "Un proyecto full-stack CRUD de una empresa de coworking social.Donde los usuarios pueden reservar, puntuar y opiniar las oficinas.",
            image: "/upload/INNO.png",
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
            image: "/upload/MILENIAL.png",
            technologies: ["JavaScript", "CSS", "HTML"],
            link: "https://albertomartinezdelacasa.github.io/milenialgame/",
        },
        {
            id: 3,
            title: "Pokedex",
            description:
                "Un clasico de entre los clasicos. Llamada a una api y un buscador para encontrar a tu pokemon favorito. El primer proyecto. Ay, se me ha metido algo en el ojo.",
            image: "/upload/pokedex.png",
            technologies: ["React", "GraphQL", "Styled Components"],
            link: "https://aperezbanks.github.io/Visualizador_Pokemon01/",
        },
    ];

    return (
        <section className="projects-section">
            <h1>Mis Proyectos</h1>
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
    );
}

export default Projects;
