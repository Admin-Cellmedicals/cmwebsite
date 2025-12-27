import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { db } from './firebaseConfig'; // Importamos la DB
import { collection, addDoc } from 'firebase/firestore';

// Importamos componentes
import Navbar from './components/Navbar';
import FloatingButtons from './components/FloatingButtons';
import SobreNosotros from './components/SobreNosotros';
import Servicios from './components/Servicios';
import Cursos from './components/Cursos';

// --- Función Auxiliar para Registrar Clicks ---
const registrarLead = async (tipo) => {
  try {
    await addDoc(collection(db, "comisiones_clicks"), {
      tipo: tipo, // ej: 'email_contacto'
      fecha: new Date(),
      pantalla: window.innerWidth < 768 ? 'movil' : 'pc'
    });
    console.log("Lead registrado: ", tipo);
  } catch (e) {
    console.error("Error registrando lead: ", e);
  }
};

// --- Página de Inicio (Home) ---
const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '40px 20px', maxWidth: '1000px', margin: '0 auto' }}>
      
      {/* Imagen Hero */}
      <img 
        src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=1200" 
        alt="Naturaleza y Bienestar" 
        style={{
          width: '100%',
          height: '350px', 
          objectFit: 'cover', 
          borderRadius: '20px', 
          boxShadow: '0 15px 30px rgba(74, 124, 89, 0.15)', 
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
        
        {/* Imagen Cabecera Contacto */}
        <div style={{
            marginBottom: '30px', 
            borderRadius: '15px', 
            overflow: 'hidden', 
            boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
        }}>
            <img 
                src="https://images.unsplash.com/photo-1488998427799-e3362cec87c3?q=80&w=1170&auto=format&fit=crop"
                alt="Agenda y planificación"
                style={{
                    width: '100%',
                    height: '300px',
                    objectFit: 'cover',
                    display: 'block' 
                }}
            />
        </div>

        {/* Tarjeta Información */}
        <div style={{
            backgroundColor: 'white', 
            padding: '50px 30px', 
            borderRadius: '15px', 
            border: '1px solid #E9F1EA' 
        }}>
            <p style={{fontSize: '1.3rem', marginBottom: '30px', color: '#586776', lineHeight: '1.6'}}>
                Estamos listos para acompañarte en tu proceso de sanación y responder todas tus dudas para encontrar el mejor camino para ti.
            </p>
            
            <hr style={{border: '0', borderTop: '1px solid #eee', margin: '30px auto', maxWidth: '60%'}} />
            
            <p style={{fontSize: '1.1rem', color: '#586776', marginBottom: '15px'}}>
                Escríbenos directamente para agendar tu cita:
            </p>
            
            {/* Enlace con Registro de Click */}
            <p style={{marginTop: '10px', fontSize: '1.5rem'}}>
                <a href="mailto:contacto@cellmedicals.com" 
                   onClick={() => registrarLead('email_contacto')} // <-- AQUÍ SE REGISTRA
                   style={{
                       color: '#4A7C59', 
                       fontWeight: 'bold', 
                       textDecoration: 'none',
                       display: 'inline-flex', 
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
      <FloatingButtons />
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