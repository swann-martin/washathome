import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';
import logo from 'src/assets/logoWash1.png';
import SearchBar from 'src/containers/SearchBar';
import {
  MapContainer, TileLayer, Marker, Popup, useMapEvents,
} from 'react-leaflet';

const Header = ({ foundMachines }) => {
  const LocationMarker = () => {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return position === null ? null : (
      <Marker position={position}>
        <Popup>Vous êtes ici</Popup>
      </Marker>
    );
  };

  useEffect(
    () => { }, [foundMachines],
  );

  return (
    <header className="header">

      <div className="header-container-top">
        <img className="header-logo" src={logo} alt="logo-Wash@Home" />
        <SearchBar />
      </div>

      {
        (foundMachines.length > 0)
        && (

          <MapContainer className="header-container-bottom" center={{ lat: foundMachines[0].latitude, lng: foundMachines[0].longitude }} zoom={8} scrollWheelZoom>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {foundMachines.map((machine) => (
              <Marker key={machine.id} position={[machine.latitude, machine.longitude]}>
                <LocationMarker />
                <Popup className="header-container-bottom-popup">
                  <Link exact to={`machineDetail/${machine.id}`} className="header-container-bottom-map-popup-title"><h3>{machine.name}</h3></Link>
                  <img className="header-container-bottom-map-popup-picture" src={machine.picture} alt="machine" />
                  <p className="header-container-bottom-map-popup-city">{machine.city} <span className="machinedetail-container-bottom-left-address-map-popup-price">{machine.price}€</span></p>
                  <p className="header-container-bottom-map-popup-description">{machine.description}</p>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        )
      }
    </header>
  );
};

Header.propTypes = {
  foundMachines: PropTypes.array,
};

Header.defaultProps = {
  foundMachines: [],
};
export default Header;
