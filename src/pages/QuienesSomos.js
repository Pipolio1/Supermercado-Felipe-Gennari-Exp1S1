function QuienesSomos() {
  return (
    <section className="page">
      <h2>Quiénes somos</h2>
      <p>
        Somos <strong>Supermercado Felipe</strong>, un supermercado familiar chileno con más de 20 años
        de trayectoria, comprometido con entregar productos frescos y de calidad a precios justos.
      </p>
      <div className="info-cards">
        <div className="info-card">
          <h3>Misión</h3>
          <p>
            Acercar a cada familia productos de primera necesidad con la mejor relación
            precio-calidad, brindando una atención cercana y un servicio de excelencia.
          </p>
        </div>
        <div className="info-card">
          <h3>Visión</h3>
          <p>
            Ser el supermercado de referencia en cada comunidad donde operamos, reconocidos por
            nuestra frescura, variedad y compromiso con el cliente.
          </p>
        </div>
        <div className="info-card">
          <h3>Valores</h3>
          <p>
            Honestidad, cercanía, respeto por nuestros clientes y colaboradores, y compromiso con
            el desarrollo de las comunidades locales.
          </p>
        </div>
      </div>
    </section>
  );
}

export default QuienesSomos;
