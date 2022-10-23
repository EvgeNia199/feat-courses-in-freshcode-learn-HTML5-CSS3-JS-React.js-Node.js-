import React, { Component } from 'react';
import styles from './PhoneCard.module.css';

// Задание 1
// Уровень 2. Сделайте классовый компонент который возвращает разменку 
//из прикрепленного файла task2. это картинка и текст. 
//Вызовите данный компонент в App


export default class PhoneCard extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
  render() {
    const {phoneCard, contantFirst,  contantSecond, contantThird} = this.props.contant;
    return (
      <>
      <section className={styles.mobile}>
                <div className={styles.mobilImg}>
                    <img className={styles.phoneImg} src={phoneCard} alt="phone"></img>
                </div>
                <article className={styles.mobileInfo}>
                    <h3 className={styles.h3}>{contantFirst}</h3>
                    <h2 className={styles.h2}>{contantSecond}</h2>
                    <h4 className={styles.h4}>{contantThird}</h4>
                </article>
            </section>
      
      </>
    )
  }
}
