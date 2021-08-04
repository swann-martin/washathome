import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

//import of components

import Field from 'src/components/Field';

// import of style
import './styles.scss';

const MyMachines = ({
  isConnected,
  handlUpdateWasher,
  handleDeleteWasher,
  title,
  address,
  zip_code,
  city,
  price,
  description,
  picture,
  changeField,
}) => {
  const handleFieldChange = (evt) => {
    changeField(evt.target.value, evt.target.name);
  };
  return (
    !isConnected ? <Redirect to="/" /> : (
      <div className="updatewasherform">
        <Link
          to="/"
          className="updatewasherform-btn"
          title="fermer cette fenêtre"
          onClick={() => {
            console.log('fermer le formulaire MyMachine');
          }}
        ><i className="fas fa-times" />
        </Link>
        <h1 className="updatewasherform-title"> Vos machines</h1>


        <form className="updatewasherform-form" onSubmit={handlUpdateWasher} encType="multipart/form-data">
          <div className="updatewasherform-form-left">
            <Field placeholder="Nom ex: Nom de la machine" value={title} name="title" onChange={changeField} type="text" />
            <Field placeholder="Adresse de la machine ex: 15, rue du test" value={address} name="address" onChange={changeField} type="text" />
            <Field placeholder="Code Postal ex: 13000" value={zip_code} type="number" name="zip_code" onChange={changeField} />
            <Field placeholder="Ville ex: Marseille" value={city} name="city" onChange={changeField} />
          </div>
          <div className="updatewasherform-form-right">
            <Field placeholder="Prix en € pour un lavage simple ex: 3" value={price} type="number" name="price" onChange={changeField} />
            <textarea className="updatewasherform-form-input updatewasherform-form-input--description" placeholder={description} name="description" onChange={handleFieldChange} value={description} />

            <div className="updatewasherform-form-capacity">
              <label htmlFor="capacity" className="updatewasherform-form-capacity-select">
                <span className="updatewasherform-form-capacity-select-text">Le poids maximal de votre machine est</span>
                <select className="updatewasherform-form-capacity-select-option" name="capacity" id="capacity" onChange={handleFieldChange}>
                  <option className="updatewasherform-form-capacity-select-option-item" value="6">6kg</option>
                  <option className="updatewasherform-form-capacity-select-option-item" value="7">7kg</option>
                  <option className="updatewasherform-form-capacity-select-option-item" value="8">8kg</option>
                  <option className="updatewasherform-form-capacity-select-option-item" value="9">9kg</option>
                </select>
              </label>

            </div>
            <div className="updatewasherform-form-image">
              <h2 className="updatewasherform-form-image-subtitle">Photo de la machine (facultatif)</h2>
              <img className="updatewasherform-form-image-picture" src={picture} alt="machine" />
              {/* <Field className="register-form-input" type="file" name="picture-input" value="{picture}" placeholder="picture" onChange={changeField} /> */}
            </div>
            <div className="updatewasherform-form-btnGroup">
              <button className="updatewasherform-form-btnGroup-submit updatewasherform-form-btnGroup-submit--delete" type="button" onClick={handleDeleteWasher}>Supprimer cette machine</button>
              <button className="updatewasherform-form-btnGroup-submit" type="submit">Modifier cette machine</button>
            </div>
          </div>

        </form>
      </div>
    )
  );
};

MyMachines.propTypes = {
  title: PropTypes.string,
  address: PropTypes.string,
  zip_code: PropTypes.string,
  city: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string,
  capacity: PropTypes.string,
  picture: PropTypes.string,
  handlUpdateWasher: PropTypes.func,
  handleDeleteWasher: PropTypes.func,
  changeField: PropTypes.func,
  isConnected: PropTypes.bool.isRequired,

};

MyMachines.defaultProps = {
  handleDeleteWasher: () => { },
  handlUpdateWasher: () => { },
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

export default MyMachines;
