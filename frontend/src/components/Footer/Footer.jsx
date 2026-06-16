import {
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt
} from "react-icons/fa";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-grid">

        <div className="footer-brand">

          <span>ÓTICA</span>

          <h2>REALEZA</h2>

          <p>
            Elegância, tecnologia e cuidado visual
            para quem busca excelência.
          </p>

        </div>

        <div>

          <h4>Navegação</h4>

          <ul>
            <li><a href="#home">Início</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#colecoes">Coleções</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>

        </div>

        <div>

          <h4>Contato</h4>

          <ul>
            <li>
              <FaPhoneAlt />
              (19) 99999-9999
            </li>

            <li>
              <FaMapMarkerAlt />
              Campinas - SP
            </li>
          </ul>

        </div>

        <div>

          <h4>Redes Sociais</h4>

          <div className="social-icons">

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <a
                href="https://wa.me/5519999999999?text=Olá! Gostaria de agendar um atendimento."
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp />
              </a>

            </a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Ótica Realeza.
          Todos os direitos reservados.
        </p>

      </div>

    </footer>
  );
}

export default Footer;