function ProjectCard({
  id,
  title,
  category,
  status,
  description,
  technologies,
  showDescription,
  onStatusToggle,
}) {
  return (
    <article className="project-card">
      <div className="project-card-header">
        <span className="project-category">{category}</span>
        <span className={`status-badge status-${status.toLowerCase().replace(" ", "-")}`}>
          {status}
        </span>
      </div>

      <h3>{title}</h3>

      {showDescription && (
        <p className="project-description">{description}</p>
      )}

      <div className="technology-list" aria-label={`Technologies used for ${title}`}>
        {technologies.map((technology) => (
          <span className="technology-tag" key={technology}>
            {technology}
          </span>
        ))}
      </div>

      <button
        className="status-button"
        type="button"
        onClick={() => onStatusToggle(id)}
      >
        Mark as {status === "Completed" ? "In Progress" : "Completed"}
      </button>
    </article>
  );
}

export default ProjectCard;
