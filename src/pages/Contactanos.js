import { useState } from 'react';

function Contactanos() {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <section className="page">
      <h2>Contáctanos</h2>
      <p>¿Tienes dudas, sugerencias o reclamos? Escríbenos y te responderemos a la brevedad.</p>

      <div className="contact-data">
        <p><strong>Teléfono:</strong> +56 2 2345 6789</p>
        <p><strong>Correo:</strong> contacto@supermercadofelipe.cl</p>
        <p><strong>Horario de atención:</strong> Lunes a viernes, 09:00 - 18:00</p>
      </div>

      {enviado ? (
        <p className="success-message">
          ¡Gracias por escribirnos! Tu mensaje fue enviado correctamente.
        </p>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="nombre">Nombre</label>
          <input id="nombre" name="nombre" type="text" required />

          <label htmlFor="correo">Correo electrónico</label>
          <input id="correo" name="correo" type="email" required />

          <label htmlFor="mensaje">Mensaje</label>
          <textarea id="mensaje" name="mensaje" rows="5" required />

          <button type="submit">Enviar mensaje</button>
        </form>
      )}
    </section>
  );
}

export default Contactanos;
