import React from 'react';

const Servicios = () => {
  return (
    <div className="page-container">
      <div style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto 50px auto'}}>
        <h2>Lo que hacemos</h2>
        <p>
          En CellMedicals nos dedicamos a restaurar el equilibrio natural del cuerpo a través de terapias integrales que actúan desde la raíz de cada desequilibrio. Combinamos la sabiduría ancestral con la medicina natural moderna para estimular la capacidad de autorregeneración del organismo y devolverle su energía vital.
        </p>
        <p>
          Nuestro enfoque está basado en diferentes disciplinas de la medicina natural y energética, entre ellas:
        </p>
      </div>

      <div className="service-list">
        
        <div className="card">
          <strong>Iridología</strong>
          <p>Analizamos el iris para identificar desequilibrios internos, deficiencias o sobrecargas orgánicas, orientando tratamientos personalizados.</p>
        </div>

        <div className="card">
          <strong>Trofología</strong>
          <p>Enseñamos cómo combinar los alimentos de forma correcta para regenerar células, equilibrar el pH y potenciar la energía vital.</p>
        </div>

        <div className="card">
          <strong>Auriculoterapia</strong>
          <p>Estimulamos puntos reflejos en la oreja para equilibrar órganos, emociones y sistemas corporales, ayudando en el control del dolor, ansiedad y peso corporal.</p>
        </div>

        <div className="card">
          <strong>Terapia quiropráctica</strong>
          <p>Corregimos desalineaciones vertebrales y bloqueos energéticos que afectan al sistema nervioso y al flujo vital.</p>
        </div>

        <div className="card">
          <strong>Medicina China Tradicional</strong>
          <p>Aplicamos principios milenarios que incluyen:</p>
          <ul className="bullet-list">
            <li><strong>Acupuntura:</strong> para armonizar la energía vital o Qi a través de puntos específicos.</li>
            <li><strong>Moxibustión:</strong> mediante calor terapéutico que activa la circulación energética.</li>
            <li><strong>Digitopresión y Shiatsu:</strong> técnicas manuales que liberan tensiones y estimulan el flujo natural de energía.</li>
          </ul>
        </div>

        <div className="card">
          <strong>Medicina Homeostática</strong>
          <p>Utilizamos terapias biológicas y naturales para ayudar al cuerpo a recuperar su equilibrio interno y funcional.</p>
        </div>

        <div className="card">
          <strong>Terapia de Ventosas (Cupping)</strong>
          <p>Promovemos la desintoxicación y la circulación sanguínea mediante succión controlada.</p>
        </div>

        <div className="card">
          <strong>Terapia con Imanes (Biomagnetismo)</strong>
          <p>Equilibramos los campos magnéticos del cuerpo para neutralizar desequilibrios y mejorar la salud celular.</p>
        </div>

        <div className="card">
          <strong>Terapias energéticas y vibracionales</strong>
          <p>Aplicamos frecuencias naturales, aromaterapia y esencias florales que armonizan cuerpo, mente y espíritu.</p>
        </div>

      </div>

      <div style={{marginTop: '40px', textAlign: 'center', fontStyle: 'italic'}}>
        <p>Cada terapia puede aplicarse de forma individual o combinarse de manera integral, según las necesidades únicas de cada persona. Nuestro objetivo es que cada paciente experimente una verdadera reconexión con su energía celular y su bienestar natural.</p>
      </div>
    </div>
  );
};

export default Servicios;