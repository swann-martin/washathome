import { connect } from 'react-redux';
import { profileUserInputChange, deleteUserFormSubmit, updateUserFormSubmit, toggleMenu } from 'src/actions/user';
import Profile from '../../pages/Profile';

const mapStateToProps = (state) => ({

  lastname: state.user.user.user_lastname,
  firstname: state.user.user.user_firstname,
  pseudo: state.user.user.user_pseudo,
  mail: state.user.user.user_mail,
  avatar: state.user.user.user_avatar,
  phone: state.user.user.user_phone,
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
