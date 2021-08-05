import { connect } from 'react-redux';
import MyMachines from '../../components/MyMachines';
import { updateMachine, machineInputChange, deleteMachine } from '../../actions/machines';

const mapStateToProps = (state) => ({

  title: state.user.machine[0].title,
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
  changeSelect: (event) => {
    const action = machineInputChange({ [event.target.name]: event.currentTarget.value });
    dispatch(action);
  },
  handleUpdateWasher: (event) => {
    event.preventDefault();
    const action = updateMachine();
    dispatch(action);
  },
  handleDeleteWasher: (event) => {
    event.preventDefault();
    const action = deleteMachine();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MyMachines);
