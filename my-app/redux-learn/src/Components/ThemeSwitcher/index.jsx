

import React from 'react'
import { connect } from 'react-redux';
import * as actionCreators from '../../actions';

function ThemeSwitcher(props) {
  const {isLight, setTheme} = props;
  //[isLigth, setIsLigth] = useState(true);
  const themeHandler = (e) => {
    // body поменять
    return setTheme(isLight);
  }
  return (
    <div>
        Theme: {isLight ? "Ligth" : "Dark"}
        <button onClick={themeHandler}>Switched to theme {isLight ? "Ligth" : "Dark"}</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
    return{
        setTheme: (isLight) => dispatch(actionCreators.setTheme(isLight))
    }
};

const mapStateToProps = (state) => {return state.themeReducer;};

export default connect(mapStateToProps,
    mapDispatchToProps) (ThemeSwitcher);