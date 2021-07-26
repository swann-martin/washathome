import { connect } from 'react-redux';
import AddWasherForm from '../../components/AddWasherForm';
import { addMachineInputChange } from '../../actions/machines';

const mapStateToProps = (state) => ({

  name: state.machines.inputs.name,
  address: state.machines.inputs.address,
  zip_code: state.machines.inputs.zip_code,
  city: state.machines.inputs.city,
  price: state.machines.inputs.price,
  description: state.machines.inputs.description,
  picture: state.machines.inputs.picture,

});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    console.log(value, name);
    const action = addMachineInputChange({ [name]: value });
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddWasherForm);
