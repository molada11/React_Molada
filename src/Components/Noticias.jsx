import React from 'react';
import Zoom from 'react-reveal/Zoom';

const Noticias = () => {
  return (
    <Zoom>
    <section id="blog">
      <h2 id="titulonoticias">Noticias</h2>
      <hr />
      <br />
      <div className="articulos">
        
        <div className="articulo">
          <img src="Imagenes/principal.jpg" alt="Artículo 1" />
          <h3>Consejos para una sonrisa saludable</h3>
          <p>Descubre algunos consejos prácticos para mantener tu sonrisa saludable y radiante.</p>
          <button className="seguir-leyendo-btn">Seguir Leyendo</button>
        </div>
        <div className="articulo">
          <img src="Imagenes/tecnologia.jpg" alt="Artículo 2" />
          <h3>Avances en tecnología dental</h3>
          <p>Explora las últimas tecnologías utilizadas en el campo de la odontología para tratamientos más efectivos.</p>
          <button className="seguir-leyendo-btn">Seguir Leyendo</button>
        </div>
        {/* Puedes agregar más artículos según sea necesario */}
      </div>
      <br />
    </section>
    </Zoom>
  );
};

export default Noticias;
