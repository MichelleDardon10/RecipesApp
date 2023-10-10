import Home from './Home'
import React from 'react'
import '../botones.css';
import { Link } from 'react-router-dom';
import calendario from '../calendario.jpg';
import plus from '../plus.jpg';

function Pages() {
  return (
    <div className="page-container">

      <div className="button-container">
        <Link to="/sesion" className="person-button">
          Iniciar Sesión
        </Link>
      </div>

      <div className="container">
        <Home />
      </div>

      <div className="calendario-button">
        <Link to="/calendar" className="boton-calendario">
          <img src={calendario} alt="Calendario" />
        </Link>
      </div>
      
      <div className="agregar-recetas-button"> {/* Agrega una nueva clase para el botón de agregar recetas */}
        <Link to="/agregar" className="boton-agregar-recetas">
          <img src={plus} alt="Agregar Recetas" />
        </Link>
      </div>
    </div>
  );
}

export default Pages