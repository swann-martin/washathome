import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AddressDetail from 'src/components/AddressDetail';

import './styles.scss';

const BookingDetail = ({
  booking, handleStatusButton, status, userPseudo,
}) => {
  useEffect(() => { }, [status]);

  return (
    <div className="booking-details">
      <h2 className="booking-details-title">Reservation de la machine {booking ? booking.machine.name : 'titre de la machine'}</h2>
      <div className="booking-details-container">
        <AddressDetail
          className="booking-details-container-map"
          machineLatitude={booking.machine.latitude}
          machineLongitude={booking.machine.longitude}
        />
        <div className="booking-details-container-right">
          <p className="booking-details-container-right-item"> Bringer: {booking ? <span className="booking-details-container-right-item-element booking-details-container-right-item-element--pseudo">{booking.bringer.pseudo}</span> : <span className="booking-details-container-right-item-element">pseudo du bringer</span>}</p>
          <p className="booking-details-container-right-item">Etape de la réservation: {booking ? <span className="booking-details-container-right-item-element booking-details-container-right-item-element--pseudo">{booking.resa.status_name}</span> : <span className="booking-details-container-right-item-element">Status réservé</span>}</p>
          <p className="booking-details-container-right-item">Informations: {booking ? <span className="booking-details-container-right-item-element booking-details-container-right-item-element--pseudo">{booking.resa.dispo}</span> : <span className="booking-details-container-right-item-element">disponibilités</span>}</p>
          <p className="booking-details-container-right-item">Température: {booking ? <span className="booking-details-container-right-item-element booking-details-container-right-item-element--pseudo">{booking.resa.tempResa}</span> : <span className="booking-details-container-right-item-element">39°c</span>}</p>
          <ul className="booking-details-container-right-list">
            {booking
              && (!booking.resa.options.length === 0
                && booking.resa.options.map((option) => (
                  <li>{option.name} {option.price}€</li>
                )))}
          </ul>

          <p className="booking-details-container-right-item"> Prix total: {booking ? <span className="booking-details-container-right-item-element booking-details-container-right-item-element--pseudo">{booking.resa.price}€</span> : <span className="booking-details-container-right-item-element">2€</span>}</p>

          {(booking.washer.pseudo === userPseudo) &&
            (
              <div className="booking-details-container-right-btnGroup">
                {status === 1 ? <button className="booking-details-container-right-btnGroup-btn" type="button" onClick={handleStatusButton} value={[2, booking.resa.idResa]}>Confirmer la réservation</button> : null}
                {status === 2 ? <button className="booking-details-container-right-btnGroup-btn" type="button" onClick={handleStatusButton} value={[3, booking.resa.idResa]}>Confirmer le dépôt</button> : null}
                {status === 3 ? <button className="booking-details-container-right-btnGroup-btn" type="button" onClick={handleStatusButton} value={[4, booking.resa.idResa]}>Lavage terminé</button> : null}
                {status === 4 ? <button className="booking-details-container-right-btnGroup-btn" type="button" onClick={handleStatusButton} value={[5, booking.resa.idResa]}>Linge récupéré</button> : null}
                {status === 5 ? <span className="booking-details-container-right-btnGroup-btn booking-details-container-right-btnGroup-btn--cancel">Reservation Terminée</span> : null}
                {status === 6 ? <span className="booking-details-container-right-btnGroup-btn booking-details-container-right-btnGroup-btn--cancel ">Reservation annulée</span> : null}
                {status !== 6 ? <button className="booking-details-container-right-btnGroup-btn--cancel booking-details-container-right-btnGroup-btn" type="button" onClick={handleStatusButton} value={[6, booking.resa.idResa]}>Annuler la reservation</button> : null}
              </div>
            )
          }

        </div>
      </div>
    </div>
  );
};

export default BookingDetail;
