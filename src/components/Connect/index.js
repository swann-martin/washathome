import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.scss';

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
        <Field className="connect-form-input" type="text" name="mail" value={mail} onChange={changeField} placeholder="Votre email" />
        <Field className="connect-form-input" type="password" name="password" value={password} onChange={changeField} placeholder="Votre mot de passe" />
        <div className="connect-form-btnGroup">
          <button
            type="submit"
            className="connect-form-btnGroup-btn"
            onClick={() => {
              console.log('clicked on se connecter');
            }}
          >Se connecter
          </button>
          <p className="connect-form-btnGroup-text">ou</p>
          <Link
            className="connect-form-btnGroup-btn connect-form-btnGroup-btn--register"
            to="/register"
            onClick={() => {
              handlePressedConnected();
            }}
          >S'inscrire
          </Link>
        </div>
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
