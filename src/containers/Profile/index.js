import { connect } from 'react-redux';
import { profileUserInputChange, deleteUserFormSubmit, updateUserFormSubmit, toggleMenu } from 'src/actions/user';
import Profile from '../../pages/Profile';

const mapStateToProps = (state) => ({

  lastname: state.user.user.lastname,
  firstname: state.user.user.firstname,
  pseudo: state.user.user.pseudo,
  mail: state.user.user.mail,
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

  deleteUser: (evt) => {
    evt.preventDefault();
    const action = deleteUserFormSubmit();
    dispatch(action);
  },

  updateUser: (evt) => {
    evt.preventDefault();
    const action = updateUserFormSubmit();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
