import { connect } from 'react-redux';
import Bookings from 'src/components/Bookings';


const mapStateToProps = (state) => ({
  isConnected: state.user.isConnected,

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Bookings);
