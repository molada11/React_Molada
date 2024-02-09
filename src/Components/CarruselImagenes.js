import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CarruselImagenes.css'; // Importa el archivo CSS
import { Zoom } from 'react-reveal';

const CarruselImagenes = () => {
  const imagenes = [
    {
      url: 'Imagenes/higiene.jpg',
      descripcion: 'Rutina de Higiene Oral: Cepillar, usar hilo dental y enjuague bucal es clave. Elimina la placa, previene caries y enfermedades de las encías. Consejo: cepíllate dos veces al día, usa hilo dental diario y elige enjuague bucal adecuado. ¡Mantén tu sonrisa saludable!',
    },
    {
      url: 'Imagenes/nutricion.jpg',
      descripcion: 'Nutrición Dental: Explore cómo una dieta equilibrada impacta la salud dental. Descubra alimentos que fortalecen los dientes y evite aquellos que pueden causar daño. Consejos prácticos para mantener una sonrisa radiante y prevenir problemas dentales.',
    },
    {
      url: 'Imagenes/dentista.jpg',
      descripcion: 'Visita tu dentista: Agenda tus chequeos regulares y cuida tu salud bucal. Detecta problemas a tiempo, evita complicaciones y garantiza una sonrisa radiante. ¡Tu bienestar dental comienza con citas periódicas!',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Habilita la reproducción automática
    autoplaySpeed: 5000, // Establece la velocidad de cambio a 5 segundos (5000 milisegundos)
  };

  return (
    <Zoom>
    <Slider {...settings}>
      {imagenes.map((imagen, index) => (
        <div key={index}>
          <div className="imagen-container">
            <img className="imagen-carrusel" src={imagen.url} alt={`Imagen ${index + 1}`} />
            <div className="descripcion-container">
              <p className="descripcion-carrusel">{imagen.descripcion}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
    </Zoom>
  );
};

export default CarruselImagenes;


