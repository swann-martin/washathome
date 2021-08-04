import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

//import of components 

import Field from 'src/components/Field';
import Card from '../Card';

// import of style
import './styles.scss';

const MyMachines = ({
  isConnected,
  handleWasherFormSubmit,
  title,
  address,
  zip_code,
  city,
  price,
  description,
  picture,
  changeField,
  machines,
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

        {machines &&
          <h2 className="updatewasherform-title">Mes machines</h2> &&
          machines.map((machine) => (
            <Card {...machine} key={machine.id} link="/MyMachines" />
          ))}

        <form className="updatewasherform-form" onSubmit={handleWasherFormSubmit} encType="multipart/form-data">
          <div className="updatewasherform-form-left">
            <Field placeholder="Nom ex: Nom de la machine" value={title} name="title" onChange={changeField} type="text" />
            <Field placeholder="Adresse de la machine ex: 15, rue du test" value={address} name="address" onChange={changeField} type="text" />
            <Field placeholder="Code Postal ex: 13000" value={zip_code} type="number" name="zip_code" onChange={changeField} />
            <Field placeholder="Ville ex: Marseille" value={city} name="city" onChange={changeField} />
          </div>
          <div className="updatewasherform-form-right">
            <Field placeholder="Prix en € pour un lavage simple ex: 3" value={price} type="number" name="price" onChange={changeField} />
            <textarea className="updatewasherform-form-input updatewasherform-form-input--description" placeholder="Ecrivez ce que vous souhaitez à propos de votre machine" name="description" onChange={handleFieldChange} value={description} />

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
              <img className="register-form-input" src={picture} alt="picture-machine" />
              <Field className="register-form-input" type="file" name="picture" value={picture} placeholder="picture" onChange={changeField} />
            </div>
            <div>
              <button className="updatewasherform-form-submit" type="submit">Modifier cette machine</button>
              <button className="updatewasherform-form-submit updatewasherform-form-submit--delete" type="button">Supprimer cette machine</button>
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
  handleWasherFormSubmit: PropTypes.func,
  changeField: PropTypes.func,
  isConnected: PropTypes.bool.isRequired,
  machines: PropTypes.arrayOf(Object)
};

MyMachines.defaultProps = {
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

export default MyMachines;
