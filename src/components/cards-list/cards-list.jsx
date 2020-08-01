import React from 'react';
import Card from '../card';

function CardsList({ cards }) {
  const elements = cards.map((card) => {
    return <Card key={card.id} {...card}/>;
  })

  return (
    <div>
      {elements}
    </div>
  )
}

export default CardsList;