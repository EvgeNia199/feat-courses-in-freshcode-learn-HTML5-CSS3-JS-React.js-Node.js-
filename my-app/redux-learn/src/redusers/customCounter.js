import ACTION_TYPES from "../actions/actionTypes";

const initialState ={
    value: 0,
}

const userReducer = (state = initialState, action) => {
    console.log(action);
    switch(action.type){
        case ACTION_TYPES.CUSTOM_INCR: {
            return {
                ...state,
                value: state.value +1
            };
        }
        case ACTION_TYPES.CUSTOM_DECR: {
            return {
                ...state,
                value: state.value -1
            };
        }
        case ACTION_TYPES.CUSTOM_SET_VALUE: {
            return {
                ...state,
                value: action.payload
            };
        }
        default: return state;
    }

}

export default userReducer;