import {
  FaGlasses,
  FaEye,
  FaShieldAlt,
  FaGem,
  FaUserTie,
} from "react-icons/fa";

import "./Features.css";

function Features() {
  const features = [
    {
      icon: <FaGlasses />,
      title: "Armações Exclusivas",
      description: "Modelos modernos e sofisticados para todos os estilos.",
    },
    {
      icon: <FaGem />,
      title: "Lentes Premium",
      description: "Mais nitidez, conforto visual e proteção para seus olhos.",
    },
    {
      icon: <FaUserTie />,
      title: "Atendimento Personalizado",
      description: "Consultoria especializada para encontrar a melhor opção.",
    },
    {
      icon: <FaEye />,
      title: "Exame de Vista",
      description: "Avaliação completa realizada por profissionais.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Garantia dos Produtos",
      description: "Segurança e confiança em todas as compras.",
    },
  ];

  return (
    <section className="features">
      <div className="container">

        <span className="section-tag">
          DIFERENCIAIS
        </span>

        <h2>Nossos Diferenciais</h2>

        <div className="features-grid">
          {features.map((item, index) => (
            <div key={index} className="feature-card">

              <div className="feature-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Features;