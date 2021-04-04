import React from 'react'
import {useState} from 'react';

import styles from '../styles/componentStyles/header.module.css';
import logo from '../images/logo.svg';
import IconButton from '@material-ui/core/IconButton';
import DehazeIcon from '@material-ui/icons/Dehaze';


export default function Header() {
const [hide, setHide] = useState(false)

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
                    <a href='#treners'>Тренера</a>
                </div>
                <div>
                    <a href='#schedule'>Занятия</a>
                </div>
                <div>
                    <a href='#3'>Мы В Контакте</a>
                </div>
                <div>
                    <a href='#calculator'>Рассчитать стоимость</a>
                </div>
                <div>
                    <a href='#form'>Свяжитесь с нами</a>
                </div>
                <div>
                    <a href='tel:+78008008080'>+7-900-800-70-60</a>
                </div>
            </div>
            <div className={styles.burger}>
                <IconButton onClick={() => {setHide(!hide)}} color="primary" aria-label="upload picture" component="span">
                    <DehazeIcon />
                </IconButton>
            </div>
            <div style={hide ? {top:'104px'} : {}} className={styles.mobileNav}>
                <div>
                    <a href='#1'>Тренера</a>
                </div>
                <div>
                    <a href='#2'>Занятия</a>
                </div>
                <div>
                    <a href='#3'>Мы В Контакте</a>
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
