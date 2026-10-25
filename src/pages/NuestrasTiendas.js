const tiendas = [
  {
    nombre: 'Tienda Centro',
    direccion: 'Av. Libertador Bernardo O\'Higgins 1234',
    ciudad: 'Santiago',
    horario: 'Lunes a domingo: 08:30 - 21:30',
  },
  {
    nombre: 'Tienda Ñuñoa',
    direccion: 'Av. Irarrázaval 4567',
    ciudad: 'Ñuñoa, Santiago',
    horario: 'Lunes a domingo: 09:00 - 21:00',
  },
  {
    nombre: 'Tienda Viña del Mar',
    direccion: 'Calle Valparaíso 890',
    ciudad: 'Viña del Mar',
    horario: 'Lunes a sábado: 09:00 - 20:30',
  },
  {
    nombre: 'Tienda Concepción',
    direccion: 'Av. Paicaví 321',
    ciudad: 'Concepción',
    horario: 'Lunes a sábado: 09:00 - 20:00',
  },
];

function NuestrasTiendas() {
  return (
    <section className="page">
      <h2>Nuestras tiendas</h2>
      <p>Encuentra tu tienda Supermercado Felipe más cercana:</p>
      <div className="info-cards">
        {tiendas.map((tienda) => (
          <div className="info-card" key={tienda.nombre}>
            <h3>{tienda.nombre}</h3>
            <p>
              <strong>Dirección:</strong> {tienda.direccion}
              <br />
              <strong>Ciudad:</strong> {tienda.ciudad}
              <br />
              <strong>Horario:</strong> {tienda.horario}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NuestrasTiendas;
