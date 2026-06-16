import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container navbar">

        <div className="logo">
          <span>ÓTICA</span>
          <h2>REALEZA</h2>
        </div>

        <nav className={menuOpen ? "nav active" : "nav"}>
          <a href="#home">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#colecoes">Coleções</a>
          <a href="#contato">Contato</a>
        </nav>

        <button className="cta-button">
          <a
            href="https://wa.me/5519999999999?text=Olá! Gostaria de agendar uma consulta."
            target="_blank"
            rel="noreferrer"
          >
            Agendar Consulta
          </a>        </button>

        <button
          className="mobile-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>
    </header>
  );
}

export default Header;