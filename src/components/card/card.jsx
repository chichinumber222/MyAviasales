import React from 'react';
import styles from './card.module.scss';
import minToHours from '../../services/minutes-to-hours';
import travelTime from '../../services/travel-time';
import calculateStops from '../../services/calculate-stops';

function Card({ price, carrier, segments }) {
  const wayThere = `${segments[0].origin}-${segments[0].destination}`;
  const wayBack = `${segments[1].origin}-${segments[1].destination}`;
  
  return (
    <div className={styles.card}>
      <p className={styles.price}>{price} Р</p>
      <div></div>
      <img alt={`logo ${carrier}`} src={`//pics.avs.io/99/36/${carrier}.png`}/>
      <HeadAndValue head={wayThere} value={travelTime(segments[0].date, segments[0].duration)}/>
      <HeadAndValue head='В ПУТИ' value={minToHours(segments[0].duration)}/>
      <HeadAndValue head={calculateStops(segments[0].stops)} value={segments[0].stops.join(', ')}/>
      <HeadAndValue head={wayBack} value={travelTime(segments[1].date, segments[1].duration)}/>
      <HeadAndValue head='В ПУТИ' value={minToHours(segments[1].duration)}/>
      <HeadAndValue head={calculateStops(segments[1].stops)} value={segments[1].stops.join(', ')}/>
    </div>
  )
}

function HeadAndValue({ head, value }) {
  return (
    <div className={styles.container}>
      <span className={styles.head}>{head}</span>
      { value && <span className={styles.value}>{value}</span>}
    </div>
  )
}

export default Card;