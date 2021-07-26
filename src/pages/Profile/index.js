import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.scss';

const Profile = ({ firstname, lastname, pseudo, avatar, mail, password, phone }) => (
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
      <label className="profile-credentials-label">Login&nbsp;<input className="profile-credentials-label-input" value={pseudo} /></label>
      <label className="profile-credentials-label">Nom&nbsp;<input className="profile-credentials-label-input" value={firstname} /></label>
      <label className="profile-credentials-label">Prénom&nbsp;<input className="profile-credentials-label-input" value={lastname} /></label>
      <label className="profile-credentials-label">email&nbsp;<input className="profile-credentials-label-input" value={mail} /></label>
      <label className="profile-credentials-label">password&nbsp;<input className="profile-credentials-label-input" value={password} /></label>
      <label className="profile-credentials-label">tél&nbsp;<span>+33</span><input className="profile-credentials-label-input" value={phone} /></label>
      <label className="profile-credentials-label">Avatar&nbsp;
        <div className="profile-credentials-label">
          <img className="profile-credentials-label-avatar" src={avatar} alt="votre-avatar" /><input className="profile-credentials-label-input" value={avatar} />
        </div>
      </label>
      <div className="profile-credentials-btn-container">
        <button type="button" className="profile-credentials-btn profile-credentials-btn--delete">Supprimer mon compte</button>
        <button type="submit" className="profile-credentials-btn profile-credentials-btn--validate">Valider</button>
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
  phone: PropTypes.number,
};

Profile.defaultProps = {
  firstname: '',
  lastname: '',
  pseudo: '',
  avatar: '',
  mail: '',
  password: '',
  phone: '',

};

export default Profile;
