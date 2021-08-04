import React from 'react';
import Card from 'src/components/Card';
import PropTypes from 'prop-types';

import './styles.scss';

const Cards = ({ machines }) => (
  <div className="cards">
    <h2 className="cards-title">Resultats de votre recherche&nbsp;: <span className="cards-title-number">{machines.length}&nbsp;</span>{machines.length > 1 ? 'machines trouvées' : 'machine trouvée'}</h2>
    <section className="cards-list">
      {
        machines.map((machine) => (
          <Card {...machine} link={`machineDetail/${machine.id}`} key={machine.id} />
        ))
      }
    </section>
  </div>
);

Cards.propTypes = {
  machines: PropTypes.arrayOf(PropTypes.object),
};

Cards.defaultProps = {
  machines: [],
};

export default Cards;
