import { connect } from 'react-redux';
import MachineDetail from 'src/components/MachineDetail';
import { findMachine } from 'src/selectors/machines';

const mapStateToProps = (state, ownProps) => {
  console.log('ownProps', ownProps);
  return ({
    days: ['21 janvier', '21 janvier', '21 janvier', '21 janvier', '21 janvier', '21 janvier', '21 janvier', '21 janvier', '21 janvier', '21 janvier', '21 janvier'],
    hours: ['13h', '13h', '13h', '13h', '13h', '13h', '13h', '14h'],
    machine: findMachine(state.machines.foundMachines, ownProps.match.params.id),
  }
  );
};
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MachineDetail);
