// VideoComponent.jsx
import React from 'react';

const VideoComponent = ({ videoSource }) => (
  <section className="video-section">
    <h2>Video de Nuestras Instalaciones</h2>
    <div className="video-wrapper">
      <video width="640" height="360" controls>
        <source src={videoSource} type="video/flv" />
        Tu navegador no soporta el tag de video.
      </video>
    </div>
  </section>
);

// Definición de un componente de clase
class MiComponente extends React.Component {
    render() {
      return <div>Hola, soy un componente de clase.</div>;
    }
  }
  
export default VideoComponent;
