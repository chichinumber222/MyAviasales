import React from 'react';
import PropTypes from 'prop-types';
import shouldUpdate from 'recompose/shouldUpdate';
import styles from './card.module.scss';
import { travelTime, minutesToHours, calculateStops } from '../../services/work-with-flight-data';

function Card({ price, carrier, segments }) {
  const ways = segments.map((way) => {
    return (
      <React.Fragment key={way.date}>
        <HeadAndValue head={`${way.origin}-${way.destination}`} value={travelTime(way.date, way.duration)} />
        <HeadAndValue head="В ПУТИ" value={minutesToHours(way.duration)} />
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
  // eslint-disable-next-line react/no-unused-prop-types
  id: PropTypes.number.isRequired,
};

HeadAndValue.propTypes = {
  head: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

const checkPropsChange = (props, nextProps) => nextProps.id !== props.id;

export default shouldUpdate(checkPropsChange)(Card);
