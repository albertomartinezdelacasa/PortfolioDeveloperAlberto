function ProjectCard({ title, description, image, technologies, link }) {
    return (
        <div className="project-card">
            <img src={image} alt={title} className="project-image" />
            <div className="project-info">
                <h3 className="project-title">{title}</h3>
                <p className="project-description">{description}</p>
                <div className="project-technologies">
                    {technologies.map((tech, index) => (
                        <span key={index} className="technology-tag">
                            {tech}
                        </span>
                    ))}
                </div>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                >
                    Ver proyecto
                </a>
            </div>
        </div>
    );
}

export default ProjectCard;
