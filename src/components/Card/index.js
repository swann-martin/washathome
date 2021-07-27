import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './styles.scss';

const Card = ({ picture, city, price, id, address, description, zip_code, name, capacity }) => (
  <Link className="card" exact to={`machineDetail/${id}`} machine={{picture, city, price, id, address, description, zip_code, name, capacity}} >
    <img className="card-img" src={picture} alt="la machine" />
    <div className="card-content">
      <div className="card-content-city">
        <span className="card-content-city-name">{name}</span>
        <span className="card-content-city-distance">500m</span>
      </div>
      <div className="card-content-infos">
        <span className="card-content-infos-price">{price}€</span>
      </div>
    </div>
  </Link>
);

Card.propTypes = {
  picture: PropTypes.string,
  capacity: PropTypes.number,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  zip_code: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

Card.defaultProps = {
  picture: 'https://dummyimage.com/250/000/eee',
  capacity: 6,
};

export default Card;
