import {userDataSaga} from './userDataSaga.js';

import ACTION_TYPES from '../actions/actionTypes';
import {takeLatest} from 'redux-saga/effects'
function *rootSaga(){
    yield takeLatest(ACTION_TYPES.GET_USER_ACTION, userDataSaga);
}
export default rootSaga;