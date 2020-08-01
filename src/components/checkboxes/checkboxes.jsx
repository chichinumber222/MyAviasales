import React from 'react';
import styles from './checkboxes.module.scss';

function Checkboxes({ options }) {
  const elements = options.map((value) => {
    return (
    <label className={styles.label}><input type='checkbox' className={styles.checkbox}/>{value}</label>
    )
  })
  
  return (
    <div className={styles.checkboxes}>
      {elements}
    </div>
  )
}

export default Checkboxes;