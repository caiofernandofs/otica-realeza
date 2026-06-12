import { motion } from "framer-motion";
import "./Brands.css";

const brands = [
  "RAY-BAN",
  "OAKLEY",
  "PRADA",
  "VOGUE",
  "PERSOL",
  "ARMANI",
];

function Brands() {
  return (
    <section className="brands-section">

      <div className="container">

        <div className="brands-header">
          <span>MARCAS EXCLUSIVAS</span>

          <h2>
            Trabalhamos com as melhores marcas do mercado
          </h2>

          <p>
            Qualidade, tecnologia e design reconhecidos mundialmente.
          </p>
        </div>

        <div className="brands-grid">

          {brands.map((brand, index) => (
            <motion.div
              key={index}
              className="brand-box"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <span>{brand}</span>
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Brands;