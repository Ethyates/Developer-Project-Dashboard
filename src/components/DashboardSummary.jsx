function DashboardSummary({
  totalProjects,
  completedProjects,
  technologyCount,
}) {
  return (
    <section className="summary-section" aria-labelledby="summary-heading">
      <div className="section-heading">
        <p className="section-label">Overview</p>
        <h2 id="summary-heading">Dashboard Summary</h2>
      </div>

      <div className="summary-grid">
        <article className="summary-card">
          <span className="summary-number">{totalProjects}</span>
          <span className="summary-text">Projects Displayed</span>
        </article>

        <article className="summary-card">
          <span className="summary-number">{completedProjects}</span>
          <span className="summary-text">Projects Completed</span>
        </article>

        <article className="summary-card">
          <span className="summary-number">{technologyCount}</span>
          <span className="summary-text">Technologies Used</span>
        </article>
      </div>
    </section>
  );
}

export default DashboardSummary;
