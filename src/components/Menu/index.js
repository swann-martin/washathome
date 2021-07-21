import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Menu = ({ handleOpenMenu }) => (
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
    <Link to="/addwasher" type="button" className="menu-btn menu-btn--washers" onClick={handleOpenMenu}><i className="fas fa-soap" /> Mes Machines</Link>
    <Link to="/settings" type="button" className="menu-btn menu-btn--settings" onClick={handleOpenMenu}><i className="fas fa-cog" /> user settings</Link>
  </div>
);

export default Menu;
