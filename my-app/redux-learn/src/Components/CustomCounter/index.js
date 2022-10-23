import React, { useState } from "react";
import { connect } from "react-redux";
import { customDecr, customIncr, customSetValue } from "./../../actions";

function CustomCounter(props) {
  const [valueToChange, setValueToChange] = useState(0);

  const changeValueToChange = (e) => {
    setValueToChange(e.target.value);
  };

  return (
    <>
      <div>Counter: {props.customCounter.value}</div>
      <button onClick={props.customIncr}>INCR</button>
      <button onClick={props.customDecr}>DECR</button>
      <input type="number" onChange={changeValueToChange} />
      <button onClick={()=> props.customSetValue(valueToChange)}>murzik lox</button>
    </>
  );
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => {
  return {
    customDecr: () => {
      dispatch(customDecr());
    },
    customIncr: () => {
      dispatch(customIncr());
    },
    customSetValue: (payload) => {
      dispatch(customSetValue(payload));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CustomCounter);
