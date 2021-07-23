import React from 'react';
import { Link } from 'react-router-dom';
import Field from '../../components/Field';
import './style.scss';

const Register = ({ lastname, pseudo, firstname, mail, phone, password, avatar }) => (
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

    <form onSubmit={(evt) => { evt.preventDefault(); }} className="register-form">
      <Field className="register-form-input" type="text" name="lastname" value={lastname} placeholder="Nom ex: Dupont" />
      <Field className="register-form-input" type="text" name="pseudo" value={pseudo} placeholder="login ex: alexdupt331" />
      <Field className="register-form-input" type="text" name="firstname" value={firstname} placeholder="Prénom ex: Alex" />
      <Field className="register-form-input" type="email" name="mail" value={mail} placeholder="email ex: fauxemail@fakemail.com" />
      <Field className="register-form-input" type="text" name="phone" value={phone} placeholder="tél ex: 0606060606" />
      <Field className="register-form-input" type="password" name="password" value={password} placeholder="mot de passe" />
      <Field className="register-form-input" type="text" name="avatar" value={avatar} placeholder="mot de passe" />
      <Field type="password" className="register-form-input" name="conf-password" value='confpassword' placeholder="confirmation du mot de passe" />
      <div className="register-form-input register-form-input--check">
        <label htmlFor="cgv" className="">
          <input type="checkbox" name="cgv" id="cgv" placeholder="confirmation du mot de passe" />
          <span>J'ai lu les <Link to="/cgv" className="register-form-input--check-link">conditions générales de vente</Link> et j'accèpte tout</span>
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
    </form>
  </div>

)

export default Register;
