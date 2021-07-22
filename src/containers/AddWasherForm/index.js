import { connect } from 'react-redux';
import AddWasherForm from 'src/components/AddWasherForm';
import { inputChange } from '../../actions/machines';

const mapStateToProps = (state) => ({
  inputs: {
    name: state.machines.inputs.name,
    address: state.machines.inputs.address,
    zip_code: state.machines.inputs.zip_code,
    city: state.machines.inputs.city,
    price: state.machines.inputs.price,
    description: state.machines.inputs.description,
    picture: state.machines.inputs.picture,
  },

});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    console.log(value, name);
    const action = inputChange({ [name]: value });
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddWasherForm);
