import { connect } from 'react-redux';
import Profile from '../../pages/Profile';

const mapStateToProps = (state) => ({

  lastname: state.user.user.lastname,
  firstname: state.user.user.firstname,
  pseudo: state.user.user.pseudo,
  mail: state.user.user.mail,
  password: state.user.user.lastname,
  avatar: state.user.user.avatar,
  phone: state.user.user.phone,

});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    console.log(value, name);
    const action = ProfileUserInputChange({ [name]: value });
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
