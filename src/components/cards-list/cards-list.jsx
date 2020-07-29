import React from 'react';

function CardsList({ cards }) {
  const elements = cards.map(() => {
    return <Card />;
  })

  return (
    <>
      {elements}
    </>
  )
}