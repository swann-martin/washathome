import { connect } from 'react-redux';
import App from 'src/components/App';
import { initApp } from 'src/actions/app';

const mapStateToProps = (state) => ({
  isConnected: state.user.isConnected,
  pressedConnected: state.user.pressedConnected,
  foundMachines: state.machines.foundMachines,
  openMenu: state.user.openMenu,
});

const mapDispatchToProps = (dispatch) => ({
  initApp: () => {
    dispatch(initApp());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
