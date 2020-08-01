import React from 'react';
import PropTypes from 'prop-types';
import { Radio } from 'antd';
import 'antd/dist/antd.css';
import styles from './tabs.module.scss';

function Tabs({ activeTab, setActiveTab }) {
  return (
    <Radio.Group
      size="large"
      buttonStyle="solid"
      value={activeTab}
      onChange={(event) => setActiveTab(event.target.value)}
    >
      <Radio.Button className={styles.button} value={1}>
        самый дешевый
      </Radio.Button>
      <Radio.Button className={styles.button} value={2}>
        самый быстрый
      </Radio.Button>
    </Radio.Group>
  );
}

Tabs.propTypes = {
  activeTab: PropTypes.number.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default Tabs;

// testing
