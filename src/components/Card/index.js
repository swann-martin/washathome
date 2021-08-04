import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './styles.scss';

const Card = ({
  picture,
  city,
  price,
  id,
  address,
  description,
  zip_code,
  name,
  capacity,
  link,
}) => (
  <Link className="card" to={link} machine={{ picture, city, price, id, address, description, zip_code, name, capacity }}>
    <img className="card-img" src={picture} alt="la machine" />
    <div className="card-content">
      <div className="card-content-city">
        <span className="card-content-city-city">{city} <i className="fas fa-map-marker" /></span>
        <span className="card-content-city-name">{name}</span>
      </div>
      <div className="card-content-infos">
        {price !== '' ? <span className="card-content-infos-price">{price}€</span> : ''}
      </div>
    </div>
  </Link>
);

Card.propTypes = {
  picture: PropTypes.string,
  capacity: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  zip_code: PropTypes.string,
  address: PropTypes.string,
  city: PropTypes.string,
  price: PropTypes.number,
  link: PropTypes.string,
  id: PropTypes.number,
};

Card.defaultProps = {
  picture: 'https://dummyimage.com/250/000/eee',
  capacity: 6,
  name: '',
  description: '',
  zip_code: null,
  address: '',
  city: '',
  price: null,
  link: PropTypes.string,
  id: PropTypes.number,
};

export default Card;
