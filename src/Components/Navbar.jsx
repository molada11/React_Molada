import React, { useState } from 'react';


const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="navbar">
      <div className="contenedor">
        <img src="Imagenes/logo2.jpg" className="imagen" alt="" />
      </div>

      <div className={`menu-icon ${menuVisible ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <ul className={`nav-list ${menuVisible ? 'open' : ''}`}>
        <li className="nav-item">
          <a className="nav-link" href="#inicio" onClick={toggleMenu}>Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#nuestrosServicios" onClick={toggleMenu}>Servicios</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#empleados" onClick={toggleMenu}>Personal</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contacto" onClick={toggleMenu}>Registro</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#instalaciones" onClick={toggleMenu}>Instalaciones</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#quienesSomos" onClick={toggleMenu}>Quiénes Somos</a>
        </li>
        {/* Agrega más elementos del menú según sea necesario */}
      </ul>

      <div className="horizontal-bar"></div>
      
    </div>
  );
};

export default Navbar;

