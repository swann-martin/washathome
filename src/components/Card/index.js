import React from 'react';

import './styles.scss';

const Card = () => (
  <article className="card">
    <img className="card-img" src="https://dummyimage.com/250/000/eee" alt="la machine" />
    <div className="card-content">
      <p className="card-content-city">Ville</p>
      <p className="card-content-distance">Distance</p>
      <p className="card-content-price">Prix €</p>
      <p className="card-content-note">Note/5</p>
    </div>
  </article>
);

export default Card;
