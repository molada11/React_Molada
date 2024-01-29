import React from 'react';
import './stylePlantilla.css';

const QuienesSomos = () => {
  return (
    <>
      <div className="navbar">
        <div className="contenedor">
          <img src="Imagenes/logo2.jpg" className="imagen" alt="" />
        </div>
        <ul>
          <li><a href="Inicio.html">Inicio</a></li>
          <li><a href="Registro.html">Registro</a></li>
          <li><a href="#">Ofertas</a></li>
          <li><a href="/quienesSomos">Quiénes Somos</a></li>
        </ul>
        <div className="horizontal-bar"></div>
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Buscar..." />
          <button className="search-button">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>

      <div className="quienesSomosContainer">
        <h1>Sonrisa Brillante</h1>
        {/* Contenido específico de Quiénes Somos */}
      </div>

      <footer>
        <div>
          <h4>Servicios</h4>
          <br />
          <ul>
            <li>Condiciones Generales de Venta</li>
            <li>Condiciones de envío</li>
            <li>Aviso Legal</li>
            <li>Politíca de Privacidad</li>
            <li>Política de Cookies</li>
          </ul>
        </div>
        <div>
          <h4>¡Encuéntranos!</h4>
          <br />
          <p>(+34) 926623456</p>
          <p>SonrisaBrillante@gmail.com</p>
          <p>Empedrada 10, Manzanares(13200) Ciudad Real</p>
        </div>
        <div>
          <h4>Redes Sociales</h4>
          <br />
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Linkedin</a>
          <a href="#">Instagram</a>
          <ul className='sociales'>
            <img src="Imagenes/logofb.jpg" className="fb" alt="" />
            <img src="Imagenes/twitter.jpg" className="tw" alt="" />
            <img src="Imagenes/in.jpg" className="in" alt="" />
            <img src="Imagenes/insta.jpg" className="in" alt="" />
          </ul>
        </div>
        <br />
        <br />
      </footer>
    </>
  );
};

export default QuienesSomos;
