import React from 'react';
import { Link } from 'react-router-dom';
import "./style.scss";

const Register = () => (
  <div className="register">
    <Link
      to="/"
      className="register-btn"
      title="fermer cette fenêtre"
      onClick={() => {
        console.log('fermer le composant ');
      }}
    ><i className="fas fa-times" />
    </Link>

    <form onSubmit={(evt) => { evt.preventDefault(); }} className="register-form">
      <input className="register-form-input" type="text" name="Nom" placeholder="Nom ex: Dupont" />
      <input className="register-form-input" type="text" name="Prénom" placeholder="Prénom ex: Alex" />
      <input className="register-form-input" type="text" name="login" placeholder="login ex: alexdupt331" />
      <input className="register-form-input" type="email" name="email" placeholder="email ex: fauxemail@fakemail.com" />
      <input className="register-form-input" type="text" name="telephone" placeholder="tél ex: 0606060606" />
      <input className="register-form-input" type="password" name="password" placeholder="mot de passe" />
      <input type="password" className="register-form-input" name="conf-password" placeholder="confirmation du mot de passe" />
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
