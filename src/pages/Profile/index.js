import React from 'react';
import './style.scss';

const Profile = ({ handleOpenProfile }) => (
  <div className="profile">
    <div
      className="profile-btn"
      title="fermer cette fenêtre"
      onClick={() => {
        console.log('fermer le composant login'); handleOpenProfile();
      }}
    ><i className="fas fa-times" />
    </div>
    <button type="button" className="profile-btn profile-btn--settings"><i className="fas fa-cog" /> user settings</button>
    <form onSubmit={(e) => { e.preventDefault() }} className="profile-credentials">
      <label className="profile-credentials-label">Login&nbsp;<input className="profile-credentials-label-input" value="data.pseudo" /></label>
      <label className="profile-credentials-label">Nom&nbsp;<input className="profile-credentials-label-input" value="data.lastName" /></label>
      <label className="profile-credentials-label">Prénom&nbsp;<input className="profile-credentials-label-input" value="data.firstName" /></label>
      <label className="profile-credentials-label">email&nbsp;<input className="profile-credentials-label-input" value="data.email" /></label>
      <label className="profile-credentials-label">password&nbsp;<input className="profile-credentials-label-input" value="data.password" /></label>
      <label className="profile-credentials-label">tél&nbsp;<input className="profile-credentials-label-input" value="data.tel" /></label>
      <label className="profile-credentials-label">Washer&nbsp;<input className="profile-credentials-label-input" value="data" /></label>
      <div className="profile-credentials-btn-container">
        <button type="button" className="profile-credentials-btn profile-credentials-btn--delete">Supprimer mon compte</button>
        <button type="submit" className="profile-credentials-btn profile-credentials-btn--validate">Valider</button>
      </div>
    </form>

  </div>
);

export default Profile;
