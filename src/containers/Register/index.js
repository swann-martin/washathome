import { connect } from 'react-redux';
import { registerUserInputChange, registerUserFormSubmit } from 'src/actions/user';
import Register from '../../pages/Register';

const mapStateToProps = (state) => ({

  lastname: state.user.register.lastname,
  firstname: state.user.register.firstname,
  pseudo: state.user.register.pseudo,
  mail: state.user.register.mail,
  password: state.user.register.password,
  phone: state.user.register.phone,
  avatar: state.user.register.avatar,
  cgu: state.user.register.cgu,
  passwordConfirm: state.user.register.passwordConfirm,

});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    console.log(value, name);
    const action = registerUserInputChange({ [name]: value });
    dispatch(action);
  },

  handleRegisterFormSubmit: (evt) => {
    evt.preventDefault();
    const action = registerUserFormSubmit();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
