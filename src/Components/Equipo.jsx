import React from 'react';
import { Zoom } from 'react-reveal';


const Equipo = () => {
  const empleados = [
    
    {
      nombre: 'Dra. María Pérez',
      puesto: 'Odontóloga Principal',
      imagen: 'Imagenes/trabajador1.jpg',
      descripcion:
        'Nuestra Odontóloga Principal, la Dra. María Pérez, es una profesional apasionada con años de experiencia en odontología general y estética dental. Su dedicación y cuidado hacia los pacientes aseguran un tratamiento dental personalizado y de calidad.',
    },
    {
      nombre: 'Juan García',
      puesto: 'Asistente Dental',
      imagen: 'Imagenes/trabajador2.jpg',
      descripcion:
        'Juan García es nuestro Asistente Dental, comprometido a hacer que cada visita sea cómoda y libre de estrés. Con habilidades técnicas excepcionales, Juan trabaja estrechamente con el equipo para garantizar un entorno dental eficiente y amigable.',
    },
    {
      nombre: 'Laura Martínez',
      puesto: 'Recepcionista',
      imagen: 'Imagenes/trabajador3.jpg',
      descripcion:
        'Como Recepcionista, Laura Martínez es la cara amable que da la bienvenida a nuestros pacientes. Su atención al detalle y amabilidad aseguran una experiencia administrativa sin problemas, desde programar citas hasta responder preguntas sobre servicios dentales.',
    },
    {
      nombre: 'Dr. Pedro Rodríguez',
      puesto: 'Ortodoncista',
      imagen: 'Imagenes/trabajador4.jpg',
      descripcion:
        'El Dr. Pedro Rodríguez es nuestro especialista en ortodoncia. Con una sólida formación y experiencia en alineación dental, el Dr. Rodríguez se compromete a crear sonrisas hermosas y funcionales mediante tratamientos ortodónticos personalizados.',
    },
  ];

  return (
    <Zoom>
    <section id="empleados">
      <h2 className="equipo-titulo">Nuestro Equipo</h2>
      <div className="empleados-container">
        {empleados.map((empleado, index) => (
          <div className="tarjeta" key={index}>
            <div className="cara cara-frontal">
              <img src={empleado.imagen} alt={empleado.nombre} />
              <h3 className="nombre-empleado">{empleado.nombre}</h3>
              <p className="puesto-empleado">{empleado.puesto}</p>
            </div>
            <div className="cara cara-trasera">
              <p className="descripcion-empleado">{empleado.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    </Zoom>
  );
};

export default Equipo;
