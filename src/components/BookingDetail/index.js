import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AddressDetail from 'src/components/AddressDetail';

import './styles.scss';
import { Redirect, Link } from 'react-router-dom';

const BookingDetail = ({
  booking,
  handleStatusButton,
  status,
  userPseudo,
  isConnected,
}) => {
  useEffect(() => { console.log('status', status) }, [status]);

  return (

    !isConnected ? <Redirect to="/" /> : (
      <div className="booking-details">
        <h2 className="booking-details-title">Reservation de la machine {booking ? booking.machine.name : 'titre de la machine'}</h2>

        {/* bouton de retour */}

        <Link
          to="/bookings"
          className="booking-details-btn--close"
          title="retour à la page mes réservations"
          onClick={() => {
            console.log('fermer le composant');
          }}
        ><i className="fas fa-arrow-circle-left" />
        </Link>



        <div className="booking-details-container">

          {
            /* affichage de la map uniquement si on est le binger*/
            (booking.washer.pseudo !== userPseudo) &&
            (
              <AddressDetail
                className="booking-details-container-map"
                machineLatitude={booking.machine.latitude}
                machineLongitude={booking.machine.longitude}
                address={booking.machine.address}
                zip_code={booking.machine.zip_code}
                city={booking.machine.city}
                phone={booking.washer.phone}
                mail={booking.washer.mail}
                statusId={booking.resa.status_id}
              />
            )
          }

          {/* affichage des informations en fonction de la personne connectée si on est le binger*/}

          <div className={(booking.washer.pseudo !== userPseudo) ? "booking-details-container-right" : "booking-details-container-right booking-details-container-right--big "}>
            {(booking.washer.pseudo !== userPseudo) &&
              <p className="booking-details-container-right-item"> {(booking.washer.pseudo === userPseudo) ? 'Vous: ' : 'Propriétaire de la machine: '}{booking ? <span className="booking-details-container-right-item-element booking-details-container-right-item-element--pseudo">{booking.washer.pseudo}</span> : <span className="booking-details-container-right-item-element">pseudo du bringer</span>}</p>
            }
            <p className="booking-details-container-right-item"> {(booking.bringer.pseudo === userPseudo) ? 'Vous: ' : 'Client souhaitant laver son linge: '}{booking ? <span className="booking-details-container-right-item-element booking-details-container-right-item-element--pseudo">{booking.bringer.pseudo}</span> : <span className="booking-details-container-right-item-element">pseudo du bringer</span>}</p>
            <p className="booking-details-container-right-item">Etape en cours de la réservation: {booking ? <span className="booking-details-container-right-item-element booking-details-container-right-item-element--status">{booking.resa.status_name}</span> : <span className="booking-details-container-right-item-element">Status réservé</span>}</p>
            <p className="booking-details-container-right-item">{(booking.bringer.pseudo === userPseudo) ? 'Informations que vous avez indiquées: ' : 'Informations indiquées par le client:  '}{booking ? <span className="booking-details-container-right-item-element booking-details-container-right-item-element--pseudo">{booking.resa.dispo}</span> : <span className="booking-details-container-right-item-element">disponibilités</span>}</p>
            <p className="booking-details-container-right-item">Température de nettoyage: {booking ? <span className="booking-details-container-right-item-element booking-details-container-right-item-element--pseudo">{booking.resa.tempResa}°c</span> : <span className="booking-details-container-right-item-element">39°c</span>}</p>
            <ul className="booking-details-container-right-list">
              {booking
                && (!booking.resa.options.length === 0
                  && booking.resa.options.map((option) => (
                    <li key={option.name}>{option.name} {option.price}€</li>
                  )))}
            </ul>

            {
              /*  affichage de l'adresse seulement si le status est confirmé ou non annulé */
              (booking.bringer.pseudo === userPseudo && booking.resa.status_id > 1 && booking.resa.status_id < 5) &&
              (
                <div>
                  <h2>Nous vous laissons contacter le washer</h2>
                  <p className="booking-details-container-right-item">email : {booking.washer.mail}</p>
                  <p className="booking-details-container-right-item">téléphone : {booking.washer.phone}</p>
                  <p className="booking-details-container-right-item">pseudo : {booking.washer.pseudo}</p>
                </div>
              )
            }

            <p className="booking-details-container-right-item"> Prix total: {booking ? <span className="booking-details-container-right-item-element booking-details-container-right-item-element--pseudo">{booking.resa.price}€</span> : <span className="booking-details-container-right-item-element">2€</span>}</p>

            <div className="booking-details-container-right-btnGroup">

              {(booking.washer.pseudo === userPseudo) &&
                (
                  <>
                    {status === 1 ? <button className="booking-details-container-right-btnGroup-btn" type="button" onClick={handleStatusButton} value={[2, booking.resa.idResa]}>Next: Confirmez la réservation</button> : null}
                    {status === 2 ? <button className="booking-details-container-right-btnGroup-btn" type="button" onClick={handleStatusButton} value={[3, booking.resa.idResa]}>Next: Confirmez le dépôt</button> : null}
                    {status === 3 ? <button className="booking-details-container-right-btnGroup-btn" type="button" onClick={handleStatusButton} value={[4, booking.resa.idResa]}>Next: Lavage terminé</button> : null}
                    {status === 4 ? <button className="booking-details-container-right-btnGroup-btn" type="button" onClick={handleStatusButton} value={[5, booking.resa.idResa]}>Next: Linge récupéré</button> : null}
                    {status === 5 ? <span className="booking-details-container-right-btnGroup-btn booking-details-container-right-btnGroup-btn--cancel">Reservation Terminée</span> : null}
                    {status === 6 ? <span className="booking-details-container-right-btnGroup-btn booking-details-container-right-btnGroup-btn--cancel ">Reservation annulée</span> : null}
                  </>

                )
              }

              {status !== 6 ? <button className="booking-details-container-right-btnGroup-btn--cancel booking-details-container-right-btnGroup-btn" type="button" onClick={handleStatusButton} value={[6, booking.resa.idResa]}>Annuler la reservation</button> : null}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

BookingDetail.propTypes = {
  booking: PropTypes.object,
  status: PropTypes.number,
  userPseudo: PropTypes.string,
  isConnected: PropTypes.bool,
  handleStatusButton: PropTypes.func,
};
BookingDetail.defaultProps = {
  booking: {},
  status: null,
  userPseudo: '',
  isConnected: '',
  handleStatusButton: '',
};

export default BookingDetail;
