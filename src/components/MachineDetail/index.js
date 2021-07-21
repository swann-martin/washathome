import React from 'react';

import './styles.scss';

const MachineDetail = () => (
  <div className="machinedetail">
    <div className="machinedetail-infos">
      <div className="machinedetail-infos-address">
        <span className="machinedetail-infos-address-city">Bastia</span>
        <span className="machinedetail-infos-address-zipcode">20200</span>
      </div>
      <span className="machinedetail-infos-name">Machine</span>
    </div>
    <div>
      <h4 className="machinedetail-form-title">Infos de reservation</h4>
      <form className="machinedetail-form">

        <select className="machinedetail-form-select" name="day" id="day-select">
          <option className="machinedetail-form-select-day" value="">Jours disponibles</option>
          <option className="machinedetail-form-select-day" value="">23 Aout</option>
          <option className="machinedetail-form-select-day" value="">24 Aout</option>
          <option className="machinedetail-form-select-day" value="">25 Aout</option>
          <option className="machinedetail-form-select-day" value="">26 Aout</option>
          <option className="machinedetail-form-select-day" value="">27 Aout</option>
        </select>

        <select className="machinedetail-form-select" name="hour" id="hour-select">
          <option className="machinedetail-form-select-hour" value="">Heures disponibles</option>
          <option className="machinedetail-form-select-hour" value="">10h</option>
          <option className="machinedetail-form-select-hour" value="">11h</option>
          <option className="machinedetail-form-select-hour" value="">13h</option>
        </select>

        <select className="machinedetail-form-select" id="temperature-select" name="temperature">
          <option className="machinedetail-form-select-temperature" value="">Températures disponibles</option>
          <option className="machinedetail-form-select-temperature" value="30">30°</option>
        </select>
        <div className="machinedetail-form-options">
          <h4>Options disponibles</h4>
          <label className="machinedetail-form-options-item" htmlFor="option">
            <input type="checkbox" />
            Sechage au sèche-linge 3€
          </label>
          <label className="machinedetail-form-options-item" htmlFor="option">
            <input type="checkbox" />
            Pliage 2€
          </label>
        </div>
        <button className="machinedetail-form-submit" type="submit">Reserver</button>
      </form>
    </div>
  </div>
);

export default MachineDetail;
