import React from "react";
import {NavLink} from "react-router-dom";
import styles from './index.module.css';

const Header = () => (
    <nav className={styles.nav}>
        <ul className={styles.list}>
            <li className={styles.item}>
            <NavLink exact activeClassName={styles.active} to="/">Upload Image</NavLink>
            </li>
            <li className={styles.item}>
            <NavLink exact activeClassName={styles.active} to="/gallery">Gallery</NavLink>
            </li>
        </ul>
    </nav>
)

export default Header;