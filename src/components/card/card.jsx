import React from 'react';
import styles from './card.module.scss';
import minToHours from '../../services/minutes-to-hours';

function Card({ price, carrier, segments }) {
  const wayThere = `${segments[0].origin}-${segments[0].destination}`;
  const wayBack = `${segments[1].origin}-${segments[1].destination}`;


  return (
    <div className={styles.card}>
      <p>{price}</p>
      <div></div>
      <img alt={`logo ${carrier}`} src={`//pics.avs.io/99/36/${carrier}.png`}/>
      <HeadAndValue head={wayThere} value='Ooooops'/>
      <HeadAndValue head='В ПУТИ' value={minToHours(segments[0].duration)}/>
      <HeadAndValue head='Hello' value='Ooooops'/>
      <HeadAndValue head={wayBack} value='Ooooops'/>
      <HeadAndValue head='В ПУТИ' value={minToHours(segments[1].duration)}/>
      <HeadAndValue head='Hello' value='Ooooops'/>
    </div>
  )
}

function HeadAndValue({ head, value }) {
  return (
    <div>
      <span style={{display: 'block'}}>{head}</span>
      <span style={{display: 'block'}}>{value}</span>
    </div>
  )
}

export default Card;