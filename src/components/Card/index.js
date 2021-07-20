import React from 'react';

import './styles.scss';

const Card = () => (
  <article className="card">
    <img className="card-img" src="https://dummyimage.com/250/000/eee" alt="la machine" />
    <div className="card-content">
      <div className="card-content-city">
        <p className="card-content-city-name">Bastia</p>
        <p className="card-content-city-distance">500m</p>
      </div>
      <div className="card-content-infos">
        <p className="card-content-infos-price">5€</p>
        <p className="card-content-infos-grade">3/5</p>
      </div>
    </div>
  </article>
);

export default Card;
