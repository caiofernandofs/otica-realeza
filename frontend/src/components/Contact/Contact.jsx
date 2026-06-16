import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

import { api } from "../../services/api";

import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  const [errors, setErrors] = useState({});

  async function handleSubmit(e) {
    e.preventDefault();

    setErrors({});

    try {
      await api.post("/contacts", {
        name,
        email,
        phone,
        message,
      });

      alert(
        "Mensagem enviada com sucesso ✅\nEntraremos em contato em breve."
      );

      setName("");
      setEmail("");
      setPhone("");
      setMessage("");

    } catch (error) {

      console.log(error.response?.data);
      console.log(error);

      if (error.response?.data?.errors) {

        const validationErrors = {};

        error.response.data.errors.forEach((err) => {
          validationErrors[err.field] = err.message;
        });

        setErrors(validationErrors);

        return;
      }
      if (error.response?.data?.error) {

        setErrors({
          email: error.response.data.error,
        });

        return;
      }

      alert("Erro ao enviar mensagem ❌");
    }
  }

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

          <form
            className="contact-form"
            onSubmit={handleSubmit}
            noValidate
          >

            <input
              type="text"
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={errors.name ? "error" : ""}
            />

            {errors.name && (
              <span className="error-message">
                {errors.name}
              </span>
            )}

            <input
              type="tel"
              placeholder="Seu telefone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={errors.phone ? "error" : ""}
            />

            {errors.phone && (
              <span className="error-message">
                {errors.phone}
              </span>
            )}

            <input
              type="email"
              placeholder="Seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={errors.email ? "error" : ""}
            />

            {errors.email && (
              <span className="error-message">
                {errors.email}
              </span>
            )}

            <textarea
              rows="5"
              placeholder="Digite sua mensagem"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={errors.message ? "error" : ""}
            />

            {errors.message && (
              <span className="error-message">
                {errors.message}
              </span>
            )}

            <button
              type="submit"
              className="btn-gold"
            >
              Enviar Mensagem
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;