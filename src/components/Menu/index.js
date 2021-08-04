import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.scss';

const Menu = ({ handleOpenMenu, handleLogout }) => (
  <div className="menu">
    <div
      className="menu-btn menu-btn--close"
      title="fermer cette fenêtre"
      onClick={() => {
        console.log('fermer le composant login'); handleOpenMenu();
      }}
    ><i className="fas fa-times" />
    </div>
    <Link to="/bookings" type="button" className="menu-btn menu-btn--booking" onClick={handleOpenMenu}><i className="fas fa-book" /> Mes réservations</Link>
    <Link to="/profile" type="button" className="menu-btn menu-btn--profile" onClick={handleOpenMenu}><i className="fas fa-user" /> Mon profil</Link>
    <Link to="/MyMachines" type="button" className="menu-btn menu-btn--washers" onClick={handleOpenMenu}><i className="fas fa-soap" /> Mes Machines</Link>
    <div type="button" className="menu-btn menu-btn--disconnect" onClick={handleLogout}> <i className="fas fa-sign-out-alt" /> Se déconnecter</div>
  </div>
);

Menu.propTypes = {
  handleOpenMenu: PropTypes.func,
  handleLogout: PropTypes.func,
};

Menu.defaultProps = {
  handleOpenMenu: () => { },
  handleLogout: () => { },
};

export default Menu;
