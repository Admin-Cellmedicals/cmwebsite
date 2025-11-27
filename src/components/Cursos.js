import React from 'react';

const Cursos = () => {
  // Estilo para los iconos
  const iconStyle = {
    fontSize: '3rem',
    marginBottom: '15px',
    display: 'block'
  };

  // --- CAMBIO: Usamos Flexbox en lugar de Grid ---
  // Flexbox con 'justify-content: center' permite que la última fila
  // (los 3 cursos restantes) queden centrados en lugar de alineados a la izquierda.
  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap', // Permite que los elementos bajen a la siguiente línea
    justifyContent: 'center', // ESTO es lo que centra la última fila
    gap: '20px',
    marginTop: '40px'
  };

  // --- NUEVO: Estilo para cada tarjeta ---
  // Calculamos el ancho para que quepan exactamente 4 (25%) restando el espacio del gap.
  const cardStyle = {
    textAlign: 'center',
    // flex: basis width. 25% es 1/4 del ancho. Restamos 20px para considerar el gap.
    flex: '0 0 calc(25% - 20px)', 
    boxSizing: 'border-box'
  };

  return (
    <div className="page-container">
      <div style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto 50px auto'}}>
        <h2>Cursos y Formación</h2>
        <p>
          En CellMedicals formamos terapeutas y profesionales de la salud natural comprometidos con la transformación, la conciencia y el equilibrio integral del ser humano.
          Nuestros cursos combinan el conocimiento ancestral con la ciencia moderna, ofreciendo una enseñanza profunda, práctica y basada en la experiencia.
        </p>
        <p>
          Cada programa está diseñado para desarrollar habilidades terapéuticas reales y una comprensión holística del cuerpo, la mente y la energía.
        </p>
        <h3>Ofrecemos formación en las siguientes áreas:</h3>
      </div>

      {/* Contenedor Flex */}
      <div className="course-list" style={containerStyle}>
        
        <div className="card" style={cardStyle}>
          <span style={iconStyle}>👁️‍🗨️</span>
          <strong>Iridología</strong>
          <p>Aprende a leer el iris como un mapa biológico que revela el estado de los órganos, emociones y energía vital del cuerpo.</p>
        </div>

        <div className="card" style={cardStyle}>
          <span style={iconStyle}>👂</span>
          <strong>Auriculoterapia</strong>
          <p>Domina el arte de equilibrar los sistemas del organismo a través de los puntos reflejos de la oreja, estimulando la autocuración.</p>
        </div>

        <div className="card" style={cardStyle}>
          <span style={iconStyle}>🔥</span>
          <strong>Moxibustión</strong>
          <p>Conoce esta técnica milenaria de la medicina china basada en el calor terapéutico de la artemisa para fortalecer la energía vital (Qi).</p>
        </div>

        <div className="card" style={cardStyle}>
          <span style={iconStyle}>🍏</span>
          <strong>Trofología</strong>
          <p>Estudia cómo los alimentos correctos pueden regenerar células, equilibrar el pH y mejorar la vitalidad.</p>
        </div>

        <div className="card" style={cardStyle}>
          <span style={iconStyle}>🧲</span>
          <strong>Biomagnetismo</strong>
          <p>Utiliza campos magnéticos para restablecer el equilibrio bioenergético y favorecer la salud celular.</p>
        </div>

        <div className="card" style={cardStyle}>
          <span style={iconStyle}>📡</span>
          <strong>Ondas escalares</strong>
          <p>Explora las terapias de frecuencia y vibración que armonizan los campos electromagnéticos del cuerpo, elevando la energía celular.</p>
        </div>

        <div className="card" style={cardStyle}>
          <span style={iconStyle}>🌸</span>
          <strong>Flores de Bach</strong>
          <p>Descubre el poder terapéutico de las esencias florales para armonizar emociones, liberar bloqueos y restaurar la paz interior.</p>
        </div>

      </div>

      <div style={{backgroundColor: '#4A7C59', color: 'white', padding: '40px', borderRadius: '15px', marginTop: '60px', textAlign: 'center', boxShadow: '0 10px 30px rgba(74, 124, 89, 0.2)'}}>
        <span style={{fontSize: '3rem', display: 'block', marginBottom: '10px'}}>🎓</span>
        <p style={{color: 'white', marginBottom: '15px', fontSize: '1.2rem'}}>
            Nuestros cursos incluyen materiales digitales, certificación, prácticas guiadas y acompañamiento personalizado.
        </p>
        <p style={{color: '#E9F1EA', fontStyle: 'italic', fontWeight: 'bold'}}>
            En CellMedicals, cada formación es una oportunidad para sanar, aprender y despertar la energía interior, creando terapeutas conscientes y preparados para ayudar a otros.
        </p>
      </div>
    </div>
  );
};

export default Cursos;