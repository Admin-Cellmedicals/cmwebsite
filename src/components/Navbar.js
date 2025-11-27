import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
// Importamos el logo (Asegúrate de haber limpiado el archivo SVG)
import logo from '../assets/logo.svg';

function Navbar() {
  const styles = {
    nav: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem', 
      backgroundColor: '#fff',
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    },
    brandContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      textDecoration: 'none'
    },
    logoImg: {
      height: '50px', 
      width: 'auto'
    },
    brandText: {
      fontSize: '1.8rem',
      fontWeight: '700',
      color: '#4A7C59',
      fontFamily: '"Playfair Display", serif',
      lineHeight: 1
    },
    menu: {
      display: 'flex',
      gap: '30px',
      listStyle: 'none',
      margin: 0,
      padding: 0
    },
    link: {
      textDecoration: 'none',
      color: '#2C3E50',
      fontWeight: '500',
      transition: 'color 0.3s',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      fontSize: '0.9rem'
    }
  };

  return (
    <nav style={styles.nav}>
      {/* Enlace al Home que contiene Logo + Texto */}
      <Link to="/" style={styles.brandContainer}>
        <img src={logo} alt="Logo CellMedicals" style={styles.logoImg} />
        <span style={styles.brandText}>CellMedicals</span>
      </Link>

      <ul style={styles.menu}>
        <li><Link to="/" style={styles.link}>Inicio</Link></li>
        <li><Link to="/nosotros" style={styles.link}>Nosotros</Link></li>
        <li><Link to="/servicios" style={styles.link}>Servicios</Link></li>
        <li><Link to="/cursos" style={styles.link}>Cursos</Link></li>
        <li><Link to="/contacto" style={{...styles.link, color: '#D4A373'}}>Contacto</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;