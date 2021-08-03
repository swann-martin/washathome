import { connect } from 'react-redux';
import BookingDetail from 'src/components/BookingDetail';
import { fetchBookings } from 'src/actions/bookings';
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
});

const mapDispatchToProps = (dispatch) => ({
  getBookings: () => {
    const action = fetchBookings();
    dispatch(action);
  },

  handleNextStepButton: () => { },
  handleCancelButton: () => { },

});

export default connect(mapStateToProps, mapDispatchToProps)(BookingDetail);
