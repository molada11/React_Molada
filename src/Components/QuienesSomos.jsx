// QuienesSomos.js

import React from 'react';
import Zoom from 'react-reveal/Zoom';

const QuienesSomos = () => {
  return (
    <Zoom>
      <div className="quienesSomos">
        <h2 className="somos">Quiénes Somos</h2>
        <section className="quienesSomosSection">
          <div className="quienesSomosContainer">
            <div className="quienesSomosContent">
              <h2 className="historiaTitulo">Orígenes</h2>
              <p className="parrafoHistoria">
                Fundada en 2003 por Manuel Molada Gómez, nuestra clínica se ha convertido en un referente en Manzanares(Ciudad Real).
              </p>

              <h2 className="misionTitulo">Objetivo corporativo</h2>
              <p className="parrafoMision">
                Nos enorgullece ofrecer servicios de odontología de alta calidad y cuidado personalizado a cada paciente.
                Buscamos la excelencia en todos los aspectos de nuestra práctica odontológica, desde los profesionales hasta el personal de apoyo.
              </p>
            </div>
            <div className="quienesSomosImageContainer">
              <img src="./Imagenes/quienes_somos.jpg" alt="Imagen Representativa" />
            </div>
          </div>
        </section>
      </div>
    </Zoom>
  );
};

export default QuienesSomos;
