import { connect } from 'react-redux';
import Bookings from 'src/components/Bookings';
import { fetchBookings } from 'src/actions/bookings';

const mapStateToProps = (state) => ({
  isConnected: state.user.isConnected,
  bringerBookings: state.bookings.bringerBookings,
  washerBookings: state.bookings.washerBookings,
});

const mapDispatchToProps = (dispatch) => ({
  getBookings: () => {
    const action = fetchBookings();
    dispatch(action);
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(Bookings);
