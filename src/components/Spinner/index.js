import React from 'react';
import styles from './index.module.css'

const Spinner = () => (
    <svg class={styles.spinner} viewBox="0 0 50 50">
    <circle class={styles.path} cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
    </svg>
)

export default Spinner;