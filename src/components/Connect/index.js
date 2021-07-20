import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Connect = ({ handlePressedConnected }) => (
  <div className="connect">
    <div
      className="connect-btn"
      title="fermer cette fenêtre"
      onClick={() => {
        console.log('fermer le composant login'); handlePressedConnected();
      }}
    ><i className="fas fa-times" />
    </div>
    <form
      className="connect-form"
      onSubmit={(evt) => {
        evt.preventDefault();
      }}
    >
      <input className="connect-form-input" type="text" name="login" placeholder="login" />
      <input type="password" className="connect-form-input" name="password" placeholder="mot de passe" />
      <button
        type="submit"
        className="connect-form-btn"
        onClick={() => {
          console.log('clicked on se connecter'); handlePressedConnected();
        }}
      >Se connecter
      </button>
      <p className="connect-form-text">Ou</p>
      <Link
        className="connect-form-register"
        to="/register"
        onClick={() => {
          handlePressedConnected();
        }}
      >S'inscrire
      </Link>
    </form>
  </div>
);
export default Connect;
