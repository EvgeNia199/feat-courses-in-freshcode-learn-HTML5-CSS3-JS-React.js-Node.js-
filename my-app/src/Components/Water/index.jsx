import React, { Component } from 'react';
import styles from './Water.module.scss';

// rfc создать функцию
// rcc создать класс
// создать компонент и отресовать ее, вернуть верстку



// Классовый компонент Вода, у него состояние жидкости : (лед, пар, вода).
//  Из главного компонента App передавать температуру и от этого будет 
// менятся состоение компонента Вода

// export default class Water extends Component {
//     constructor(props){
//       super(props);
//       this.state = {
//           shape: 'water'
//       }
//       this.styleWater ='';
//     }
//     changeShape = () => {
//       const {temperature} = this.props;
//       let newShape;
//       if(temperature < 0){
//           newShape = 'ice';
//           this.styleWater = 'iceStyle';
//       } else if(temperature >= 100){
//           newShape = 'steam';
//           this.styleWater = 'steamStyle';
//       } else{
//           newShape = 'water';
//           this.styleWater = 'waterStyle';
//       }
//       this.setState({shape: newShape});
  
//     }
//     render() {
//       this.changeShape();
//       return (
//         <>
          
//           <p className={styles[this.styleWater]}>{this.state.shape}</p>
//         </>
//       )
//     }
//   }