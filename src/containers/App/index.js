import { connect } from 'react-redux';
import App from 'src/components/App';

const mapStateToProps = (state) => ({
  pressedConnected: state.user.pressedConnected,
  foundMachines: state.machines.foundMachines,
  openMenu: state.user.openMenu,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
