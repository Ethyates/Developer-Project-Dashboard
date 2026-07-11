import ProjectCard from "./ProjectCard.jsx";

function ProjectList({ projects, showDescriptions, onStatusToggle }) {
  return (
    <section className="projects-section" aria-labelledby="projects-heading">
      <div className="section-heading">
        <p className="section-label">Portfolio</p>
        <h2 id="projects-heading">Development Projects</h2>
        <p className="section-description">
          Use the controls above to search, filter, hide details, or update each
          project's status.
        </p>
      </div>

      {projects.length > 0 ? (
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              category={project.category}
              status={project.status}
              description={project.description}
              technologies={project.technologies}
              showDescription={showDescriptions}
              onStatusToggle={onStatusToggle}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h3>No matching projects</h3>
          <p>Change the search term or category filter to display projects.</p>
        </div>
      )}
    </section>
  );
}

export default ProjectList;
