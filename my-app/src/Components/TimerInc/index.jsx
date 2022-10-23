import React, { Component } from 'react'
import styles from './Timer.module.css'


const INTERVAL = 100;

export default class TimerInc extends Component  {
  constructor(props) {
    super(props);
    this.state = {
        value: 0,
        isGameOver: false,
        
    };
  }
  
  increment(){
    this.setState({value: this.state.value + 1});
  }
  
  componentDidMount() {
    this.timerID = setInterval(() => this.increment(), 1000/INTERVAL);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  stop = () => {
    this.setState({isGameOver: true});
    if(this.props.stopValue){
      clearInterval(this.timerID)
    }
}
customFunc=(value)=> {
if(value.toString().length == 1){
    return '0'+value
}
return value
}

  render() {     
    // console.log(this.props);
    // console.log(this.props.step);
    const {value} = this.state;
    // console.log('value222222');
    // console.log(value);
    if(value /INTERVAL === this.props.stopValue){
        this.stop()
    }
    return ( 
    <div>
      <p>Таймер:</p>
      <p>
      
       <span>{`${this.customFunc(Math.round(value/INTERVAL/60/60))}`} : </span>
        <span>{`${this.customFunc(Math.round(value/INTERVAL/60))}`} : </span>
        <span>{`${this.customFunc(Math.round(value/INTERVAL%60))}`}  </span>
        
      
    {
        this.state.isGameOver && <div>GAME OVER!!!!!</div>

    }
      </p>
    </div>
    );
  }
}
