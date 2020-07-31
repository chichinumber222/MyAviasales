import React from 'react';
import styles from './card.module.scss';
import minToHours from '../../services/minutes-to-hours';
import travelTime from '../../services/travel-time';
import calculateStops from '../../services/calculate-stops';

function Card({ price, carrier, segments }) {
  const ways = segments.map((way) => {
    return (
      <>
        <HeadAndValue 
          head={`${way.origin}-${way.destination}`} 
          value={travelTime(way.date, way.duration)}
        />
        <HeadAndValue 
          head='В ПУТИ' 
          value={minToHours(way.duration)}
        />
        <HeadAndValue 
          head={calculateStops(way.stops)} 
          value={way.stops.join(', ')}
        />
      </>
    )
  })

  return (
    <div className={styles.card}>
      <p className={styles.price}>{price.toLocaleString('ru-RU')} Р</p>
      <div></div>
      <img alt={`logo ${carrier}`} src={`//pics.avs.io/99/36/${carrier}.png`}/>
      {ways}
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