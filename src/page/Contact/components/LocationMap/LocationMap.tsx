import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const LocationMap: React.FC = () => {
  return (
    <MapContainer
    center={[-23.561684, -46.655881]}
    zoom={14}
    style={{ height: "400px", width: "100%" }}
  >
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    />
    <Marker position={[-23.561684, -46.655881]}>
      <Popup>1000 Paulista Avenue, São Paulo - SP, 01310-000</Popup>
    </Marker>
  </MapContainer>
  )
}

export default LocationMap;