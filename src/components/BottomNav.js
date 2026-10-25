import { NavLink } from 'react-router-dom';

function BottomNav() {
  return (
    <nav className="bottom-nav">
      <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
        Inventario
      </NavLink>
      <NavLink to="/quienes-somos" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
        Quiénes somos
      </NavLink>
      <NavLink to="/nuestras-tiendas" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
        Nuestras tiendas
      </NavLink>
      <NavLink to="/contactanos" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
        Contáctanos
      </NavLink>
      <NavLink to="/como-comprar" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
        Cómo comprar
      </NavLink>
    </nav>
  );
}

export default BottomNav;
