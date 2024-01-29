import React from 'react';

const ServiciosSection = () => {
  return (
    <section id="nuestrosServicios" className="servicios-section">
      <div className="servicios-container">
        <div className="servicios-content">
          <h2 id="serviciosTitulo">Nuestros Servicios</h2>

          <p id="serviciosDescripcion">
            En Sonrisa Brillante, nos enorgullece ofrecer una amplia gama de servicios odontológicos de alta calidad
            para atender todas las necesidades de salud bucal de nuestros pacientes. Nuestro equipo de profesionales
            altamente calificados está dedicado a proporcionar atención personalizada y centrada en el paciente.
          </p>

          <div className="servicios-lista">
            <div className="servicio">
              <img src="./Imagenes/limpieza_dental.jpg" alt="Limpieza Dental" />
              <h3 id="limpiezaDentalTitulo">Limpieza Dental</h3>
              <p id="limpiezaDentalDescripcion">
                Mantén tu sonrisa saludable y radiante con nuestras sesiones profesionales de limpieza dental.
                Nuestros higienistas dentales utilizan las últimas técnicas para eliminar la placa y prevenir problemas bucales.
              </p>
            </div>

            <div className="servicio">
              <img src="./Imagenes/blanqueamiento_dental.jpg" alt="Blanqueamiento Dental" />
              <h3 id="blanqueamientoDentalTitulo">Blanqueamiento Dental</h3>
              <p id="blanqueamientoDentalDescripcion">
                Transforma tu sonrisa con nuestros tratamientos de blanqueamiento dental. Logra dientes más blancos
                y brillantes de manera segura y efectiva bajo la supervisión de nuestros expertos dentales.
              </p>
            </div>

            <div className="servicio">
              <img src="./Imagenes/ortodoncia.jpg" alt="Ortodoncia" />
              <h3 id="ortodonciaTitulo">Ortodoncia</h3>
              <p id="ortodonciaDescripcion">
                Corrige la alineación de tus dientes con nuestros tratamientos de ortodoncia. Ofrecemos opciones modernas
                como los brackets estéticos e Invisalign para lograr una sonrisa perfecta de manera discreta.
              </p>
            </div>

            <div className="servicio">
              <img src="./Imagenes/implantes_dentales.jpg" alt="Implantes Dentales" />
              <h3 id="implantesDentalesTitulo">Implantes Dentales</h3>
              <p id="implantesDentalesDescripcion">
                Recupera la funcionalidad y estética dental con nuestros servicios de implantes dentales.
                Nuestros especialistas ofrecen soluciones personalizadas para restaurar tu sonrisa de manera duradera.
              </p>
            </div>

            <div className="servicio">
              <img src="./Imagenes/odontopediatria.jpg" alt="Odontopediatría" />
              <h3 id="odontopediatriaTitulo">Odontopediatría</h3>
              <p id="odontopediatriaDescripcion">
                Cuidamos la salud dental de los más pequeños con nuestros servicios de odontopediatría.
                Un enfoque amigable y profesional para asegurar sonrisas saludables desde la infancia.
              </p>
            </div>

            <div className="servicio">
              <img src="./Imagenes/endodoncia.jpg" alt="Endodoncia" />
              <h3 id="endodonciaTitulo">Endodoncia</h3>
              <p id="endodonciaDescripcion">
                Tratamientos de endodoncia para salvar dientes dañados. Nuestros expertos se especializan en
                procedimientos de canal radicular para restaurar la salud dental.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiciosSection;
