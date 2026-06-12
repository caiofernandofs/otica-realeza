import { motion } from "framer-motion";
import "./Collections.css";

const collections = [
  {
    title: "Linha Masculina",
    subtitle: "Sofisticação e personalidade",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=1200",
  },
  {
    title: "Linha Feminina",
    subtitle: "Elegância para cada momento",
    image:
      "https://images.unsplash.com/photo-1577803645773-f96470509666?w=1200",
  },
{
  title: "Óculos de Sol",
  subtitle: "Proteção e estilo",
  image:
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=1200",
},
];

function Collections() {
  return (
    <section className="premium-collections" id="colecoes">
      <div className="container">

        <div className="section-header">
          <span>COLEÇÕES</span>

          <h2>
            Descubra nossa seleção exclusiva
          </h2>

          <p>
            Modelos escolhidos para oferecer conforto,
            elegância e máxima qualidade visual.
          </p>
        </div>

        <div className="premium-grid">
          {collections.map((item, index) => (
            <motion.div
              key={index}
              className="premium-card"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src={item.image}
                alt={item.title}
              />

              <div className="premium-overlay">
                <h3>{item.title}</h3>

                <p>{item.subtitle}</p>

                <button>
                  Explorar Coleção
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Collections;