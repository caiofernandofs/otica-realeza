import "./LuxuryBanner.css";

function LuxuryBanner() {
  return (
    <section className="luxury-banner">

      <div className="container">

        <h2>
          Sua visão merece o melhor.
        </h2>

        <p>
          Descubra armações exclusivas e lentes de alta performance.
        </p>

        <button >
          <a
            href="https://wa.me/5519999999999?text=Olá! Gostaria de agendar um atendimento."
            target="_blank"
            rel="noreferrer"
          >
            Agendar Atendimento
          </a>
        </button>

      </div>

    </section>
  );
}

export default LuxuryBanner;