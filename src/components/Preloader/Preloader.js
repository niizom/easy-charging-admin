import React from 'react';
import { Spin } from 'antd';
import styles from './Preloader.module.scss';

function Preloader() {
    return (
        <div className={styles.centerItem}>
            <Spin size="large" />
        </div>
    );
}

export default Preloader;
