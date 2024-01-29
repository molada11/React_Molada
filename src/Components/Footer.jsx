// Footer.js

import React from 'react';

const Footer = () => {
  return (
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
      <div id="encuentranos-info">
        <h4>¡Encuéntranos!</h4>
        <br />
        <p style={{ color: 'white' }}>(+34) 926623456</p>
        <p style={{ color: 'white' }}>SonrisaBrillante@gmail.com</p>
        <p style={{ color: 'white' }}>Empedrada 10, Manzanares(13200) Ciudad Real</p>
      </div>

      <div>
        <h4>Redes Sociales</h4>
        <br />
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Linkedin</a>
        <a href="#">Instagram</a>
        <ul className='sociales'>
          <img src="Imagenes/logofb.jpg" className="fb" alt=""/>
          <img src="Imagenes/twitter.jpg" className="tw" alt=""/>
          <img src="Imagenes/in.jpg" className="in" alt=""/> 
          <img src="Imagenes/insta.jpg" className="in" alt=""/>                        
        </ul>
      </div>
      <br />
      <br />
    </footer>
  );
};

export default Footer;
