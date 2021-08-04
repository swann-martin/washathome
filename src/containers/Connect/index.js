import { connect } from 'react-redux';
import Connect from 'src/components/Connect';
import { inputChange, loginFormSubmit, userLogout, toggleConnected } from '../../actions/user';

const mapStateToProps = (state) => ({
  inputs: state.user.inputs,
  isConnected: state.user.isConnected,
  mail: state.user.inputs.mail,
  password: state.user.inputs.password,
});

const mapDispatchToProps = (dispatch) => ({

  changeField: (value, name) => {
    console.log(value, name);
    const action = inputChange({ [name]: value });
    dispatch(action);
  },
  handleLogin: () => {
    const action = loginFormSubmit();
    dispatch(action);
  },
  handlePressedConnected: () => {
    const action = toggleConnected();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Connect);
