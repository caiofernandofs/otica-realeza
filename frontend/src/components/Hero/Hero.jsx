import { motion } from "framer-motion";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="container hero-container">

        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <span className="hero-tag">
            ÓTICA PREMIUM • CAMPINAS
          </span>

          <h1>
            A nobreza de enxergar
            cada detalhe.
          </h1>

          <p>
            Armações sofisticadas, lentes premium
            e atendimento personalizado para quem
            valoriza estilo e qualidade.
          </p>

          <div className="hero-buttons">

            <button className="btn-whatsapp">
              <a
                href="https://wa.me/5519999999999?text=Olá! Gostaria de agendar um atendimento."
                target="_blank"
                rel="noreferrer"
              >
                Falar no WhatsApp
              </a>
            </button>
          </div>

        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <img
            src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=1200"
            alt="Óculos Premium"
          />

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;