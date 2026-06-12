import "./Testimonials.css";

function Testimonials() {

  const reviews = [
    {
      name: "Maria Silva",
      text: "Excelente atendimento e produtos de altíssima qualidade."
    },
    {
      name: "João Santos",
      text: "Óculos perfeitos e entrega muito rápida."
    },
    {
      name: "Fernanda Costa",
      text: "Melhor ótica da região. Recomendo muito."
    }
  ];

  return (
    <section className="testimonials">

      <div className="container">

        <h2>O que nossos clientes dizem</h2>

        <div className="testimonials-grid">

          {reviews.map((review, index) => (
            <div key={index} className="testimonial-card">

              <div className="stars">
                ★★★★★
              </div>

              <p>{review.text}</p>

              <h4>{review.name}</h4>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;