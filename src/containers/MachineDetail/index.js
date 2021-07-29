import { connect } from 'react-redux';
import MachineDetail from 'src/components/MachineDetail';
import { findMachine } from 'src/selectors/machines';
import { bookingsFormSubmit } from 'src/actions/bookings';


const mapStateToProps = (state, ownProps) => {
  console.log('ownProps', ownProps);
  return ({
    days: ['29 juillet', '30 juillet', '31 juillet', '1 août', '2 août', '3 août', '4 août'],
    hours: ['7h-7h30', '8h-8h30', '8h30-9h', '9h-9h30', '12h-12h30', '12h30-13h', '13h00-13h30', '13h30-14h00', '17h-17h30', '17h30-18h', '18h-18h30', '18h30-19h', '19h-19h30', '19h30-20h'],
    machine: findMachine(state.machines.foundMachines, ownProps.match.params.id),
  }
  );
};
const mapDispatchToProps = (dispatch) => ({
  handleBookingsFormSubmit: (evt) => {
    evt.preventDefault();
    const action = bookingsFormSubmit();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MachineDetail);
