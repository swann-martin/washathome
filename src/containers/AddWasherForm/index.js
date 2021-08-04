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

});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    const action = addMachineInputChange({ [name]: value });
    dispatch(action);
  },
  handleWasherFormSubmit: (evt) => {
    evt.preventDefault();
    const action = addMachineFormSubmit();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddWasherForm);
