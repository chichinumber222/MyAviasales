import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { asyncGetTickets } from '../../reduxStore/actions';
import Logo from '../../styles/images/Logo.png';
import styles from './app.module.scss';
import MenuContainer from '../../containers/menu-container';
import CardsListContainer from '../../containers/cards-list-container';
import TabsContainer from '../../containers/tabs-container';

function App({ dispatch }) {
  dispatch(asyncGetTickets());
  const moveUp = () =>  window.scrollTo(window.pageXOffset, 0);
  const moveDown = () => {
    const maxDown = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo(window.pageXOffset, maxDown);
  };



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
      <div className={styles.arrowTop} onClick={moveUp} />
      <div className={styles.arrowBottom} onClick={moveDown} />
    </div>
  );
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(App);
