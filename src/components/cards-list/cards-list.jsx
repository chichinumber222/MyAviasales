import React from 'react';
import PropTypes from 'prop-types';
import { message, Alert } from 'antd';
import 'antd/dist/antd.css';
import styles from './cards-list.module.scss';
import { showMoreCards } from '../../reduxStore/actions';
import Card from '../card';
import imitationScroll from '../../services/imitation-scroll-event';

function CardsList({ cards, error, checkboxes, tab, ticketsPortionsСounter, dispatch }) {
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
      onClick={() => {
        dispatch(showMoreCards());
        imitationScroll();
      }}
      className={elementsPart.length === elements.length ? styles.hidden : styles.customButton}
    >
      Следующие {portion} рейсов
    </button>
  );
  elementsPart.push(nextTicketsButton);

  if (error) message.error('Impossible to get tickets', 1.5);

  return !elements.length ? (
    <Alert message="Рейсов, подходящих под заданные параметры, не найдено" type="info" style={{ marginTop: '20px' }} />
  ) : (
    <div>{elementsPart}</div>
  );
}

CardsList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  error: PropTypes.bool.isRequired,
  checkboxes: PropTypes.objectOf(PropTypes.bool).isRequired,
  tab: PropTypes.string.isRequired,
  ticketsPortionsСounter: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default CardsList;
