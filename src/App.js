import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importamos el menú de navegación
import Navbar from './components/Navbar';

// Importamos las páginas REALES con el contenido del cliente
import SobreNosotros from './components/SobreNosotros';
import Servicios from './components/Servicios';
import Cursos from './components/Cursos';

// --- Página de Inicio (Home) ---
// Esta es la portada nueva. Ya no dice "En construcción", sino que da la bienvenida.
const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '80px 20px', maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{fontSize: '3rem', marginBottom: '20px', color: '#4A7C59'}}>Bienvenido a CellMedicals</h1>
      <p style={{fontSize: '1.3rem', color: '#586776', lineHeight: '1.8', marginBottom: '40px'}}>
        Restauramos el equilibrio natural del cuerpo combinando sabiduría ancestral y medicina moderna para devolverle su energía vital.
      </p>
      
      {/* Botones de acción rápida */}
      <div style={{display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap'}}>
        <a href="/servicios" className="btn-main">Conoce nuestras Terapias</a>
        <a href="/cursos" className="btn-main" style={{backgroundColor: '#D4A373'}}>Formación y Cursos</a>
      </div>
    </div>
  );
};

// --- Página de Contacto Simple ---
const Contacto = () => (
    <div className="page-container" style={{textAlign: 'center'}}>
        <h2>Contacto</h2>
        <p>Estamos listos para acompañarte en tu proceso de sanación.</p>
        <p style={{marginTop: '20px', fontSize: '1.2rem'}}>
            Escríbenos a: <br/>
            <a href="mailto:contacto@cellmedicals.com" style={{color: '#4A7C59', fontWeight: 'bold', textDecoration: 'none'}}>
                contacto@cellmedicals.com
            </a>
        </p>
    </div>
);

// --- La App Principal ---
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Aquí definimos las rutas usando los archivos nuevos */}
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<SobreNosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
}

export default App;