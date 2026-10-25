import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import QuienesSomos from './pages/QuienesSomos';
import NuestrasTiendas from './pages/NuestrasTiendas';
import Contactanos from './pages/Contactanos';
import ComoComprar from './pages/ComoComprar';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Supermercado Felipe</h1>
          <p>Sistema de gestión de inventario</p>
        </header>
        <main className="App-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/nuestras-tiendas" element={<NuestrasTiendas />} />
            <Route path="/contactanos" element={<Contactanos />} />
            <Route path="/como-comprar" element={<ComoComprar />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
