import React from 'react';

import './styles.scss';

const AddWasherForm = () => (
  <form>
    <input type="text" placeholder="Nom" name="name" />
    <input type="text" placeholder="Description" name="description" />
    <input type="text" placeholder="Adresse de la machine" name="address" />
    <input type="number" placeholder="Code Postal" name="zip_code" />
    <input type="text" placeholder="Ville" name="city" />
    <input type="text" placeholder="Prix" name="price" />
    <div>
      <p>Quelle est le poids maximal de votre machine ?</p>
      <label>
        <input type="radio" name="capacity" value="6" />
        6kg
      </label>
      <label>
        <input type="radio" name="capacity" value="7" />
        7kg
      </label>
      <label>
        <input type="radio" name="capacity" value="8" />
        8kg
      </label>
      <label>
        <input type="radio" name="capacity" value="9" />
        9kg
      </label>
    </div>
    <label htmlFor="avatar">Photo de la machine</label>
    <input
      type="file"
      name="avatar"
      accept="image/png, image/jpeg"
    />
    <button type="submit">Valider</button>
  </form>
);

export default AddWasherForm;
