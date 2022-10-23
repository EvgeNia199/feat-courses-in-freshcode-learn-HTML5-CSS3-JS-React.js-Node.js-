// import React, { Component } from 'react';
// import InnerCounter from '../InnerCounter';
// import PropTypes from 'prop-types';
// import {createContext} from 'react';


// // const stepContext = createContext();

// export default class CounterSecond extends Component {
//   constructor(props) {
//     super(props);  
//     this.state = {
//        value: 0,
//     };
//   }
//   inc = () => { 
//     const {value} = this.state;
//     const {step} = this.props;
//     this.setState({value: value+step});
//   }
//   dec = () => { 
//     const {value} = this.state;
//     const {step} = this.props;
//     this.setState({value: value-step});
//   }
//   NewValueHandler = (newValue) => {
//     this.setState({value: newValue});
//   }

//   shouldComponentUpdate(nextProps, nextState){
//     const {value} = this.state;
//     const {step } = this.props;
//     console.log('next props',nextProps);
//     console.log('next state', nextState);
//     // true - rerender
//     return value !== nextState.value && step !== nextProps.step; 
//   }

//   render() {
//     const {value} = this.state;
//     console.log('counter render');
//     return (
//       <>
//         <h2>Counter {value}</h2>
//         <button onClick={this.inc}>+</button>
//         <button onClick={this.dec}>-</button>
//       </>
//     )
//   }
// }

// CounterSecond.propTypes = {
//   step: PropTypes.number
// }

// CounterSecond.defaultProps = {
//   step: 1,
// }