import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importamos el menú de navegación
import Navbar from './components/Navbar';

// Importamos las páginas REALES con el contenido del cliente
import SobreNosotros from './components/SobreNosotros';
import Servicios from './components/Servicios';
import Cursos from './components/Cursos';

// --- Página de Inicio (Home) ---
const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '40px 20px', maxWidth: '1000px', margin: '0 auto' }}>
      
      {/* --- IMAGEN HERO HOME --- */}
      <img 
        src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=1200" 
        alt="Naturaleza y Bienestar" 
        style={{
          width: '100%',
          height: '350px', // Altura ideal para una portada
          objectFit: 'cover', // Asegura que la foto no se estire ni deforme
          borderRadius: '20px', // Bordes redondeados elegantes
          boxShadow: '0 15px 30px rgba(74, 124, 89, 0.15)', // Sombra verde muy suave
          marginBottom: '40px'
        }}
      />

      <h1 style={{fontSize: '3rem', marginBottom: '20px', color: '#4A7C59', fontFamily: '"Playfair Display", serif'}}>
        Bienvenido a CellMedicals
      </h1>
      
      <p style={{fontSize: '1.3rem', color: '#586776', lineHeight: '1.8', marginBottom: '40px', maxWidth: '800px', margin: '0 auto 40px auto'}}>
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

// --- Página de Contacto MEJORADA ---
const Contacto = () => (
    <div className="page-container" style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto'}}>
        <h2>Contacto</h2>
        
        {/* --- NUEVA IMAGEN DE CABECERA CONTACTO --- */}
        <div style={{
            marginBottom: '30px', 
            borderRadius: '15px', 
            overflow: 'hidden', // Para que la imagen respete las esquinas redondeadas
            boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
        }}>
            <img 
                src="https://images.unsplash.com/photo-1488998427799-e3362cec87c3?q=80&w=1170&auto=format&fit=crop"
                alt="Agenda y planificación"
                style={{
                    width: '100%',
                    height: '300px',
                    objectFit: 'cover',
                    display: 'block' // Soluciona la barra blanca inferior
                }}
            />
        </div>

        {/* --- Tarjeta de Información de Contacto --- */}
        <div style={{
            backgroundColor: 'white', 
            padding: '50px 30px', 
            borderRadius: '15px', 
            border: '1px solid #E9F1EA' // Un borde sutil con el color secundario
        }}>
            <p style={{fontSize: '1.3rem', marginBottom: '30px', color: '#586776', lineHeight: '1.6'}}>
                Estamos listos para acompañarte en tu proceso de sanación y responder todas tus dudas para encontrar el mejor camino para ti.
            </p>
            
            {/* Separador visual */}
            <hr style={{border: '0', borderTop: '1px solid #eee', margin: '30px auto', maxWidth: '60%'}} />
            
            <p style={{fontSize: '1.1rem', color: '#586776', marginBottom: '15px'}}>
                Escríbenos directamente para agendar tu cita:
            </p>
            
            {/* Enlace de correo destacado con efecto hover */}
            <p style={{marginTop: '10px', fontSize: '1.5rem'}}>
                <a href="mailto:contacto@cellmedicals.com" 
                   style={{
                       color: '#4A7C59', 
                       fontWeight: 'bold', 
                       textDecoration: 'none',
                       display: 'inline-flex', // CORREGIDO: Usamos solo inline-flex para centrar contenido
                       alignItems: 'center', 
                       justifyContent: 'center', 
                       gap: '10px',
                       transition: 'transform 0.2s'
                   }}
                   onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                   onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                    <span style={{fontSize: '2rem'}}>✉️</span> contacto@cellmedicals.com
                </a>
            </p>
        </div>
    </div>
);

// --- La App Principal ---
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
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