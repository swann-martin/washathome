import { connect } from 'react-redux';
import PasswordChangeForm from '../../components/PasswordChangeForm';
import { updatePasswordFormSubmit, changePasswordInputChange } from '../../actions/user';

const mapStateToProps = (state) => ({
  password: state.user.passwordChange.password,
  passwordConfirm: state.user.passwordChange.passwordConfirm,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    const action = changePasswordInputChange({ [name]: value });
    dispatch(action);
  },
  handlePasswordChangeFormSubmit: (evt) => {
    evt.preventDefault();
    const action = updatePasswordFormSubmit();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PasswordChangeForm);
