import { currentBookingUpdate } from 'src/actions/bookings';
import store from 'src/store';
/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

/**
* @param {Array} bookings - toutes les resa
* @param {string} searchedId - le slug de la resa recherchée
* @return {Object} - La resa trouvée
*/
export function findBooking(userBookings, searchedId) {
  for (const bookings of userBookings) {
    const booking = bookings.find((testedBooking) => {
      return testedBooking.resa.idResa == searchedId;
    });
    if (booking) {
      const action = currentBookingUpdate({
        status_id: booking.resa.status_id,
        booking_id: booking.resa.idResa,
      });
      store.dispatch(action);
      return booking;
    }
  }
}
