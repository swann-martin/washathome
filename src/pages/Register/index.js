import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Field from '../../components/Field';
import './style.scss';

const Register = ({
  lastname,
  pseudo,
  firstname,
  mail,
  phone,
  password,
  passwordConfirm,
  changeField,
  cgu,
  handleRegisterFormSubmit,
}) => {
  const handleCguCheckboxChange = (evt) => {
    changeField(evt.target.value, evt.target.name);
  };
  const onFileChange = (evt) => {
    changeField(evt.target.files[0], evt.target.name);
  };

  return (
    <div className="register">
      <Link
        to="/"
        className="register-btn register-btn--close"
        title="fermer cette fenêtre"
        onClick={() => {
          console.log('fermer le composant ');
        }}
      ><i className="fas fa-times" />
      </Link>

      <form
        onSubmit={handleRegisterFormSubmit}
        className="register-form"
        encType="multipart/form-data"
      >
        <div className="register-form-left">
          <Field className="register-form-input" type="text" name="firstname" value={firstname} placeholder="Prénom ex: Alex" onChange={changeField} />
          <Field className="register-form-input" type="text" name="lastname" value={lastname} placeholder="Nom ex: Dupont" onChange={changeField} />
          <Field className="register-form-input" type="text" name="pseudo" value={pseudo} placeholder="login ex: alexdupt331" onChange={changeField} />
          <Field className="register-form-input" type="tel" name="phone" value={phone} placeholder="tél ex: 0606060606" onChange={changeField} />
        </div>
        <div className="register-form-right">
          <Field className="register-form-input" type="email" name="mail" value={mail} placeholder="email ex: fauxemail@fakemail.com" onChange={changeField} />
          <Field className="register-form-input" type="password" name="password" value={password} placeholder="mot de passe" onChange={changeField} />
          <Field className="register-form-input" type="password" name="passwordConfirm" value={passwordConfirm} placeholder="confirmation du mot de passe" onChange={changeField} />

          <input className="register-form-input" type="file" name="avatar" placeholder="avatar" onChange={onFileChange} />
          <div className="register-form-input register-form-input--check">
            <label htmlFor="cgu" className="">
              <input type="checkbox" name="cgu" id="cgu" value={cgu} defaultChecked={false} onChange={handleCguCheckboxChange} />
              <span>J'ai lu les <Link to="/cgu" className="register-form-input--check-link">conditions générales de vente</Link> et j'accèpte tout</span>
            </label>
          </div>
          <button
            type="submit"
            className="register-form-btn"
            onClick={() => {
              console.log('clicked on s\'inscrire');
            }}
          >Confirmer l'inscription
          </button>
        </div>

      </form>
    </div>

  );
};

Register.propTypes = {
  lastname: PropTypes.string,
  pseudo: PropTypes.string,
  firstname: PropTypes.string,
  mail: PropTypes.string,
  phone: PropTypes.string,
  password: PropTypes.string,
  passwordConfirm: PropTypes.string,
  cgu: PropTypes.bool,
  changeField: PropTypes.func,
  handleRegisterFormSubmit: PropTypes.func,
};

Register.defaultProps = {
  lastname: '',
  pseudo: '',
  firstname: '',
  mail: '',
  phone: '',
  password: '',
  passwordConfirm: '',
  avatar: {},
  cgu: false,
  changeField: () => { },
  handleRegisterFormSubmit: () => { },
};

export default Register;
