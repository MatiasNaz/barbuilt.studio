import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer container">
      <p>© {new Date().getFullYear()} BarBuilt Studio</p>
      <a href="#main">Back to top</a>
    </footer>
  );
}

export default Footer;
