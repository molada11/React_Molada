import React, { useEffect, useState } from 'react';
import '../stylePlantilla.css'; // Ajusta la ruta según la estructura de tus carpetas

const InicioContainer = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const titleTimeout = setTimeout(() => setShowTitle(true), 500); // Mostrar después de 500ms
    const subtitleTimeout = setTimeout(() => setShowSubtitle(true), 1500); // Mostrar después de 1500ms
    const textTimeout = setTimeout(() => setShowText(true), 2500); // Mostrar después de 2500ms

    // Limpia los timeouts cuando el componente se desmonta
    return () => {
      clearTimeout(titleTimeout);
      clearTimeout(subtitleTimeout);
      clearTimeout(textTimeout);
    };
  }, []);

  return (
    <div className="principio-container" id='inicio'>
      <div className={`principio scale-animation ${showTitle ? 'show' : ''}`}>
        <h1 className={`titulo ${showTitle ? 'show' : ''}`}>Sonrisa Brillante</h1>
      </div>
      <div className={`principio scale-animation ${showSubtitle ? 'show' : ''}`}>
        <p className={`subtitulo ${showSubtitle ? 'show' : ''}`}>Más que una clínica dental</p>
      </div>
      <div className={`principio scale-animation ${showText ? 'show' : ''}`}>
        <p className={`texto ${showText ? 'show' : ''}`}>
          Nos comprometemos a mantener tu sonrisa sana y radiante, adaptándonos a tus necesidades individuales.
        </p>
      </div>
    </div>
  );
};

export default InicioContainer;


