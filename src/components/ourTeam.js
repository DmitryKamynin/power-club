import React from 'react'
import Slider from '../components/slider';

import styles from '../styles/componentStyles/ourTeam.module.css';



export default function ourTeam() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.info}>
                <div className={styles.title}>
                    Уникальное пространство заботы о вашем здоровье и красоте
                </div>
                <div className={styles.description}>
                    Это только на первый взгляд кажется, что тренажеры – самый простой способ поддерживать тело в форме. На самом деле, каждый тренажер таит множество возможностей и функций, о которых Вы узнаете только от тренера-профессионала. Он поможет Вам добиваться ошеломительных результатов, делать тренировки эффективнее, правильно распределять нагрузку, чтобы спорт приносил только удовольствие.
                </div>
            </div>
            <Slider id='abcd'/>
        </div>
    )
}
