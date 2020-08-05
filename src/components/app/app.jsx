import React from 'react';
import Logo from '../../images/Logo.png';
import styles from './app.module.scss';
import TicketServiceTest from '../../services/ticket-service-test';
import MenuContainer from '../../containers/menu-container';
import CardsList from '../cards-list';
import TabsContainer from '../../containers/tabs-container';

function App() {
  const tickets = TicketServiceTest();

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
          <CardsList cards={tickets} />
        </div>
      </div>
    </div>
  );
}

export default App;
