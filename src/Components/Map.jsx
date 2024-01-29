import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import marcadorIcono from './media/ubi.png';
import L from 'leaflet';
const Mapa = () => {
  const manzanaresCoords = [39.0000, -3.3808]; // Coordenadas de Manzanares, Ciudad Real

  return (
      <MapContainer
        center={manzanaresCoords}
        zoom={15}
        style={{
          height: '400px',
          width: '85%',
          margin: '70px auto',
          border: '7px solid #EC7F08',
          borderRadius: '15px',
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={manzanaresCoords} icon={L.icon({ iconUrl: marcadorIcono, iconSize: [33, 33], iconAnchor: [12, 41] })}>
          <Popup>
            Manzanares, Ciudad Real
          </Popup>
        </Marker>
      </MapContainer>

  );
};

export default Mapa;