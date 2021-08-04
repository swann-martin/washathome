import { connect } from 'react-redux';
import MachineDetail from 'src/components/MachineDetail';
import { findMachine } from 'src/selectors/machines';
import { bookingFormSubmit, bookingInputChange } from 'src/actions/bookings';

const mapStateToProps = (state, ownProps, store) => ({
  dispo: state.bookings.inputs.dispo,
  machine: findMachine(state.machines.foundMachines, ownProps.match.params.id, store),
  machineId: state.bookings.inputs.machineId,
  washerId: state.bookings.inputs.washerId,
  isConnected: state.user.isConnected,
});
const mapDispatchToProps = (dispatch) => ({
  changeField: (event) => {
    const action = bookingInputChange({ [event.target.name]: event.target.value });
    dispatch(action);
  },
  changeSelect: (event) => {
    const action = bookingInputChange({ [event.target.name]: event.currentTarget.value });
    dispatch(action);
  },
  handleBookingsFormSubmit: (evt) => {
    evt.preventDefault();
    const action = bookingFormSubmit();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MachineDetail);
