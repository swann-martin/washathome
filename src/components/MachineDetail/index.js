import React from 'react';

import './styles.scss';

const MachineDetail = () => (
  <div>
    <div>
      <span>Bastia</span>
      <span>20200</span>
    </div>
    <div>
      <span>Machine</span>
    </div>
    <div>
      <h4>Programmes disponibles</h4>
      <form>
        <select>
          <option>Jours disponibles</option>
        </select>
        <select>
          <option>Heures disponibles</option>
        </select>
        <select>
          <option>Températures disponibles</option>
        </select>
        <select>
          <option>Options</option>
        </select>
        <button type="submit">Reserver</button>
      </form>
    </div>
  </div>
);

export default MachineDetail;
