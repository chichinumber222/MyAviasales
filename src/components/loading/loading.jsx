import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'antd';
import 'antd/dist/antd.css';
import styles from './loading.module.scss';

function Loading({ successfulDownload, error }) {
  if (successfulDownload || error) {
    return <Alert message={error ? 'Sorry, no data loaded' : 'Data loaded successfully'} type={error ? 'error' : 'success'} className={styles.notification}/>
  }
  return (
    <div className={styles["loadingio-spinner-spinner-n1a61uzra8j"]}>
      <div className={styles["ldio-dn073wlkmag"]}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
  </div>
  )
}

Loading.propTypes = {
  successfulDownload: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
}

export default Loading