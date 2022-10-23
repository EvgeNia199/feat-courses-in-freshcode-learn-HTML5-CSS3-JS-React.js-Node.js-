import React, { Component } from 'react'

//Задание 2
//Реализуйте классовый компонент счетчик. В качестве состояния 
//компонента возьмите значение счетчика и шаг изменения;
// в компоненте отображается в разметке значения счетчика и две 
//кнопки + и - , которые увеличивают или уменьшают на шаг значение его.
// Вызовите компонент Счетчик в главном компоненте App, управляя 
//с помощью передаваемых пропсов, состояниями его значения и шага.

export default class Countar extends Component {
    constructor(props){
        super(props)
        this.state={
            count: 0
        };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);

    }
    increment(){
        this.setState(state => ({
            count: state.count + 1
        }));
    }
    decrement(){
        this.setState(state => ({
            count: state.count - 1
        }));
    }
    reset(){
        this.setState({
            count: 0
        })
    }
  render() {
    return(
    <div>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>
        <button onClick={this.reset}>reset</button>
        <h1>Current {this.state.count}</h1>
    </div>
    )
  }
}
