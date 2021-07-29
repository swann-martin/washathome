import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Routing from './Routing';
import './styles.scss';

const AddressDetail = () => {
  const position = [43.2961743, 5.3699525];
  return (
    <div className="address-detail">
      <MapContainer center={position} zoom={10} scrollWheelZoom>
        <Routing start={[57.74, 11.94]} end={[57.6792, 11.949]} />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            ça sert à rien
          </Popup>
        </Marker>
      </MapContainer>
      <div>
        <span>Adresse</span>
        <span>telephone</span>
        <span>mail</span>
      </div>
    </div>

  );
};

export default AddressDetail;
