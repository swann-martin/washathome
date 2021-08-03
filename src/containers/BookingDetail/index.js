import { connect } from 'react-redux';
import BookingDetail from 'src/components/BookingDetail';
import { fetchBookings, updateBookingStatus } from 'src/actions/bookings';
import { findBooking } from '../../selectors/bookings';

const mapStateToProps = (state, ownProps) => ({
  isConnected: state.user.isConnected,
  // bringerBookings: state.bookings.bringerBookings,
  // washerBookings: state.bookings.washerBookings,
  // machine: state.bookings.washerBookings[0].machine,
  // resa: state.bookings.washerBookings[0].resa,
  // otherGuy: state.bookings.washerBookings[0].bringer,
  booking: findBooking([state.bookings.washerBookings, state.bookings.bringerBookings],
    ownProps.match.params.id),
  status: state.bookings.status,
  userPseudo: state.user.user.pseudo,
});

const mapDispatchToProps = (dispatch) => ({
  getBookings: () => {
    const action = fetchBookings();
    dispatch(action);
  },
  handleStatusButton: (event) => {
    const action = updateBookingStatus({
      status_id: event.target.value[0],
      bookingId: event.target.value[2],
    });
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BookingDetail);
