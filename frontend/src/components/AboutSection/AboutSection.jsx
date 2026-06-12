import { motion } from "framer-motion";
import "./AboutSection.css";

function AboutSection() {
  return (
    <motion.section
      className="about"
      id="sobre"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container about-content">
        <div className="about-text">
          <span>SOBRE NÓS</span>

          <h2>
            Excelência em saúde visual e estilo.
          </h2>

          <p>
            Na Ótica Realeza, acreditamos que enxergar bem é viver melhor.
            Trabalhamos com armações selecionadas, lentes de alta tecnologia
            e atendimento personalizado para proporcionar conforto,
            confiança e sofisticação.
          </p>

          <p>
            Nosso compromisso é oferecer uma experiência única,
            unindo qualidade, inovação e cuidado com cada cliente.
          </p>

          <button className="btn-gold">
            Conheça Nossa História
          </button>
        </div>

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=1200"
            alt="Ótica Realeza"
          />
        </div>
      </div>
    </motion.section>
  );
}

export default AboutSection;