import { connect } from 'react-redux';
import MyMachines from '../../components/MyMachines';
import { updateMachine, machineInputChange, deleteMachine } from '../../actions/machines';

const mapStateToProps = (state) => ({

  title: state.user.machine[0].name,
  address: state.user.machine[0].address,
  zip_code: state.user.machine[0].zip_code,
  city: state.user.machine[0].city,
  price: state.user.machine[0].price,
  description: state.user.machine[0].description,
  picture: state.user.machine[0].picture,
  capacity: state.user.machine[0].capacity,
  machines: state.user.machine,
  isConnected: state.user.isConnected,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    const action = machineInputChange({ [name]: value });
    dispatch(action);
  },
  handleUpdateWasher: (evt) => {
    evt.preventDefault();
    const action = updateMachine();
    dispatch(action);
  },
  handleDeleteWasher: (evt) => {
    evt.preventDefault();
    const action = deleteMachine();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MyMachines);
