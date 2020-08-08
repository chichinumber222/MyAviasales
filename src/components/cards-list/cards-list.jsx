import React from 'react';
import { message } from 'antd';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import Card from '../card';

function CardsList({ cards, error }) {
  const elements = cards.map((card) => {
    return <Card key={card.id} {...card} />;
  });

  if (error) message.error('Impossible to get tickets', 1.3);

  return <div>{elements}</div>;
}

CardsList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  error: PropTypes.bool.isRequired,
};

export default CardsList;
