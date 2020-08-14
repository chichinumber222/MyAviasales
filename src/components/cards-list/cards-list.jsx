import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'antd';
import 'antd/dist/antd.css';
import styles from './cards-list.module.scss';
import Card from '../card';
import scrollEventCall from '../../services/scroll-event-call';

function CardsList({
  cards,
  checkboxes,
  tab,
  ticketsPortionsСounter,
  showMoreCardsWithDispatch,
  successfulDownload,
  error,
}) {
  useEffect(() => {
    scrollEventCall();
  }, [cards, checkboxes, ticketsPortionsСounter]);

  function isNeedRender(numberOfStops, specificCheckboxes) {
    switch (numberOfStops) {
      case 0:
        return specificCheckboxes.without;
      case 1:
        return specificCheckboxes.one;
      case 2:
        return specificCheckboxes.two;
      case 3:
        return specificCheckboxes.three;
      default:
        return false;
    }
  }

  const cardsSorted = cards.slice().sort((prevCard, nextCard) => {
    if (tab === 'fastest') {
      return prevCard.segments[0].duration - nextCard.segments[0].duration;
    }
    return prevCard.price - nextCard.price;
  });

  const elements = cardsSorted.reduce((acc, card) => {
    const stopsIn = card.segments[0].stops.length;
    const stopsFrom = card.segments[1].stops.length;
    if (isNeedRender(stopsIn, checkboxes) || isNeedRender(stopsFrom, checkboxes)) {
      acc.push(<Card key={card.id} {...card} />);
    }
    return acc;
  }, []);

  const portion = 100;
  const elementsPart = elements.slice(0, portion * ticketsPortionsСounter);
  const nextTicketsButton = (
    <button
      key={ticketsPortionsСounter}
      type="button"
      onClick={showMoreCardsWithDispatch}
      className={elementsPart.length === elements.length ? styles.hidden : styles.customButton}
    >
      Следующие {portion} рейсов
    </button>
  );
  elementsPart.push(nextTicketsButton);

  if (!elements.length) {
    return (
      <Alert
        message={successfulDownload || error ? 'Рейсов, подходящих под заданные параметры, не найдено' : 'Загрузка...'}
        type="info"
        style={{ marginTop: '20px' }}
      />
    );
  }
  return <div>{elementsPart}</div>;
}

CardsList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  checkboxes: PropTypes.objectOf(PropTypes.bool).isRequired,
  tab: PropTypes.string.isRequired,
  ticketsPortionsСounter: PropTypes.number.isRequired,
  successfulDownload: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  showMoreCardsWithDispatch: PropTypes.func.isRequired,
};

export default CardsList;
