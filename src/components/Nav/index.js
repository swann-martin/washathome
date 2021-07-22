import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from 'src/assets/logoWash.png';
// import style
import './style.scss';

const Nav = ({ handlePressedConnected, isConnected, handleOpenMenu }) => (
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
    <NavLink className="link link-desktop nav-item nav-item--desktop" activeClassName="link--active" to="/findmachine">
      trouver une machine
    </NavLink>
    <NavLink className="link link-desktop nav-item nav-item--desktop" activeClassName="link--active" to="/addwasher">
      ajouter une machine
    </NavLink>
    <button
      type="button"
      className="nav-item nav-btn nav-btn--search nav-item--mobile"
      onClick={() => {
        console.log('clicked on btn-nav-user');
      }}
    >
      <i className="fas fa-search-location" />
      <span className="nav-item-text">search location</span>
    </button>
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
      <button
        type="button"
        className="nav-item nav-btn nav-btn--user"
        onClick={() => {
          handleOpenMenu();
          console.log('cliked on profile picture');
        }}
      >
        <img className="nav-item nav-btn nav-btn--user-profile" src="https://randomuser.me/api/portraits/women/60.jpg" alt="random-user" />
      </button>
    )}

  </nav>
);
export default Nav;
