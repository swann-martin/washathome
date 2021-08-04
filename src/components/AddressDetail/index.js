import React, { useEffect } from 'react';
import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';
import PropTypes from 'prop-types';
import './styles.scss';

const AddressDetail = ({
  machineLatitude,
  machineLongitude,
  address,
  zip_code,
  city,
  phone,
  mail,
}) => {
  useEffect(() => { }, [address]);
  const position = [machineLatitude, machineLongitude];
  return (
    <div className="address-detail">
      <MapContainer center={position} zoom={10} scrollWheelZoom className="address-detail-map">
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            Votre washer
          </Popup>
        </Marker>
      </MapContainer>
      <div className="address-detail-info">
        <p>{address} {zip_code} {city}</p>
        <p>{phone}</p>
        <p>{mail}</p>
      </div>
    </div>

  );
};

AddressDetail.propTypes = {
  machineLatitude: PropTypes.number,
  machineLongitude: PropTypes.number,
  address: PropTypes.string,
  zip_code: PropTypes.string,
  city: PropTypes.string,
  phone: PropTypes.string,
  mail: PropTypes.string,
};

AddressDetail.defaultProps = {
  machineLatitude: null,
  machineLongitude: null,
  address: '',
  zip_code: '',
  city: '',
  phone: '',
  mail: '',
};

export default AddressDetail;
