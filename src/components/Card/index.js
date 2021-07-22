import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Card = ({ picture, city, price }) => (
  <article className="card">
    <img className="card-img" src={picture} alt="la machine" />
    <div className="card-content">
      <div className="card-content-city">
        <span className="card-content-city-name">{city}</span>
        <span className="card-content-city-distance">500m</span>
      </div>
      <div className="card-content-infos">
        <span className="card-content-infos-price">{price}€</span>
      </div>
    </div>
  </article>
);

Card.propTypes = {
  picture: PropTypes.string,
  capacity: PropTypes.number,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  zip_code: PropTypes.number.isRequired,
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

Card.defaultProps = {
  picture: 'https://dummyimage.com/250/000/eee',
  capacity: 6,
};

export default Card;
