import React from 'react';
import PropTypes from 'prop-types';
import StatusButton from 'src/components/StatusButton';
import AddressDetail from 'src/components/AddressDetail';

import './styles.scss';

const BookingDetail = ({
  machine, resa, otherGuy, handleNextStepButton, handleCancelButton,
}) => (
  <div>
    <h2>Reservation de la machine {machine.name}</h2>
    <div>
      <span> Bringer: {otherGuy.pseudo}</span>

      <span>Etape de la réservation: {resa.status_name}</span>
      <span>Informations: {resa.dispo}</span>
      <span>Température: {resa.tempResa}</span>
      <ul>
        { !resa.options.length === 0
          && resa.options.map((option) => (
            <li>{option.name} {option.price}€</li>
          ))}
      </ul>
      <span>Prix total: {resa.price}€</span>
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
