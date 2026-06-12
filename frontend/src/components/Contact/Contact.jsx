import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";

import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contato">

      <div className="container">

        <span className="section-tag">
          CONTATO
        </span>

        <h2>Entre em Contato</h2>

        <div className="contact-grid">

          <div className="contact-info">

            <div className="info-card">
              <FaMapMarkerAlt />
              <div>
                <h3>Endereço</h3>
                <p>Campinas - SP</p>
              </div>
            </div>

            <div className="info-card">
              <FaPhoneAlt />
              <div>
                <h3>Telefone</h3>
                <p>(19) 99999-9999</p>
              </div>
            </div>

            <div className="info-card">
              <FaEnvelope />
              <div>
                <h3>E-mail</h3>
                <p>contato@oticarealeza.com.br</p>
              </div>
            </div>

          </div>

          <form className="contact-form">

            <input
              type="text"
              placeholder="Seu nome"
            />

            <input
              type="email"
              placeholder="Seu e-mail"
            />

            <textarea
              rows="5"
              placeholder="Digite sua mensagem"
            />

            <button className="btn-gold">
              Enviar Mensagem
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;