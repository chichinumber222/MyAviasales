import React from 'react';
import PropTypes from 'prop-types';
import styles from './card.module.scss';
import minToHours from '../../services/minutes-to-hours';
import travelTime from '../../services/travel-time';
import calculateStops from '../../services/calculate-stops';

function Card({ price, carrier, segments }) {
  const ways = segments.map((way) => {
    return (
      <React.Fragment key={way.date}>
        <HeadAndValue head={`${way.origin}-${way.destination}`} value={travelTime(way.date, way.duration)} />
        <HeadAndValue head="В ПУТИ" value={minToHours(way.duration)} />
        <HeadAndValue head={calculateStops(way.stops)} value={way.stops.join(', ')} />
      </React.Fragment>
    );
  });

  return (
    <div className={styles.card}>
      <p className={styles.price}>{price.toLocaleString('ru-RU')} Р</p>
      <div />
      <img alt={`logo ${carrier}`} src={`//pics.avs.io/99/36/${carrier}.png`} />
      {ways}
    </div>
  );
}

function HeadAndValue({ head, value }) {
  return (
    <div className={styles.container}>
      <span className={styles.head}>{head}</span>
      {value && <span className={styles.value}>{value}</span>}
    </div>
  );
}

Card.propTypes = {
  price: PropTypes.number.isRequired,
  carrier: PropTypes.string.isRequired,
  segments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

HeadAndValue.propTypes = {
  head: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Card;
