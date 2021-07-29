import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Options from '../../containers/Options';
import './styles.scss';


const MachineDetail = ({ days, hours, machine,
}) => {
  useEffect(() => { }, [machine]);
  console.log('machine', machine);
  const position = {lat: machine.latitude, lng: machine.longitude};

  return (
    <div className="machinedetail">
   <h4 className="machinedetail-title">Infos de reservation</h4>
      <div className="machinedetail-infos">
        <div className="machinedetail-infos-details">
          <h2 className="machinedetail-infos-details-title">{machine.name}</h2>
          <img className="machinedetail-infos-details-picture" src={machine.picture} alt={machine.name} />
          <p className="machinedetail-infos-details-capacity">Capacité : {machine.capacity}kg</p>
        </div>
      </div>

      <div className="machinedetail-container-bottom">
    

        <div className="machinedetail-container-bottom-left">
          <h3 className="machinedetail-infos-address-city">{machine.city}</h3>
          <p className="machinedetail-infos-address-zipcode">{machine.address}</p>
          <p className="machinedetail-infos-address-zipcode">{machine.zip_code}</p>
          <MapContainer className="machinedetail-infos-map" center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                <h3 className="machinedetail-infos-name">{machine.name}</h3>
                <p className="machinedetail-infos-address-city">{machine.city}</p>
                <img className="machinedetail-infos-picture" src={machine.picture} alt={machine.name} />
              </Popup>
            </Marker>
          </MapContainer>,
        </div>
        
        <form className="machinedetail-form" onSubmit={(e) => {
          e.preventDefault();
          console.log(`submit du form ${machine.id}`)
        }}>

          <select className="machinedetail-form-select" name="day" id="day-select">
            <option className="machinedetail-form-select-day" value="">Jours disponibles</option>
            {days.map((day, id) => (
              <option key={day + id} className="machinedetail-form-select-day" value={day}>{day}</option>
            ))}
          </select>

          <select className="machinedetail-form-select" name="hour" id="hour-select">
            <option className="machinedetail-form-select-hour" value="">Horaires disponibles</option>
            {hours.map((hour, id) => (
              <option key={hour + id} className="machinedetail-form-select-hour" value={hour}>{hour}</option>
            ))}
          </select>

          <select className="machinedetail-form-select" id="temperature-select" name="temperature">
            <option className="machinedetail-form-select-temperature" value="30">Température de lavage : 30°c</option>
            <option className="machinedetail-form-select-temperature" value="20">20°</option>
            <option className="machinedetail-form-select-temperature" value="40">40°</option>
            <option className="machinedetail-form-select-temperature" value="60">60°</option>
          </select>
          <div className="machinedetail-form-options">

            <Options />

          </div>
          <button className="machinedetail-form-submit" type="submit">Reserver</button>
        </form>
      </div>
    </div>
  );
};

MachineDetail.propTypes = {
  machine: PropTypes.shape({
    city: PropTypes.string,
    zip_code: PropTypes.string,
    address: PropTypes.string,
    title: PropTypes.string,
    picture: PropTypes.string,
    name: PropTypes.string,
    capacity: PropTypes.number,
  }).isRequired,
  days: PropTypes.arrayOf(PropTypes.string),
  hours: PropTypes.arrayOf(PropTypes.string),
};

MachineDetail.defaultProps = {
  days: [],
  hours: [],
};

export default MachineDetail;
