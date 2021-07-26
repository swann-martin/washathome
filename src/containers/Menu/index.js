import { connect } from 'react-redux';
import Menu from '../../components/Menu';
import { userLogout } from '../../actions/user';

const mapStateToProps = (state) => ({
  isConnected: state.user.isConnected,

});

const mapDispatchToProps = (dispatch) => ({

  handleLogout: () => {
    console.log('logout');
    const action = userLogout();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
