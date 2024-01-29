import React from 'react';

const Instalaciones = ({ tourData, springProps }) => {
  // Verifica si tourData está definido antes de usar slice
  const tourDataSlice1 = tourData?.slice(0, 3) || [];
  const tourDataSlice2 = tourData?.slice(3) || [];

  return (
    <section id="instalaciones">
      <h2 className="instalaciones-titulo">Nuestras Instalaciones</h2>
      <br/>
      <div className="tour-container">
        <div className="tour-group">
          {tourDataSlice1.map((item, index) => (
            <div
              key={index}
              style={springProps}
              className="tour-item"
            >
              <img src={item.image} alt={item.title} />
              <h3 className="tour-titulo">{item.title}</h3>
              <p className="tour-descripcion">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="tour-group">
          {tourDataSlice2.map((item, index) => (
            <div
              key={index}
              style={springProps}
              className="tour-item"
            >
              <img src={item.image} alt={item.title} />
              <h3 className="tour-titulo">{item.title}</h3>
              <p className="tour-descripcion">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instalaciones;


