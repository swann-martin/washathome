import { connect } from 'react-redux';
import AddWasherForm from '../../components/AddWasherForm';
import { addMachineInputChange, addMachineFormSubmit } from '../../actions/machines';

const mapStateToProps = (state) => ({

  title: state.machines.inputs.title,
  address: state.machines.inputs.address,
  zip_code: state.machines.inputs.zip_code,
  city: state.machines.inputs.city,
  price: state.machines.inputs.price,
  description: state.machines.inputs.description,
  picture: state.machines.inputs.picture,
  capacity: state.machines.inputs.capacity,
  machines: state.user.machine,
  isConnected: state.user.isConnected,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    const action = addMachineInputChange({ [name]: value });
    dispatch(action);
  },
  changeSelect: (event) => {
    const action = addMachineInputChange({ [event.target.name]: event.currentTarget.value });
    dispatch(action);
  },
  handleWasherFormSubmit: (event, state) => {
    event.preventDefault();
    const action = addMachineFormSubmit(
      {
        address: state.machines.inputs.address,
        title: state.machines.inputs.title,
        picture: state.machines.inputs.picture,
        description: state.machines.inputs.description,
        price: state.machines.input.price,
        capacity: state.machines.inputs.capacity,
        zip_code: state.machines.inputs.zip_code,
        city: state.machines.inputs.city,
      },
    );
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddWasherForm);
