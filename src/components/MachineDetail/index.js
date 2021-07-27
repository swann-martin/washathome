import React from 'react';
import PropTypes from 'prop-types';
import Options from '../../containers/Options';
import './styles.scss';

const MachineDetail = ({
  city, zip_code, title, days, hours, picture
}) => (
  <div className="machinedetail">
    <div className="machinedetail-infos">
      <div className="machinedetail-infos-address">
        <span className="machinedetail-infos-address-city">{ city }</span>
        <span className="machinedetail-infos-address-zipcode">{zip_code}</span>
      </div>
      <span className="machinedetail-infos-name">{title}</span>
      <img className="machinedetail-infos-picture" src={picture} alt={title} />
    </div>
    <div>
      <h4 className="machinedetail-form-title">Infos de reservation</h4>
      <form className="machinedetail-form">

        <select className="machinedetail-form-select" name="day" id="day-select">
          <option className="machinedetail-form-select-day" value="">Jours disponibles</option>
          { days.map((day, id) => (
            <option key={day + id} className="machinedetail-form-select-day" value={day}>{day}</option>
          ))}
        </select>

        <select className="machinedetail-form-select" name="hour" id="hour-select">
          <option className="machinedetail-form-select-hour" value="">Horaires disponibles</option>
          { hours.map((hour, id) => (
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

MachineDetail.propTypes = {
  city: PropTypes.string,
  zip_code: PropTypes.string,
  title: PropTypes.string,
  days: PropTypes.arrayOf(PropTypes.string),
  hours: PropTypes.arrayOf(PropTypes.string),
  picture: PropTypes.string,
};

MachineDetail.defaultProps = {
  city: '',
  zip_code: '',
  title: 'la machine fantome',
  days: [],
  hours: [],
  picture: '',
};

export default MachineDetail;
