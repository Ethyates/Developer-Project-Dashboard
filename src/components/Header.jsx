function Header({ title, subtitle }) {
  return (
    <header className="site-header">
      <div className="header-content">
        <p className="eyebrow">React Project 3</p>
        <h1>{title}</h1>
        <p className="header-subtitle">{subtitle}</p>
      </div>
    </header>
  );
}

export default Header;
