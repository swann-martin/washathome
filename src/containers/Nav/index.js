import { connect } from 'react-redux';
import Nav from 'src/components/Nav';
import { toggleConnected, toggleMenu } from '../../actions/user';

const mapStateToProps = (state) => ({
  isConnected: state.user.isConnected,
  avatar: state.user.user.user_avatar,
});

const mapDispatchToProps = (dispatch) => ({
  handlePressedConnected: () => {
    const action = toggleConnected();
    dispatch(action);
  },
  handleOpenMenu: () => {
    const action = toggleMenu();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
