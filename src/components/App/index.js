// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes, { object } from 'prop-types';

// Import components
import { initApp } from 'src/actions/app';
import PasswordChangeForm from 'src/containers/PasswordChangeForm';
import Connect from 'src/containers/Connect';
import Cards from 'src/containers/Cards';
import Nav from 'src/containers/Nav';
import Loader from '../Loader';
import AddWasherForm from '../../containers/AddWasherForm';
import MyMachines from '../../containers/MyMachines';
import Profile from '../../containers/Profile';
import Menu from '../../containers/Menu';
import Header from '../Header';
import Footer from '../Footer';
import MachineDetail from '../../containers/MachineDetail';
import Bookings from '../../containers/Bookings';
import BookingDetail from '../../containers/BookingDetail';

// == Import
import Register from '../../containers/Register';
import Cgu from '../../pages/Cgu';
import Team from '../../pages/Team';
// Import style
import './styles.scss';

const App = ({
  pressedConnected,
  foundMachines,
  openMenu,
}) => (

  <div className="app">
    <Nav />
    <Switch>
      <Route exact path="/">
        <Header foundMachines={foundMachines} />
        <Cards />
      </Route>
      <Route path="/changePassword" component={PasswordChangeForm} />
      <Route path="/cgu" component={Cgu} />
      <Route path="/register" component={Register} />
      <Route path="/addwasher" component={AddWasherForm} />
      <Route path="/profile" component={Profile} />
      <Route path="/bookings" component={Bookings} />
      <Route exact path="/bookingDetail/:id" component={BookingDetail} />
      <Route path="/searchresult" component={Cards} />
      <Route path="/team" component={Team} />
      <Route exact path="/machineDetail/:id" component={MachineDetail} />
      <Route exact path="/MyMachines" component={MyMachines} />
    </Switch>
    {pressedConnected && <Connect />}
    {openMenu && <Menu />}
    <Footer />
  </div>
);

App.propTypes = {
  pressedConnected: PropTypes.bool.isRequired,
  openMenu: PropTypes.bool.isRequired,
  foundMachines: PropTypes.arrayOf(object),
};

App.defaultProps = {
  foundMachines: [],
};
// == Export
export default App;
