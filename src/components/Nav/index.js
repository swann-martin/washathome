import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import logo from 'src/assets/logoWash1.png';
import defaultAvatar from '../../../public/141-200x200.jpg';
// import style
import './styles.scss';

const Nav = ({
  handlePressedConnected,
  isConnected,
  handleOpenMenu,
  avatar,
  pseudo,
}) => (
  <nav className="nav">
    <NavLink exact className="link nav-item nav-item--mobile" activeClassName="link--active" to="/">

      <i className="nav-home-logo fas fa-home" />
      <span className="nav-item-text">home</span>
    </NavLink>
    <NavLink className="link  nav-item nav-item--desktop" activeClassName="link--active" to="/">
      <h1 className="nav-title">
        <img className="nav-title-logo" src={logo} alt="logo" />
        <span className="nav-title-text">Wash@Home</span>
      </h1>
    </NavLink>
    <NavLink className="link link-desktop nav-item nav-item--desktop" activeClassName="nav-item--active" to="/team">
      l'équipe
    </NavLink>
    <NavLink className="link link-desktop nav-item nav-item--desktop" activeClassName="nav-item--active" to="/addwasher">
      ajouter une machine
    </NavLink>

    {!isConnected && (
      <button
        type="button"
        className="nav-item nav-btn nav-btn--user "
        onClick={() => {
          console.log('clicked on btn-nav-user');
          handlePressedConnected();
        }}
      >
        <i className="far fa-user" title="se connecter" />
        <span className="nav-item-text">connexion</span>
      </button>
    )}

    {isConnected && (
      <div
        type="button"
        className={isConnected ? 'nav-item nav-btn nav-btn--user--connected' : 'nav-item nav-btn nav-btn--user'}
        onClick={() => {
          handleOpenMenu();
          console.log('cliked on profile picture');
        }}
      >
        <span>{pseudo}</span>
        <img className="nav-item nav-btn nav-btn--user-profile" src={avatar} alt="user-avatar" />
      </div>
    )}

  </nav>
);

Nav.propTypes = {
  handlePressedConnected: PropTypes.func,
  isConnected: PropTypes.bool,
  handleOpenMenu: PropTypes.func,
  avatar: PropTypes.string,
  pseudo: PropTypes.string,
};

Nav.defaultProps = {
  isConnected: false,
  avatar: defaultAvatar,
  pseudo: '',
  handlePressedConnected: () => { },
  handleOpenMenu: () => { },
};
export default Nav;
