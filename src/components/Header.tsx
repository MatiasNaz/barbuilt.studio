import './Header.css';

function Header() {
  return (
    <header className="site-header container">
      <a className="brand" href="#main">BarBuilt Studio</a>
      <nav aria-label="navbar-container">
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#work">Work</a></li>
          <li><a className="button" href="#contact">Book a consultation</a></li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;