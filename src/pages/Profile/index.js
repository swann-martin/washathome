import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Field from 'src/components/Field';
import './style.scss';

const Profile = ({ firstname, lastname, pseudo, avatar, mail, phone, changeField, deleteUser, token, updateUser }) => (
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
      <div className="profile-credentials-left">
        <label className="profile-credentials-label">Login&nbsp;<Field className="profile-credentials-label-input" name="pseudo" value={pseudo} onChange={changeField} /></label>
        <label className="profile-credentials-label">Nom&nbsp;<Field className="profile-credentials-label-input" name="firstname" value={firstname} onChange={changeField} /></label>
        <label className="profile-credentials-label">Prénom&nbsp;<Field className="profile-credentials-label-input" name="lastname" value={lastname} onChange={changeField} /></label>
      </div>
      <div className="profile-credentials-right">
        <label className="profile-credentials-label">email&nbsp;<Field className="profile-credentials-label-input" name="usermail" value={mail} onChange={changeField} /></label>
        <label type="tel" className="profile-credentials-label">tél&nbsp;<Field className="profile-credentials-label-input" name="phone" value={phone} onChange={changeField} /></label>
        <label className="profile-credentials-label">Avatar&nbsp;
          <div className="profile-credentials-label-avatar-container">
            <img className="profile-credentials-label-avatar" src={avatar} alt="votre-avatar" /><Field className="profile-credentials-label-input" name="avatar" value={avatar} onChange={changeField} />
          </div>
        </label>
        <div className="profile-credentials-btn-container">
          <button type="button" className="profile-credentials-btn profile-credentials-btn--delete" onClick={deleteUser}>Supprimer mon compte</button>
          <button type="submit" className="profile-credentials-btn profile-credentials-btn--validate" onClick={updateUser}>Valider les modifications</button>
        </div>
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
  phone: PropTypes.string,
};

Profile.defaultProps = {
  firstname: '',
  lastname: '',
  pseudo: '',
  avatar: '',
  mail: '',
  phone: '',
};

export default Profile;
