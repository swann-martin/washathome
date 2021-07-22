import React from 'react';
import Card from 'src/components/Card';
import PropTypes from 'prop-types';

import './styles.scss';

const Cards = ({ machines }) => (
  <div className="cards">
    <h2 className="cards-title">Resultats de votre recherche</h2>
    {
      machines.map((machine) => (
        <Card {...machine} key={machine.id} />
      ))
    }
  </div>
);

Cards.propTypes = {
  machines: PropTypes.arrayOf(PropTypes.object),
};

Cards.defaultProps = {
  machines: [],
};

export default Cards;
