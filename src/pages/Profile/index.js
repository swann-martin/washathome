import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Field from 'src/components/Field';
import './style.scss';

const Profile = ({ firstname, lastname, pseudo, avatar, mail, password, passwordConfirm, phone, changeField, deleteUser, token, updateUser }) => (
  <div className="profile">

    <Link
      to="/"
      className="profile-btn"
      title="fermer cette fenêtre"

    ><i className="fas fa-times" />
    </Link>
    <h2 className="profile-title">Mon profil {pseudo}</h2>
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="profile-credentials"
    >
      <label className="profile-credentials-label">Login&nbsp;<Field className="profile-credentials-label-input" name="pseudo" value={pseudo} onChange={changeField} /></label>
      <label className="profile-credentials-label">Nom&nbsp;<Field className="profile-credentials-label-input" name="firstname" value={firstname} onChange={changeField} /></label>
      <label className="profile-credentials-label">Prénom&nbsp;<Field className="profile-credentials-label-input" name="lastname" value={lastname} onChange={changeField} /></label>
      <label className="profile-credentials-label">email&nbsp;<Field className="profile-credentials-label-input" name="mail" value={mail} onChange={changeField} /></label>
      <label className="profile-credentials-label">password&nbsp;<Field className="profile-credentials-label-input" name="password" value={password} onChange={changeField} /></label>
      <label className="profile-credentials-label">passwordConfirm&nbsp;<Field className="profile-credentials-label-input" name="passwordConfirm" value={passwordConfirm} onChange={changeField} /></label>
      <label className="profile-credentials-label">tél&nbsp;<span>+33</span><Field className="profile-credentials-label-input" name="phone" value={phone} onChange={changeField} /></label>
      <label className="profile-credentials-label">Avatar&nbsp;
        <div className="profile-credentials-label">
          <img className="profile-credentials-label-avatar" src={avatar} alt="votre-avatar" /><Field className="profile-credentials-label-input" name="avatar" value={avatar} onChange={changeField} />
        </div>
      </label>
      <div className="profile-credentials-btn-container">
        <form>
          <input hidden value={token} />
          <button type="button" className="profile-credentials-btn profile-credentials-btn--delete" onClick={deleteUser}>Supprimer mon compte</button>
        </form>
        <button type="submit" className="profile-credentials-btn profile-credentials-btn--validate" onClick={updateUser}>Valider</button>
      </div>
    </form>

  </div>
);

Profile.propTypes = {
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  pseudo: PropTypes.string,
  avatar: PropTypes.string,
  mail: PropTypes.string,
  password: PropTypes.string,
  passwordConfirm: PropTypes.string,
  phone: PropTypes.string,
};

Profile.defaultProps = {
  firstname: '',
  lastname: '',
  pseudo: '',
  avatar: '',
  mail: '',
  password: '',
  passwordConfirm: '',
  phone: '',

};

export default Profile;
