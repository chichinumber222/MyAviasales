import React from 'react';
import PropTypes from 'prop-types';
import { showAll, showWithout, showOne, showTwo, showThree } from '../../reduxStore/actions';
import styles from './menu.module.scss';

function Menu({ checkboxes, customDispatch }) {
  return (
    <div className={styles.checkboxes}>
      <label className={styles.label}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={checkboxes.all}
          onChange={(e) => customDispatch(e.target.checked, showAll)}
        />
        Все
      </label>
      <label className={styles.label}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={checkboxes.without}
          onChange={(e) => customDispatch(e.target.checked, showWithout)}
        />
        Без пересадок
      </label>
      <label className={styles.label}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={checkboxes.one}
          onChange={(e) => customDispatch(e.target.checked, showOne)}
        />
        1 пересадка
      </label>
      <label className={styles.label}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={checkboxes.two}
          onChange={(e) => customDispatch(e.target.checked, showTwo)}
        />
        2 пересадки
      </label>
      <label className={styles.label}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={checkboxes.three}
          onChange={(e) => customDispatch(e.target.checked, showThree)}
        />
        3 пересадки
      </label>
    </div>
  );
}

Menu.propTypes = {
  checkboxes: PropTypes.objectOf(PropTypes.bool.isRequired).isRequired,
  customDispatch: PropTypes.func.isRequired,
};

export default Menu;
