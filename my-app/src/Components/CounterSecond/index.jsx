import React, { Component } from 'react'
import PropTypes from 'prop-types';

// //rconst крнструктор

export default class CounterSecond extends Component {
    constructor(props) {
        super(props);  
        this.state = {
           value: 0,
        };
        this.sayHello2 = this.sayHello2.bind(this);
      }
      sayHello = () => {
        alert(this.state.value);
      }
      sayHello2(){
        alert(this.state.value);
      }
      inc = () => { 
        const {value} = this.state;
        const {step} = this.props;
        this.setState({value: value+step});
      }
      dec = () => { 
        const {value} = this.state;
        const {step} = this.props;
        this.setState({value: value-step});
      }
      reset = () => {
        this.setState({
          
      })
      }
      render() {
        const {value} = this.state;
        return (
          <>
            <h2>Counter {value}</h2>
            <button onClick={this.inc}>+</button>
            <button onClick={value >= 0 ? this.dec : null}>-</button>
            <button onClick={this.sayHello2}>sayHello</button>

          </>
        )
      }
    }

    CounterSecond.propTypes ={
        step: PropTypes.number
    }

    CounterSecond.defaultProps = {
        step: 1,
    }