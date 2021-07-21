import { connect } from 'react-redux';
import Connect from 'src/components/Connect';
import { loginInputChange } from '../../actions/user';

const mapStateToProps = (state) => ({
  inputs: state.user.inputs,
  isConnected: state.user.isConnected,
  mail: state.user.inputs.mail,
  password: state.user.inputs.password,
});

const mapDispatchToProps = (dispatch) => ({

  changeField: (value, name) => {
    console.log(value, name);
    const action = loginInputChange({ [name]: value });
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Connect);
