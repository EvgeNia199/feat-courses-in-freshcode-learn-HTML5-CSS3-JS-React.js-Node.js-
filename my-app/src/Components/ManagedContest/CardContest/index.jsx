import React, { useState } from 'react'
import styles from './CardContest.module.scss'

export default function CardContest(props) {

 return (
  <>

    <div className={styles.cardWrapper}>
    <div>
        <img src={props.data.iconSrc} alt="icon" />

         <p>{props.data.head}</p>
         </div>
                  
        <p>{props.data.body}</p>     

    </div>
    </>
  )
}