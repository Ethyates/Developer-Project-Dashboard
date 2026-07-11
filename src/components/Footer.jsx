function Footer({ course, projectType }) {
  return (
    <footer className="site-footer">
      <p>Developer Project Dashboard</p>
      <p>{course} &middot; {projectType}</p>
    </footer>
  );
}

export default Footer;
