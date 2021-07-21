import React from 'react';

import './styles.scss';

const MachineDetail = () => (
  <div className="machinedetail">
    <div className="machinedetail-address">
      <span className="machinedetail-address-city">Bastia</span>
      <span className="machinedetail-address-zipcode">20200</span>
    </div>
    <span className="machinedetail-name">Machine</span>
    <div className="machinedetail-form">
      <h4 className="machinedetail-form-title">Programmes disponibles</h4>
      <form>
        <select className="machinedetail-form-select">
          <option className="machinedetail-form-select-day">Jours disponibles</option>
        </select>
        <select className="machinedetail-form-select">
          <option className="machinedetail-form-select-hour">Heures disponibles</option>
        </select>
        <select className="machinedetail-form-select">
          <option className="machinedetail-form-select-temperature">Températures disponibles</option>
        </select>
        <select className="machinedetail-form-select">
          <option className="machinedetail-form-select-option">Options</option>
        </select>
        <button className="machinedetail-form-submit" type="submit">Reserver</button>
      </form>
    </div>
  </div>
);

export default MachineDetail;
