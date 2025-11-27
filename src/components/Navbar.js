import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 
// Importamos el logo
import logo from '../assets/logo.svg';

function Navbar() {
  // Ya no usamos estilos en línea, usamos clases CSS
  return (
    <nav className="navbar">
      {/* Enlace al Home que contiene Logo + Texto */}
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="Logo CellMedicals" className="navbar-logo-img" />
        <span className="navbar-brand-text">CellMedicals</span>
      </Link>

      {/* Menú de Enlaces */}
      <ul className="navbar-menu">
        <li><Link to="/" className="navbar-link">Inicio</Link></li>
        <li><Link to="/nosotros" className="navbar-link">Nosotros</Link></li>
        <li><Link to="/servicios" className="navbar-link">Servicios</Link></li>
        <li><Link to="/cursos" className="navbar-link">Cursos</Link></li>
        {/* El contacto mantiene un estilo en línea solo para el color naranja */}
        <li><Link to="/contacto" className="navbar-link" style={{color: '#D4A373'}}>Contacto</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;