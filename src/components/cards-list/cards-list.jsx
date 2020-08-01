import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card';

function CardsList({ cards }) {
  const elements = cards.map((card) => {
    return <Card key={card.id} {...card} />;
  });

  return <div>{elements}</div>;
}

CardsList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardsList;
