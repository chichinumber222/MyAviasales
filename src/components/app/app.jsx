import React, { useState } from 'react';
import Logo from '../../images/Logo.png';
import styles from './app.module.scss';
import { Checkbox } from 'antd';
import Tabs from '../tabs';
import 'antd/dist/antd.css';

function App() {
  const checkboxOptions = ['Все', 'Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];

  const [ activeTab, setActiveTab ] = useState(1);

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
          <div>
            <Tabs activeTab={activeTab} setActiveTab={setActiveTab}/>
          </div>
          <div className={styles.cards}>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
