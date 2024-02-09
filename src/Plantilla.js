import React from 'react';
import './stylePlantilla.css';
import Slider from 'react-slick';
import { useSpring, animated } from 'react-spring';
import VideoComponent from './Components/VideoComponent';
import ReactPlayer from 'react-player';
import CarruselImagenes from './Components/CarruselImagenes';
import ContactForm from './Components/Contacto';
import Footer from './Components/Footer';
import QuienesSomos from './Components/QuienesSomos';
import Instalaciones from './Components/Instalaciones';
import Equipo from './Components/Equipo';
import Servicios from './Components/Servicios';
import Mapa from './Components/Mapa';



import Noticias from './Components/Noticias';
import Inicio from './Components/Inicio';
import Navbar from './Components/Navbar';
import ContactUs from './Components/ContactUs';
import { useState , useEffect } from 'react';




const TourItem = ({ image, title, description }) => (
  <div className="tour-item">
    <img src={image} alt={title} />
    <h3 className="tour-titulo">{title}</h3>
    <p className="tour-descripcion">{description}</p>
  </div>
);


const AnimatedTourItem = animated(TourItem);

const App = () => {
 
  const springProps = useSpring({ opacity: 1, from: { opacity: 0 } });
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const tourData = [
    {
      image: 'Imagenes/consultorio.jpg',
      title: 'Consultorio Dental',
      description: 'Nuestros modernos consultorios están equipados con tecnología de vanguardia para brindar tratamientos dentales precisos y cómodos.',
    },
    {
      image: 'Imagenes/inicio.jpg',
      title: 'Sala de Espera',
      description: 'Relájate en nuestra acogedora sala de espera mientras esperas tu turno. Ofrecemos un ambiente tranquilo y revistas actuales para tu disfrute.',
    },
    {
      image: 'Imagenes/area-infantil.jpg',
      title: 'Área Infantil',
      description: 'Pensando en nuestros pacientes más jóvenes, contamos con un área de juegos diseñada para hacer que la visita al dentista sea divertida y sin estrés.',
    },
    
    {
      image: 'Imagenes/laboratorio.jpg',
      title: 'Laboratorio Dental',
      description: 'Nuestro laboratorio cuenta con tecnología avanzada para fabricar prótesis dentales y otros dispositivos personalizados con precisión.',
    },
    {
      image: 'Imagenes/quirurgico.jpg',
      title: 'Quirófano Dental',
      description: 'Disponemos de un quirófano especializado para realizar procedimientos dentales más complejos y cirugías con los más altos estándares de seguridad.',
    },
    {
      image: 'Imagenes/area-relax.jpg',
      title: 'Área de Relax',
      description: 'Después de tu tratamiento, disfruta de nuestro espacio de relajación diseñado para hacer que tu experiencia sea aún más placentera.',
    },
  ];

  //const springProps = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <>
       

        <div className='todo'>
        <Navbar />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        

        <Inicio />
        
      
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      <br />
      
      

  <Noticias />

  <hr></hr>

        <br />
        
    <Servicios />

        <br />
        <br />
        
      
        <hr></hr>
        <br />
        <br />
        <br />
        <br />

        <Equipo />
    


      <br />
        <br />
        <br />
        <br />
        <br />
        <hr/>
      <br />
      <br />
      
        
        <Instalaciones tourData={tourData} springProps={springProps} />
      

      <hr></hr>
      <br></br>
      <br></br>
      <br></br>

      <QuienesSomos />
      

  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <hr></hr>
  <br></br>
  <br></br>
  <br></br>

      <Mapa />
    

  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <hr></hr>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <h2 id="consejos-bucales">Consejos Bucales</h2>
  <br></br>
  <CarruselImagenes /> 


  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <hr></hr>
  <br></br>
  <br></br>
  <br></br>
  <ContactUs />


  <br></br>
  <br></br>
  <br></br>
  <br></br>

  <hr></hr>

  <br></br>

      
  <div class="estilo-visita">
    <h2 id="visita">¡Ven a vernos!</h2>
  </div>
      <div className='App' style={{ width: '100%', height: '100%', position: 'absolute', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <ReactPlayer
          url='https://https://www.youtube.com/watch?v=xxSmIgsIa38'
          width='60%'  // Cambiado para ajustar el ancho del video
          height='60%'  // Cambiado para ajustar la altura del video
          controls
          playing
          muted
          
        />
      </div>
      

    
      <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
  

        <Footer />
        </div>
    </>
  );
};


export default App;
