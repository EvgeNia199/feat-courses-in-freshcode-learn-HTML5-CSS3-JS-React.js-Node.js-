

import ACTION_TYPES from "../actions/actionTypes";

const initialState = {
    user: {},
    isFetching: false,
    error: null
}

const userDataReducer = (state = initialState, action) => {
    console.log('action');
    console.log(action);
    switch(action.type){
        case ACTION_TYPES.GET_USER_ACTION: {return state;}
        case ACTION_TYPES.GET_USER_REQUEST: { 
            return {...state, isFetching: true, error: null}
        }
        case ACTION_TYPES.GET_USER_SUCCESS: {

            const {user} = action;
            console.log('user1111');
            console.log(user);
            return {...state, user, isFetching: false, error: null}
        }
        case ACTION_TYPES.GET_USER_ERROR: {
            const {error} = action;
            return {...state, error, isFetching: false}
        }
        default: return state;
    }
}

export default userDataReducer;