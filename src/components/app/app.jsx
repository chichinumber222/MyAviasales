import React, { useState } from 'react';
import Logo from '../../images/Logo.png';
import styles from './app.module.scss';
import { Checkbox } from 'antd';
import TicketServiceTest from '../../services/ticket-service-test';
import CardsList from '../cards-list';
import Tabs from '../tabs';
import 'antd/dist/antd.css';

function App() {
  const checkboxOptions = ['Все', 'Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];

  const [ activeTab, setActiveTab ] = useState(1);
  const [ tickets, setTickets ] = useState(TicketServiceTest());

  return (
    <div className={styles.app}>
      <div className={styles.logo}>
        <img src={Logo} alt='logo' />
      </div>
      <div className={styles.main}>
        <div className={styles.menu}>
          <p>Количество пересадок</p>
          <Checkbox.Group className={styles.checkboxes} options={checkboxOptions} />
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
