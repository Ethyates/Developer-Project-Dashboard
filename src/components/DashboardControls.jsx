function DashboardControls({
  searchTerm,
  selectedCategory,
  categories,
  showDescriptions,
  onSearchChange,
  onCategoryChange,
  onToggleDescriptions,
  onReset,
}) {
  return (
    <section className="controls-section" aria-labelledby="controls-heading">
      <div className="section-heading">
        <p className="section-label">Controls</p>
        <h2 id="controls-heading">Find and Manage Projects</h2>
      </div>

      <div className="dashboard-controls">
        <label className="control-field">
          <span>Search by project name</span>
          <input
            type="search"
            value={searchTerm}
            placeholder="Search projects..."
            onChange={(event) => onSearchChange(event.target.value)}
          />
        </label>

        <label className="control-field">
          <span>Filter by category</span>
          <select
            value={selectedCategory}
            onChange={(event) => onCategoryChange(event.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>

        <div className="control-actions">
          <button className="secondary-button" type="button" onClick={onToggleDescriptions}>
            {showDescriptions ? "Hide Descriptions" : "Show Descriptions"}
          </button>
          <button className="secondary-button" type="button" onClick={onReset}>
            Reset Dashboard
          </button>
        </div>
      </div>
    </section>
  );
}

export default DashboardControls;
