import React from 'react';

import './styles.scss';

const AddWasherForm = () => (
  <div className="addwasherform">
    <div
      className="addwasherform-btn"
      title="fermer cette fenêtre"
      onClick={() => {
        console.log('fermer le composant addwasher');
      }}
    ><i className="fas fa-times" />
    </div>
    <h1 className="addwasherform-title"> Ajouter une Machine </h1>
    <form className="addwasherform-form" encType="multipart/form-data">

      <input className="addwasherform-form-input" type="text" placeholder="Nom" name="name" />
      <input className="addwasherform-form-input" type="text" placeholder="Adresse de la machine" name="address" />
      <input className="addwasherform-form-input" type="number" placeholder="Code Postal ex : 13000" name="zip_code" />
      <input className="addwasherform-form-input" type="text" placeholder="Ville" name="city" />
      <input className="addwasherform-form-input" type="number" placeholder="Prix en € pour un lavage simple ex: 3" name="price" />
      <textarea className="addwasherform-form-input addwasherform-form-input--description" placeholder="Ecrivez ce que vous souhaitez à propos de votre machine" name="description" />

      <div className="addwasherform-form-capacity">
        <label htmlFor="capacity" className="addwasherform-form-capacity-select">
          <span className="addwasherform-form-capacity-select-text">Quelle est le poids maximal de votre machine&nbsp;?</span>
          <select className="addwasherform-form-capacity-select-option" name="capacity" id="capacity">
            <option className="addwasherform-form-capacity-select-option-item" value="6">6kg</option>
            <option className="addwasherform-form-capacity-select-option-item" value="7">7kg</option>
            <option className="addwasherform-form-capacity-select-option-item" value="8">8kg</option>
            <option className="addwasherform-form-capacity-select-option-item" value="9">9kg</option>
          </select>
        </label>

      </div>
      <div className="addwasherform-form-image">
        <h2 className="addwasherform-form-image-subtitle">Photo de la machine (facultatif)</h2>
        <input
          className="addwasherform-form-image-input"
          type="file"
          name="avatar"
          accept="image/png, image/jpeg"
        />
      </div>
      <button className="addwasherform-form-submit" type="submit">Valider</button>
    </form>
  </div>
);

export default AddWasherForm;
