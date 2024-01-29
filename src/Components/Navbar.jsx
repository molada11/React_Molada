import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="contenedor">
        <img src="Imagenes/logo2.jpg" className="imagen" alt="" />
      </div>
      <ul>
        <li className="nav-item">
          <a className="nav-link" href="#inicio">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#nuestrosServicios">Servicios</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#empleados">Personal</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contacto">Registro</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#instalaciones">Instalaciones</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#quienesSomos">Quiénes Somos</a>
        </li>
      </ul>
      <div className="horizontal-bar"></div>
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Buscar..." />
      </div>
    </div>
  );
};

export default Navbar;
