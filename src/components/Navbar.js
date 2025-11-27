import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

function Navbar() {
  const styles = {
    nav: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1.5rem 2rem',
      backgroundColor: '#fff',
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    },
    logo: {
      fontSize: '1.8rem',
      fontWeight: '700',
      color: '#4A7C59', // Usamos el verde del branding
      textDecoration: 'none',
      fontFamily: '"Playfair Display", serif'
    },
    menu: {
      display: 'flex',
      gap: '30px',
      listStyle: 'none'
    },
    link: {
      textDecoration: 'none',
      color: '#2C3E50',
      fontSize: '1rem',
      fontWeight: '500',
      transition: 'color 0.3s',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      fontSize: '0.9rem'
    }
  };

  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.logo}>CellMedicals</Link>

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