import React, { useEffect, useState } from 'react';
import {
  MapContainer, TileLayer, Marker, Popup, useMapEvents,
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
  statusId
}) => {
  useEffect(() => { }, [address]);
  const position = [machineLatitude, machineLongitude];

  const LocationMarker = () => {
    const [positionBringer, setPositionBringer] = useState(null);
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setPositionBringer(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return positionBringer === null ? null : (
      <Marker position={positionBringer}>
        <Popup>Vous êtes ici</Popup>
      </Marker>
    );
  };

  return (
    <div className="address-detail">
      <MapContainer center={position} zoom={16} scrollWheelZoom className="address-detail-map">
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
        <Marker position={position}>
          <Popup>
            Votre washer
          </Popup>
        </Marker>
      </MapContainer>

      {
        /*  affiche l'adresse uniquement si la résa est confirmée, la machine ni annulé 
        et disparaît si le linge est récupéré */
        (statusId > 1) && (statusId < 5) &&
        (
          <div className="address-detail-info">
            <p>{address} {zip_code} {city}</p>
            <p>{phone}</p>
            <p>{mail}</p>
          </div>
        )
      }
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
