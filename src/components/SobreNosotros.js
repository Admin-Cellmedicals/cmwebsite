import React from 'react';

const SobreNosotros = () => {
  return (
    <div className="page-container">
      <div style={{textAlign: 'center', marginBottom: '40px'}}>
        <h2>Sobre nosotros</h2>
      </div>
      
      {/* Texto Introductorio Destacado */}
      <div style={{backgroundColor: 'white', padding: '40px', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)'}}>
        <p>
          En CellMedicals somos un equipo comprometido con la salud natural, el equilibrio energético y la regeneración celular. Nuestra misión es acompañar a las personas en su proceso de sanación integral, combinando ciencia, naturaleza y energía para devolverle al cuerpo su capacidad de autorrepararse.
        </p>
        <p>
          Creemos que cada ser humano posee una inteligencia biológica capaz de restablecer el equilibrio cuando se le brindan las condiciones adecuadas. Por eso trabajamos desde un enfoque holístico, atendiendo al cuerpo físico, emocional, mental y energético como un solo sistema.
        </p>
        <p>
          Nuestra práctica reúne diversas disciplinas de la medicina natural y complementaria, entre ellas la iridología, trofología, auriculoterapia, quiropráctica, acupuntura, moxibustión, digitopresión, shiatsu, biomagnetismo, medicina homeostática y terapias energéticas y vibracionales.
        </p>
        <p>
          Cada técnica es aplicada con precisión, respeto y profundo conocimiento, buscando siempre la causa raíz del desequilibrio y no solo el alivio superficial del síntoma.
        </p>
        <p>
          Nos caracteriza la cercanía con nuestros pacientes, la dedicación personalizada y la búsqueda constante de nuevas herramientas que fortalezcan la energía celular, promuevan la desintoxicación natural y estimulen la armonía entre cuerpo, mente y espíritu.
        </p>
        <p>
          En CellMedicals, más que tratar enfermedades, activamos procesos de bienestar y conciencia, ayudando a las personas a reconectarse con su naturaleza interna y con la energía que las mantiene vivas.
        </p>
      </div>
    </div>
  );
};

export default SobreNosotros;