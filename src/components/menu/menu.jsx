import React from 'react';
import PropTypes from 'prop-types';
import styles from './menu.module.scss';

function Menu({ all, without, one, two, three, showAll, showWithout, showOne, showTwo, showThree }) {
  return (
    <div className={styles.checkboxes}>
      <label className={styles.label}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={all}
          onChange={(event) => showAll(event.target.checked)}
        />
        Все
      </label>
      <label className={styles.label}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={without}
          onChange={(event) => showWithout(event.target.checked)}
        />
        Без пересадок
      </label>
      <label className={styles.label}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={one}
          onChange={(event) => showOne(event.target.checked)}
        />
        1 пересадка
      </label>
      <label className={styles.label}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={two}
          onChange={(event) => showTwo(event.target.checked)}
        />
        2 пересадки
      </label>
      <label className={styles.label}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={three}
          onChange={(event) => showThree(event.target.checked)}
        />
        3 пересадки
      </label>
    </div>
  );
}

Menu.propTypes = {
  all: PropTypes.bool.isRequired,
  without: PropTypes.bool.isRequired,
  one: PropTypes.bool.isRequired,
  two: PropTypes.bool.isRequired,
  three: PropTypes.bool.isRequired,
  showAll: PropTypes.func.isRequired,
  showWithout: PropTypes.func.isRequired,
  showOne: PropTypes.func.isRequired,
  showTwo: PropTypes.func.isRequired,
  showThree: PropTypes.func.isRequired,
};

export default Menu;
