import React from 'react';
import { db } from '../firebaseConfig'; // Importamos la base de datos
import { collection, addDoc } from 'firebase/firestore'; 

const FloatingButtons = () => {
  // --- TUS DATOS ---
  const whatsappNumber = "56912345678"; 
  const instagramUser = "cellmedicals"; 
  const mensajeDefault = "Hola, me gustaría más información sobre las terapias.";

  // Enlaces generados
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensajeDefault)}`;
  const instagramUrl = `https://www.instagram.com/${instagramUser}/`;

  // Estilos base del botón circular
  const btnStyle = {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
    marginBottom: '15px', 
    cursor: 'pointer',
    color: 'white', // Asegura que el relleno de los SVG sea blanco
    textDecoration: 'none',
    transition: 'transform 0.3s ease'
  };

  // --- Estilo para centrar perfectamente los iconos ---
  const svgStyle = {
    width: '55%', // Ocupará el 55% del botón
    height: '55%',
    pointerEvents: 'none'
  };

  // --- FUNCIÓN PARA REGISTRAR EL CLICK (CON SEGURIDAD) ---
  const registrarClick = async (redSocial) => {
    // Validación de seguridad: Si la DB no cargó por bloqueadores, no hacemos nada
    if (!db) {
        console.warn("Firebase no está listo, pero el botón funciona igual.");
        return;
    }

    try {
      await addDoc(collection(db, "comisiones_clicks"), {
        tipo: redSocial, 
        fecha: new Date(), 
        pantalla: window.innerWidth < 768 ? 'movil' : 'pc'
      });
      console.log("Click registrado en base de datos: ", redSocial);
    } catch (e) {
      // Si falla, solo lo mostramos en consola
      console.error("Error al registrar click: ", e);
    }
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      zIndex: 2147483647, /* Z-Index máximo para asegurar visibilidad */
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      
      {/* --- BOTÓN INSTAGRAM (ICONO CORREGIDO) --- */}
      <a 
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => registrarClick('instagram')}
        style={{
          ...btnStyle,
          background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)'
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="currentColor"
          style={svgStyle}
        >
          {/* Este path dibuja la cámara de Instagram de forma limpia */}
          <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M19,5A1,1 0 0,1 20,6A1,1 0 0,1 19,7A1,1 0 0,1 18,6A1,1 0 0,1 19,5Z" />
        </svg>
      </a>

      {/* --- BOTÓN WHATSAPP --- */}
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => registrarClick('whatsapp_flotante')}
        style={{
          ...btnStyle,
          backgroundColor: '#25D366',
          marginBottom: 0 
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor"
            style={svgStyle}
        >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>

    </div>
  );
};

export default FloatingButtons;