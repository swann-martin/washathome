import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Profile = ({ firstname, lastname, pseudo, avatar, mail, password, phone }) => (
  <div className="profile">

    <Link
      to="/"
      className="profile-btn"
      title="fermer cette fenêtre"

    ><i className="fas fa-times" />
    </Link>
    <h2 className="profile-title">Mon profil test {pseudo}</h2>
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
      <label className="profile-credentials-label">tél&nbsp;<input className="profile-credentials-label-input" value={phone} /></label>
      <label className="profile-credentials-label">Washer&nbsp;<input className="profile-credentials-label-input" value={avatar} /></label>
      <div className="profile-credentials-btn-container">
        <button type="button" className="profile-credentials-btn profile-credentials-btn--delete">Supprimer mon compte</button>
        <button type="submit" className="profile-credentials-btn profile-credentials-btn--validate">Valider</button>
      </div>
    </form>

  </div>
);

export default Profile;
