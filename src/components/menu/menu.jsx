import React from 'react';
import PropTypes from 'prop-types';
import { showAll, showWithout, showOne, showTwo, showThree, asyncActionTest } from '../../reduxStore/actions';
import styles from './menu.module.scss';

function Menu({ checkboxes, dispatch, name }) {
  return (
    <div className={styles.checkboxes}>
      <label className={styles.label}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={checkboxes.all}
          onChange={(event) => dispatch(showAll(event.target.checked))}
        />
        Все
      </label>
      <label className={styles.label}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={checkboxes.without}
          onChange={(event) => dispatch(showWithout(event.target.checked))}
        />
        Без пересадок
      </label>
      <label className={styles.label}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={checkboxes.one}
          onChange={(event) => dispatch(showOne(event.target.checked))}
        />
        1 пересадка
      </label>
      <label className={styles.label}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={checkboxes.two}
          onChange={(event) => dispatch(showTwo(event.target.checked))}
        />
        2 пересадки
      </label>
      <label className={styles.label}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={checkboxes.three}
          onChange={(event) => dispatch(showThree(event.target.checked))}
        />
        3 пересадки
      </label>
      <button type="button" onClick={(e) => dispatch(asyncActionTest(e.target.name))} name="testing!">
        Test
      </button>
      <p>{name} - имя button</p>
    </div>
  );
}

Menu.propTypes = {
  checkboxes: PropTypes.objectOf(PropTypes.bool.isRequired).isRequired,
  dispatch: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Menu;
