import React from 'react'
import styles from '../styles/componentStyles/header.module.css';
import logo from '../images/logo.svg';

export default function Header() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.logo}>
                POWER<br></br><span>CLUB</span>
            </div>
            <div className={styles.rectangle}/>
            <div>
                <img src={logo} alt='logo'/>
            </div>
            <div className={styles.nav}>
                <div>
                    <a href='#1'>Тренера</a>
                </div>
                <div>
                    <a href='#2'>Занятия</a>
                </div>
                <div>
                    <a href='#3'>Мы в соц сетях</a>
                </div>
                <div>
                    <a href='#4'>Рассчитать стоимость</a>
                </div>
                <div>
                    <a href='#5'>Свяжитесь с нами</a>
                </div>
                <div>
                    <a href='tel:+78008008080'>+7-900-800-70-60</a>
                </div>
            </div>
            
        </div>
    )
}
