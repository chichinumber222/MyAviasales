import React, { useState } from 'react';
import Logo from '../../images/Logo.png';
import styles from './app.module.scss';
import TicketServiceTest from '../../services/ticket-service-test';
import CardsList from '../cards-list';
import Tabs from '../tabs';
import 'antd/dist/antd.css';

function App() {
  const [ activeTab, setActiveTab ] = useState(1);
  const [ tickets, setTickets ] = useState(TicketServiceTest());

  return (
    <div className={styles.app}>
      <div className={styles.logo}>
        <img src={Logo} alt='logo' />
      </div>
      <div className={styles.main}>
        <div className={styles.menu}>
          <p className={styles.menu__header}>Количество пересадок</p>
          <div className={styles.checkboxes}>
            <label className={styles.label}>
              <input type='checkbox' className={styles.checkbox}/>
              Все
            </label>
            <label className={styles.label}>
              <input type='checkbox' className={styles.checkbox}/>
              Без пересадок
            </label>
            <label className={styles.label}>
              <input type='checkbox' className={styles.checkbox}/>
              1 пересадка
            </label>
            <label className={styles.label}>
              <input type='checkbox' className={styles.checkbox}/>
              2 пересадки
            </label>
            <label className={styles.label}>
              <input type='checkbox' className={styles.checkbox}/>
              3 пересадки
            </label>
          </div>
        </div>
        <div className={styles.content}>
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab}/>
          <CardsList cards={tickets} />
        </div>
      </div>
    </div>
  )
}

export default App;

