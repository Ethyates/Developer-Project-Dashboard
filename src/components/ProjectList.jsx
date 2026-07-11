import ProjectCard from "./ProjectCard.jsx";

function ProjectList({ projects }) {
  return (
    <section className="projects-section" aria-labelledby="projects-heading">
      <div className="section-heading">
        <p className="section-label">Portfolio</p>
        <h2 id="projects-heading">Development Projects</h2>
        <p className="section-description">
          Each project card is created with the same reusable React component
          and receives different information through props.
        </p>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            category={project.category}
            status={project.status}
            description={project.description}
            technologies={project.technologies}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectList;
