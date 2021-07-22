import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './style.scss';

import Field from '../Field';

const Connect = ({
  handlePressedConnected, handleIsConnected, mail, password, changeField, handleLogin,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
    handleIsConnected();
  };
  return (
    <div className="connect">
      <div
        className="connect-btn connect-btn--close"
        title="fermer cette fenêtre"
        onClick={() => {
          console.log('fermer le composant login'); handlePressedConnected();
        }}
      ><i className="fas fa-times" />
      </div>
      <form
        className="connect-form"
        onSubmit={handleSubmit}
      >
        <Field type="text" name="mail" value={mail} onChange={changeField} placeholder="votre email" />
        <Field type="password" name="password" value={password} onChange={changeField} placeholder="mot de passe" />

        <button
          type="submit"
          className="connect-form-btn"
          onClick={() => {
            console.log('clicked on se connecter');
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
};
Connect.propTypes = {
  handlePressedConnected: PropTypes.func,
  handleIsConnected: PropTypes.func,
  mail: PropTypes.string,
  password: PropTypes.string,
  changeField: PropTypes.func,
  handleLogin: PropTypes.func,
};

Connect.defaultProps = {
  handlePressedConnected: () => { },
  handleIsConnected: () => { },
  changeField: () => { },
  handleLogin: () => { },
  mail: '',
  password: '',
};

export default Connect;
