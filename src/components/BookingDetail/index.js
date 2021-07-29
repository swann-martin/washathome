import React from 'react';
import PropTypes from 'prop-types';

import AddressDetail from 'src/components/AddressDetail';

import './styles.scss';

const BookingDetail = ({ machine, resa, otherGuy, handleNextStepButton, handleCancelButton }) => (
  <div>
    <h2>Reservation de la machine {machine.name}</h2>
    <div>
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
      <AddressDetail />
  </div>
);

BookingDetail.propTypes = {
  machine: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  resa: PropTypes.shape({
    status: PropTypes.string,
    date: PropTypes.string,
    options: PropTypes.arrayOf({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
  }),
}),
  otherGuy: PropTypes.shape({
    pseudo: PropTypes.string.isRequired,
  }),
  handleNextStepButton: PropTypes.func.isRequired,
  handleCancelButton: PropTypes.func.isRequired,
};

export default BookingDetail;
