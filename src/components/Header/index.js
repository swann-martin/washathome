import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import logo from 'src/assets/logoWash1.png';
import SearchBar from 'src/containers/SearchBar';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Header = ({ foundMachines }) => {
  useEffect(() => { }, [foundMachines]);

  return (
    <header className="header">

      <div className="header-container-top">
        <img className="header-logo" src={logo} alt="logo-Wash@Home" />
        <SearchBar />
      </div>

      {
        (foundMachines.length > 0)
        &&
        (

          <MapContainer className="header-container-bottom" center={[foundMachines[0].latitude, foundMachines[0].longitude]} zoom={5} scrollWheelZoom>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {foundMachines.map(machine => (
              <Marker key={machine.id} position={[machine.latitude, machine.longitude]}>
                <Popup>
                  <Link exact to={`machineDetail/${machine.id}`}>{machine.name}</Link>
                  <img className="header-container-bottom-picture" src={machine.picture} alt="machine" />
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        )
      }
    </header>
  );
};
export default Header;
