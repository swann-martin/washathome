import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Options from '../../containers/Options';
import './styles.scss';


const MachineDetail = ({ days, hours, machine,
}) => {
  useEffect(() => { }, [machine]);
  console.log('machine', machine);
  const position = [43.2961743, 5.3699525];

  return (
    <div className="machinedetail">
      <div className="machinedetail-infos">
        <div className="machinedetail-infos-address">
          <span className="machinedetail-infos-address-city">{machine.city}</span>
          <span className="machinedetail-infos-address-zipcode">{machine.address}</span>
          <span className="machinedetail-infos-address-zipcode">{machine.zip_code}</span>
          <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
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
        <span className="machinedetail-infos-name">{machine.name}</span>
        <span className="machinedetail-infos-name">id de la machine:{machine.id}</span>
        <img className="machinedetail-infos-picture" src={machine.picture} alt={machine.name} />
        <span className="machinedetail-infos-address-zipcode">Capacité : {machine.capacity}kg</span>
      </div>
      <div>
        <h4 className="machinedetail-form-title">Infos de reservation</h4>
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
