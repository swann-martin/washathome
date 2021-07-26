import { connect } from 'react-redux';
import { profileUserInputChange, deleteUserFormSubmit} from 'src/actions/user';
import Profile from '../../pages/Profile';

const mapStateToProps = (state) => ({

  lastname: state.user.user.lastname,
  firstname: state.user.user.firstname,
  pseudo: state.user.user.pseudo,
  mail: state.user.user.mail,
  password: state.user.user.password,
  passwordConfirm: state.user.user.passwordConfirm,
  avatar: state.user.user.avatar,
  phone: state.user.user.phone,
  token: state.user.token,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    console.log(value, name);
    const action = profileUserInputChange({ [name]: value });
    dispatch(action);
  },

  deleteUser: () => {
    const action = deleteUserFormSubmit();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
