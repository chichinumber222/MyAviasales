import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { asyncGetTickets } from '../../reduxStore/actions';
import Logo from '../../styles/images/Logo.png';
import styles from './app.module.scss';
import MenuContainer from '../../containers/menu-container';
import CardsListContainer from '../../containers/cards-list-container';
import TabsContainer from '../../containers/tabs-container';
import Arrows from '../arrows';
import LoadingContainer from '../../containers/loading-container';

function App({ dispatch }) {
  dispatch(asyncGetTickets());

  return (
    <div className={styles.app}>
      <div className={styles.logo}>
        <img src={Logo} alt="logo" />
      </div>
      <div className={styles.main}>
        <div className={styles.menu}>
          <p className={styles.menu__header}>Количество пересадок</p>
          <MenuContainer />
        </div>
        <div className={styles.content}>
          <TabsContainer />
          <CardsListContainer />
        </div>
      </div>
      <Arrows />
      <LoadingContainer />
    </div>
  );
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(App);
