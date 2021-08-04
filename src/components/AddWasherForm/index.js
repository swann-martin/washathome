import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from '../Card';
import Field from 'src/components/Field';

import './styles.scss';

const AddWasherForm = ({
  handleUpdateWasher,
  title,
  address,
  zip_code,
  city,
  price,
  description,
  picture,
  capacity,
  changeField,
  machines
}) => {
  const handleFieldChange = (evt) => {
    changeField(evt.target.value, evt.target.name);
  };
  return (
    <div className="addwasherform">
      <Link
        to="/"
        className="addwasherform-btn"
        title="fermer cette fenêtre"
        onClick={() => {
          console.log('fermer le formulaire addwasher');
        }}
      ><i className="fas fa-times" />
      </Link>
      <h1 className="addwasherform-title"> Ajouter une Machine </h1>

      <form className="addwasherform-form" onSubmit={handleUpdateWasher} encType="multipart/form-data">
        <Field placeholder="Nom ex: Nom de la machine" value={title} name="title" onChange={changeField} type="text" />
        <Field placeholder="Adresse de la machine ex: 15, rue du test" value={address} name="address" onChange={changeField} type="text" />
        <Field placeholder="Code Postal ex: 13000" value={zip_code} type="number" name="zip_code" onChange={changeField} />
        <Field placeholder="Ville ex: Marseille" value={city} name="city" onChange={changeField} />
        <Field placeholder="Prix en € pour un lavage simple ex: 3" value={price} type="number" name="price" onChange={changeField} />
        <textarea className="addwasherform-form-input addwasherform-form-input--description" placeholder="Ecrivez ce que vous souhaitez à propos de votre machine" name="description" onChange={handleFieldChange} value={description} />

        <div className="addwasherform-form-capacity">
          <label htmlFor="capacity" className="addwasherform-form-capacity-select">
            <span className="addwasherform-form-capacity-select-text">Quelle est le poids maximal de votre machine&nbsp;?</span>
            <select className="addwasherform-form-capacity-select-option" name="capacity" id="capacity" onChange={handleFieldChange}>
              <option className="addwasherform-form-capacity-select-option-item" value="6">6kg</option>
              <option className="addwasherform-form-capacity-select-option-item" value="7">7kg</option>
              <option className="addwasherform-form-capacity-select-option-item" value="8">8kg</option>
              <option className="addwasherform-form-capacity-select-option-item" value="9">9kg</option>
            </select>
          </label>

        </div>
        <div className="addwasherform-form-image">
          <h2 className="addwasherform-form-image-subtitle">Photo de la machine (facultatif)</h2>
          <Field className="register-form-input" type="file" name="picture" value={picture} placeholder="picture" onChange={changeField} />
        </div>
        <button className="addwasherform-form-submit" type="submit">Valider l'ajout de la machine</button>
      </form>

    </div>
  );
};

AddWasherForm.propTypes = {
  title: PropTypes.string,
  address: PropTypes.string,
  zip_code: PropTypes.string,
  city: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string,
  capacity: PropTypes.string,
  picture: PropTypes.string,
  handleWasherFormSubmit: PropTypes.func,
  changeField: PropTypes.func,
};

AddWasherForm.defaultProps = {
  handleWasherFormSubmit: () => { },
  changeField: () => { },
  title: '',
  address: '',
  zip_code: '',
  city: '',
  price: '',
  description: '',
  picture: '',
  capacity: 6,
};

export default AddWasherForm;
