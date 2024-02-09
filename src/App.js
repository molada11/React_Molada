// App.js
import React from 'react';

import CircleLoader from "react-spinners/CircleLoader";
import { useState , useEffect } from 'react';
import Plantilla from './Plantilla';
import 'leaflet/dist/leaflet.css';


import 'leaflet/dist/leaflet.css';

const App = () => {

 
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 3000)
  }, [])
 


  return (
    <div>
      {
       loading?
<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
  <CircleLoader
    color='#2b6888'
    size={300}
  />
  <h1 style={{
    marginTop: '20px',
    fontSize: '34px',
    color: '#2b6888',
    fontFamily: 'Kalnia, sans-serif',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    animation: 'moveDots 1.5s infinite linear', // Animación de movimiento de los puntos
    animationName: 'subtleSlideText',
    animationDuration: '3s',
    animationIterationCount: 'infinite',
  }}>
    Cargando...
  </h1>
</div>


     

        :
        
      <Plantilla />
      }
    </div>
  );
};


export default App;



