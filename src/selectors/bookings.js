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
      console.log('testedBookingID', testedBooking.resa.idResa);
      console.log('searchedId', searchedId);
      return testedBooking.resa.idResa == searchedId;
    });
    if (booking) {
      return booking;
    }
  }
}
