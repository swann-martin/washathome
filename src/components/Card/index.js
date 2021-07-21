import React from 'react';

import './styles.scss';

const Card = () => (
  <article className="card">
    <img className="card-img" src="https://dummyimage.com/250/000/eee" alt="la machine" />
    <div className="card-content">
      <div className="card-content-city">
        <span className="card-content-city-name">Bastia</span>
        <span className="card-content-city-distance">500m</span>
      </div>
      <div className="card-content-infos">
        <span className="card-content-infos-price">5€</span>
        <span className="card-content-infos-grade">3/5</span>
      </div>
    </div>
  </article>
);

export default Card;