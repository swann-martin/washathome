import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const AddressDetail = ({ machine, resa, otherGuy, handleNextStepButton, handleCancelButton }) => (
  <div>
    <h2>Reservation de la machine {machine.name}</h2>
    <div>
    //* En fonction de si l'user qui fait la requete est le bringer ou le washer de la reservation on affichera le pseudo de l'autre partie de la reservation
      <span>Bringer: {otherGuy.pseudo}</span>

      <span>Etape de la réservation: {resa.status}</span>
      <span>Date de dépôt du linge: {resa.date}</span>
      <span>Température: {resa.temperature}</span>
      <ul>
        {
          resa.options.map((option) => (
            <li>{option.name} {option.price}€</li>
          ))
        }
      </ul>
      <span>Prix total: {resa.price}</span>
      <button type="button" onClick={handleNextStepButton}>{nextStep}</button>
      <button type="button" onClick={handleCancelButton}>Annuler la reservation</button>
    </div>
  </div>
);

AddressDetails.propTypes = {

};

export default AddressDetail;
