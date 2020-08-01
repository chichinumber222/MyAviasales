import React, { useState } from 'react';
import Logo from '../../images/Logo.png';
import styles from './app.module.scss';
import Checkboxes from '../checkboxes';
import TicketServiceTest from '../../services/ticket-service-test';
import CardsList from '../cards-list';
import Tabs from '../tabs';
import 'antd/dist/antd.css';

function App() {
  const [ activeTab, setActiveTab ] = useState(1);
  const [ tickets, setTickets ] = useState(TicketServiceTest());

  const optionsCheckboxes = ['Все', 'Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];

  return (
    <div className={styles.app}>
      <div className={styles.logo}>
        <img src={Logo} alt='logo' />
      </div>
      <div className={styles.main}>
        <div className={styles.menu}>
          <p className={styles.menu__heading}>Количество пересадок</p>
          <Checkboxes options={optionsCheckboxes}/>
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

