function ProjectCard({
  title,
  category,
  status,
  description,
  technologies,
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
      <p className="project-description">{description}</p>

      <div className="technology-list" aria-label={`Technologies used for ${title}`}>
        {technologies.map((technology) => (
          <span className="technology-tag" key={technology}>
            {technology}
          </span>
        ))}
      </div>
    </article>
  );
}

export default ProjectCard;
