import { connect } from 'react-redux';
import MachineDetail from 'src/components/MachineDetail';
import { findMachine } from 'src/selectors/machines';
import { bookingFormSubmit, bookingInputChange } from 'src/actions/bookings';

const mapStateToProps = (state, ownProps) => ({
  dispo: state.bookings.inputs.dispo,
  temprature: state.bookings.inputs.temperature,
  machine: findMachine(state.machines.foundMachines, ownProps.match.params.id),
  options: {
    option1: state.bookings.inputs.options.options1,
    option2: state.bookings.inputs.options.options2,
    option3: state.bookings.inputs.options.options3,
  },
});
const mapDispatchToProps = (dispatch) => ({
  changeField: (event) => {
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
