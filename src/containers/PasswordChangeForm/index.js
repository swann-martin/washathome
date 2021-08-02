import { connect } from 'react-redux';
import PasswordChangeForm from '../../components/PasswordChangeForm';
import { } from '../../actions/user';

const mapStateToProps = (state) => ({
    password: state.register.password,
    passwordConfirm: state.register.passwordConfirm,
});

const mapDispatchToProps = (dispatch) => ({
    changeField: (value, name) => {
        const action = changePasswordInputChange({ [name]: value });
        dispatch(action);
    },
    handlePasswordChangeFormSubmit: (evt) => {
        evt.preventDefault();
        const action = changePasswordFormSubmit();
        dispatch(action);
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(PasswordChangeForm);
