import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Create a custom red marker icon
const redMarkerIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const OSMMap = ({ center, zoom, markerPosition, countryBoundary }) => {
  return (
    <MapContainer center={center} zoom={zoom} style={{ height: 'calc(100vh - 64px)', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
      {countryBoundary && countryBoundary.length > 0 && (
        <Marker position={markerPosition} icon={redMarkerIcon}>
          <Popup>A marker indicating a location on the map.</Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default OSMMap;



