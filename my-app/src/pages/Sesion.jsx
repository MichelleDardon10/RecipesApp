import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Sesion.css'; // Asegúrate de importar tus estilos CSS

function Sesion() {
  // Estado para almacenar los valores de los campos de texto
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');

  // Función para manejar el envío del formulario de inicio de sesión
  const handleIniciarSesion = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para el inicio de sesión
    // Por ejemplo, validar las credenciales y redirigir al usuario
  };

  return (
    <div className="sesion-container">
      <div className="banner">
        <h1>RecipesApp</h1>
      </div>
      <div className="sesion-form-container">
        <form onSubmit={handleIniciarSesion}>
          <div className="form-group">
            <label htmlFor="usuario">Usuario:</label>
            <input
              type="text"
              id="usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="contraseña">Contraseña:</label>
            <input
              type="password"
              id="contraseña"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
            />
          </div>
          <div className="button-group">
            <button type="submit">Iniciar Sesión</button>
          </div>
          <div className="crear-cuenta">
            <Link to="/crear-cuenta">Crear cuenta</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Sesion;