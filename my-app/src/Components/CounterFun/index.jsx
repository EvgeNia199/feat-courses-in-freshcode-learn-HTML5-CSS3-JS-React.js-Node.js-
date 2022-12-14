import React, {useState} from 'react'



export default function CounterFun(props) {
    const [value, setValue] = useState(0);
    const inc = () => { 
      setValue(value + props.step);
    }
    const dec = () => { 
      setValue(value - props.step);
    }
    return (
      <>
          <h2>Counter {value}</h2>
          <button onClick={inc}>+</button>
          <button onClick={dec}>-</button>
      </>
    )
  }



// export default class Counter extends Component {
//     constructor(props) {
//       super(props);  
//       this.state = {
//          value: 0,
//       };
//     }
//     inc = () => { 
//       const {value} = this.state;
//       const {step} = this.props;
//       this.setState({value: value+step});
//     }
//     dec = () => { 
//       const {value} = this.state;
//       const {step} = this.props;
//       this.setState({value: value-step});
//     }
//     NewValueHandler = (newValue) => {
//       this.setState({value: newValue});
//     }
//     render() {
//       const {value} = this.state;
//       return (
//         <>
//           <h2>Counter {value}</h2>
//           <button onClick={this.inc}>+</button>
//           <button onClick={this.dec}>-</button>
//           <InnerCounter 
//               value={this.state.value} 
//               NewValueHandler={this.NewValueHandler}
//           />
//         </>
//       )
//     }
//   }
  
//   Counter.propTypes = {
//     step: PropTypes.number
//   }
  
//   Counter.defaultProps = {
//     step: 1,
//   }