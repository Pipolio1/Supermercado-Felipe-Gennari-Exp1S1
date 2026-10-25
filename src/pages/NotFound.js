import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className="page">
      <h2>Página no encontrada</h2>
      <p>La ruta que buscas no existe en Supermercado Felipe.</p>
      <p>
        <Link to="/">Volver al inventario</Link>
      </p>
    </section>
  );
}

export default NotFound;
