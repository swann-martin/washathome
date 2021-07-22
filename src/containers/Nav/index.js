import { connect } from 'react-redux';
import Nav from 'src/components/Nav';

const mapStateToProps = (state) => ({
  isConnected: state.user.isConnected,
  avatar: state.user.avatar,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
