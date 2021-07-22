import { connect } from 'react-redux';
import Register from '../../pages/Register';

const mapStateToProps = (state) => ({
  user: {
    lastname: state.user.user.lastname,
    first: state.user.user.firstname,
    pseudo: state.user.user.pseudo,
    mail: state.user.user.mail,
    password: state.user.user.lastname,
    avatar: state.user.user.avatar,
  },

});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    console.log(value, name);
    const action = RegisterUserInputChange({ [name]: value });
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
