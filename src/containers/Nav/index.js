import { connect } from 'react-redux';
import Nav from 'src/components/Nav';
import { toggleConnected } from '../../actions/user';

const mapStateToProps = (state) => ({
  isConnected: state.user.isConnected,
  avatar: state.user.avatar,
});

const mapDispatchToProps = (dispatch) => ({
  handlePressedConnected: () => {
    const action = toggleConnected();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
