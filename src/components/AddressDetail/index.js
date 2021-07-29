import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import PropTypes from 'prop-types';
import Routing from './Routing';
import './styles.scss';

const AddressDetail = ({ userLongitude, userLatitude }) => {
  const position = [userLongitude, userLatitude];
  return (
    <div className="address-detail">
      <MapContainer center={position} zoom={10} scrollWheelZoom>
        <Routing />
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

AddressDetail.propTypes = {
  userLongitude: PropTypes.number,
  userLatitude: PropTypes.number,
};

AddressDetail.defaultProps = {
  userLongitude: 51.5073509,
  userLatitude: -0.1277583,
};

export default AddressDetail;
