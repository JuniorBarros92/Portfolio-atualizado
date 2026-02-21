import projects from "../data/project"

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projetos</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <a
              className="project-card"
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.image && (
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
              )}

              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}