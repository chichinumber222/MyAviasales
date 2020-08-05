import React from 'react';
import PropTypes from 'prop-types';
import { Radio } from 'antd';
import 'antd/dist/antd.css';
import styles from './tabs.module.scss';

function Tabs({ activeTab, selectTabDispatch }) {
  return (
    <Radio.Group
      size="large"
      buttonStyle="solid"
      value={activeTab}
      onChange={(event) => selectTabDispatch(event.target.value)}
    >
      <Radio.Button className={styles.button} value="cheapest">
        самый дешевый
      </Radio.Button>
      <Radio.Button className={styles.button} value="fastest">
        самый быстрый
      </Radio.Button>
    </Radio.Group>
  );
}

Tabs.propTypes = {
  activeTab: PropTypes.string.isRequired,
  selectTabDispatch: PropTypes.func.isRequired,
};

export default Tabs;
