import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Field from 'src/components/Field';

import './styles.scss';

const AddWasherForm = ({
  handleWasherFormSubmit,
  name,
  address,
  zip_code,
  city,
  price,
  description,
  picture,
}) => (
  <div className="addwasherform">
    <Link
      to="/"
      className="addwasherform-btn"
      title="fermer cette fenêtre"
      onClick={() => {
        console.log('fermer le composant addwasher');
      }}
    ><i className="fas fa-times" />
    </Link>
    <h1 className="addwasherform-title"> Ajouter une Machine </h1>
    <form className="addwasherform-form" onSubmit={handleWasherFormSubmit} encType="multipart/form-data">
      <Field placeholder="Nom" value={name} name="name" />
      <Field placeholder="Adresse de la machine" value={address} name="address" />
      <Field placeholder="Code Postal" value={zip_code} type="number" name="zip_code" />
      <Field placeholder="Ville" value={city} name="city" />
      <Field placeholder="Prix en € pour un lavage simple ex: 3" value={price} type="number" name="price" />
      <textarea className="addwasherform-form-input addwasherform-form-input--description" placeholder="Ecrivez ce que vous souhaitez à propos de votre machine" name="description" value={description} />

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
        <Field className="addwasherform-form-image-input" type="file" name="avatar" accept="image/png, image/jpeg" value={picture} />
      </div>
      <button className="addwasherform-form-submit" type="submit">Valider</button>
    </form>
  </div>
);

AddWasherForm.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  zip_code: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  picture: PropTypes.string,
};

AddWasherForm.defaultProps = {
  picture: 'https://thispersondoesnotexist.com/',
};

export default AddWasherForm;
