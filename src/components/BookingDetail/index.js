import React from 'react';
import PropTypes from 'prop-types';
import StatusButton from 'src/components/StatusButton';
import AddressDetail from 'src/components/AddressDetail';

import './styles.scss';

const BookingDetail = ({
  booking, handleNextStepButton, handleCancelButton,
}) => (
  <div>
    {console.log('booking', booking)}
    <h2>Reservation de la machine {booking.machine.name}</h2>
    <div>
      <span> Bringer: {booking.bringer.pseudo}</span>

      <span>Etape de la réservation: {booking.resa.status_name}</span>
      <span>Informations: {booking.resa.dispo}</span>
      <span>Température: {booking.resa.tempResa}</span>
      <ul>
        {
          !booking.resa.options.length === 0
          && booking.resa.options.map((option) => (
            <li>{option.name} {option.price}€</li>
          ))}
      </ul>
      <span>Prix total: {booking.resa.price}€</span>
      <StatusButton onClick={handleCancelButton} value={1} statusName="Confirmer la reservation" />
      <StatusButton onClick={handleCancelButton} value={2} statusName="Confirmer le dépôt" />
      <StatusButton onClick={handleCancelButton} value={3} statusName="En cours de lavage" />
      <StatusButton onClick={handleCancelButton} value={4} statusName="Lavage terminé" />
      <StatusButton onClick={handleCancelButton} value={5} statusName="Linge récupéré" />
      <StatusButton onClick={handleCancelButton} value={6} statusName="Annuler la reservation" />
    </div>
    <AddressDetail />
  </div>
);

export default BookingDetail;
