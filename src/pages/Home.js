import { useState } from 'react';
import initialProducts from '../data/products';

const STOCK_BAJO = 5;

function formatPrecio(precio) {
  return '$' + precio.toLocaleString('es-CL');
}

function Home() {
  const [products, setProducts] = useState(initialProducts);

  const cambiarStock = (id, delta) => {
    setProducts(
      products.map((producto) =>
        producto.id === id
          ? { ...producto, stock: Math.max(0, producto.stock + delta) }
          : producto
      )
    );
  };

  const totalProductos = products.length;
  const unidadesTotales = products.reduce((suma, p) => suma + p.stock, 0);
  const conStockBajo = products.filter((p) => p.stock < STOCK_BAJO).length;

  return (
    <section className="page">
      <h2>Gestión de inventario</h2>
      <p>Administra el stock de los productos del supermercado.</p>

      <div className="stats">
        <div className="stat-card">
          <span className="stat-number">{totalProductos}</span>
          <span className="stat-label">Productos</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">{unidadesTotales}</span>
          <span className="stat-label">Unidades totales</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">{conStockBajo}</span>
          <span className="stat-label">Con stock bajo</span>
        </div>
      </div>

      <table className="inventory-table">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((producto) => (
            <tr key={producto.id} className={producto.stock < STOCK_BAJO ? 'low-stock' : ''}>
              <td>{producto.nombre}</td>
              <td>{producto.categoria}</td>
              <td>{formatPrecio(producto.precio)}</td>
              <td>
                {producto.stock}
                {producto.stock < STOCK_BAJO && <span className="badge">Stock bajo</span>}
              </td>
              <td>
                <button onClick={() => cambiarStock(producto.id, -1)} disabled={producto.stock === 0}>
                  −
                </button>
                <button onClick={() => cambiarStock(producto.id, 1)}>+</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Home;
