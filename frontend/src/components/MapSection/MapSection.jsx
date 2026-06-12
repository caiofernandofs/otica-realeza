import "./MapSection.css";

function MapSection() {
  return (
    <section className="map-section">

      <div className="map-header">
        <span>LOCALIZAÇÃO</span>

        <h2>Venha nos visitar</h2>

        <p>
          Estamos prontos para oferecer o melhor atendimento para sua visão.
        </p>
      </div>

      <iframe
        title="Ótica Realeza"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.7594775076063!2d-47.09988512468902!3d-22.930182779238653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c9fdf69fcfe9%3A0x4f3d342e1ae02aee!2zw5N0aWNhcyDDgWd1aWEgUmVhbA!5e1!3m2!1spt-BR!2sbr!4v1781269312537!5m2!1spt-BR!2sbr"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>

    </section>
  );
}

export default MapSection;