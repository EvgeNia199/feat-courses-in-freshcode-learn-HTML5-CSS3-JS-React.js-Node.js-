import React from 'react';
import  {connect} from 'react-redux'
// import ACTION_TYPES from '../../actions/actionTypes';
import * as actionCreators from '../../actions';
function Counter(props) {
    const stepHandler = (e) => {
      props.setStep(Number(e.target.value));
    }
    return (
      <>
          <h1>{props.value}</h1>
          <input type="number" value={props.step} onChange={stepHandler}/>
          <button onClick={props.add}>+</button>
          <button onClick={props.sub}>-</button>
      </>
  );
    };
  const mapDispatchToProps = (dispatch) => {
      return{
          add: () => dispatch(actionCreators.add()),
          sub: () => dispatch(actionCreators.sub()),
          setStep: (newStep) => dispatch(actionCreators.setStep(newStep)),
      }
  }
  const mapStateToProps = (state) => state.counterReducer;
  
  export default connect(mapStateToProps,
    mapDispatchToProps) (Counter);