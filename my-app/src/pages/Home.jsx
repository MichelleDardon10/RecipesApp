
import App from "../App.css";
import { Link } from 'react-router-dom';
import '../botones.css';


import React from 'react';

function Home() {
  const linkStyle = {
    textDecoration: 'none',
    color: 'white', 
  };

  return (
    
    <div className="menu-container">
      <div className="menu-item"><Link to="/ensaladas" style={linkStyle}>Ensaladas</Link></div>
      <div className="menu-item"><Link to="/pollos" style={linkStyle}>Pollos</Link></div>
      <div className="menu-item"><Link to="/popular" style={linkStyle}>Popular</Link></div>
      <div className="menu-item"><Link to="/postres" style={linkStyle}>Postres</Link></div>
      <div className="menu-item"><Link to="/carnes" style={linkStyle}>Carnes</Link></div>
      <div className="menu-item"><Link to="/vegetariano" style={linkStyle}>Vegetariano</Link></div>
      <div className="menu-item"><Link to="/mariscos" style={linkStyle}>Mariscos</Link></div>
      <div className="menu-item"><Link to="/bebidas" style={linkStyle}>Bebidas</Link></div>
    </div>
  );
}

export default Home;
