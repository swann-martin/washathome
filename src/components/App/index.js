// == Import npm
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes, { object } from 'prop-types';

// Import components
import Loader from '../Loader';
import Connect from 'src/containers/Connect';
import Cards from 'src/containers/Cards';
import Nav from 'src/containers/Nav';
import AddWasherForm from '../../containers/AddWasherForm';
import Profile from '../../containers/Profile';
import Menu from '../../containers/Menu';
import Header from '../Header';
import Footer from '../Footer';
import MachineDetail from '../../containers/MachineDetail';
import Bookings from '../../containers/Bookings';
import BookingDetail from '../BookingDetail';


// == Import
import Register from '../../containers/Register';
import Cgu from '../../pages/Cgu';
import Team from '../../pages/Team';
// Import style
import './styles.scss';
import { initApp } from '../../actions/app';

const App = ({ pressedConnected, foundMachines, openMenu, loading }) => {
  useEffect(() => {
    initApp();
  }, [foundMachines]);
  return (
    <div className="app">
      <Nav />
      <Switch>
        <Route exact path="/">
          {loading && <Loader />}
          <Header foundMachines={foundMachines} />
          {/* <BookingDetail /> */}
          <Cards />
        </Route>
        <Route path="/cgu" component={Cgu} />
        <Route path="/register" component={Register} />
        <Route path="/addwasher" component={AddWasherForm} />
        <Route path="/profile" component={Profile} />
        <Route path="/bookings" component={Bookings} />
        <Route path="/bookingDetail/:id" component={BookingDetail} />
        <Route path="/searchresult" component={Cards} />
        <Route path="/team" component={Team} />
        <Route exact path="/machineDetail/:id" component={MachineDetail} />
      </Switch>
      {pressedConnected && <Connect />}
      {openMenu && <Menu />}
      <Footer />
    </div>
  );
};

App.propTypes = {
  isConnected: PropTypes.bool.isRequired,
  pressedConnected: PropTypes.bool.isRequired,
  openMenu: PropTypes.bool.isRequired,
  foundMachines: PropTypes.arrayOf(object),
  loading: PropTypes.bool.isRequired,
};

App.defaultProps = {
  foundMachines: [],
};
// == Export
export default App;
