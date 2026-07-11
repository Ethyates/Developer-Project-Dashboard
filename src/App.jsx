import Header from "./components/Header.jsx";
import DashboardSummary from "./components/DashboardSummary.jsx";
import ProjectList from "./components/ProjectList.jsx";
import Footer from "./components/Footer.jsx";
import projects from "./data/projects.js";

function App() {
  const completedProjects = projects.filter(
    (project) => project.status === "Completed"
  ).length;

  const technologies = [
    ...new Set(projects.flatMap((project) => project.technologies)),
  ];

  return (
    <div className="app-shell">
      <Header
        title="Developer Project Dashboard"
        subtitle="A collection of development projects built through coursework and practice."
      />

      <main className="dashboard-content">
        <DashboardSummary
          totalProjects={projects.length}
          completedProjects={completedProjects}
          technologyCount={technologies.length}
        />

        <ProjectList projects={projects} />
      </main>

      <Footer course="ITT-072" />
    </div>
  );
}

export default App;
