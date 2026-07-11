import { useMemo, useState } from "react";
import Header from "./components/Header.jsx";
import DashboardSummary from "./components/DashboardSummary.jsx";
import DashboardControls from "./components/DashboardControls.jsx";
import ProjectList from "./components/ProjectList.jsx";
import Footer from "./components/Footer.jsx";
import initialProjects from "./data/projects.js";

function App() {
  const [projects, setProjects] = useState(initialProjects);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showDescriptions, setShowDescriptions] = useState(true);

  const categories = useMemo(
    () => ["All", ...new Set(projects.map((project) => project.category))],
    [projects]
  );

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const completedProjects = projects.filter(
    (project) => project.status === "Completed"
  ).length;

  const technologies = [
    ...new Set(projects.flatMap((project) => project.technologies)),
  ];

  function handleStatusToggle(projectId) {
    setProjects((currentProjects) =>
      currentProjects.map((project) =>
        project.id === projectId
          ? {
              ...project,
              status:
                project.status === "Completed" ? "In Progress" : "Completed",
            }
          : project
      )
    );
  }

  function handleReset() {
    setProjects(initialProjects);
    setSearchTerm("");
    setSelectedCategory("All");
    setShowDescriptions(true);
  }

  return (
    <div className="app-shell">
      <Header
        eyebrow="React Project 4"
        title="Developer Project Dashboard"
        subtitle="Search, filter, and update development projects using React state and events."
      />

      <main className="dashboard-content">
        <DashboardSummary
          totalProjects={projects.length}
          completedProjects={completedProjects}
          technologyCount={technologies.length}
        />

        <DashboardControls
          searchTerm={searchTerm}
          selectedCategory={selectedCategory}
          categories={categories}
          showDescriptions={showDescriptions}
          onSearchChange={setSearchTerm}
          onCategoryChange={setSelectedCategory}
          onToggleDescriptions={() => setShowDescriptions((current) => !current)}
          onReset={handleReset}
        />

        <ProjectList
          projects={filteredProjects}
          showDescriptions={showDescriptions}
          onStatusToggle={handleStatusToggle}
        />
      </main>

      <Footer course="ITT-072" projectType="Interactive React Dashboard" />
    </div>
  );
}

export default App;
