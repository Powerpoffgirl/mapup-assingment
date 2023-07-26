import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const OSMMap = ({ center, zoom, markerPosition }) => {
  return (
    <MapContainer center={center} zoom={zoom} style={{ height: 'calc(100vh - 64px)', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
      <Marker position={markerPosition}>
        <Popup>A marker indicating a location on the map.</Popup>
      </Marker>
    </MapContainer>
  );
};

export default OSMMap;
