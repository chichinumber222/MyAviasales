import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../reduxStore/actions';
import Logo from '../../images/Logo.png';
import styles from './app.module.scss';
import TicketServiceTest from '../../services/ticket-service-test';
import Menu from '../menu';
import CardsList from '../cards-list';
import Tabs from '../tabs';

function App(props) {
  const { all, without, one, two, three, tab, showAll, showWithout, showOne, showTwo, showThree, selectTab } = props;
  const tickets = TicketServiceTest();

  return (
    <div className={styles.app}>
      <div className={styles.logo}>
        <img src={Logo} alt="logo" />
      </div>
      <div className={styles.main}>
        <div className={styles.menu}>
          <p className={styles.menu__header}>Количество пересадок</p>
          <Menu
            all={all}
            without={without}
            one={one}
            two={two}
            three={three}
            showAll={showAll}
            showWithout={showWithout}
            showOne={showOne}
            showTwo={showTwo}
            showThree={showThree}
          />
        </div>
        <div className={styles.content}>
          <Tabs activeTab={tab} setActiveTab={selectTab} />
          <CardsList cards={tickets} />
        </div>
      </div>
    </div>
  );
}

App.propTypes = {
  all: PropTypes.bool.isRequired,
  without: PropTypes.bool.isRequired,
  one: PropTypes.bool.isRequired,
  two: PropTypes.bool.isRequired,
  three: PropTypes.bool.isRequired,
  tab: PropTypes.string.isRequired,
  showAll: PropTypes.func.isRequired,
  showWithout: PropTypes.func.isRequired,
  showOne: PropTypes.func.isRequired,
  showTwo: PropTypes.func.isRequired,
  showThree: PropTypes.func.isRequired,
  selectTab: PropTypes.func.isRequired,
};

export default connect((state) => state, actions)(App);
