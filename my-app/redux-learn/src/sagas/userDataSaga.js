import {getUserRequest, getUserError, getUserSuccess} from '../actions/';
import {put} from 'redux-saga/effects'
import getRandomUser from '../api';

export function *userDataSaga(action){
    yield put(getUserRequest())
    try{
        const data = yield getRandomUser();
        console.log('in SAGA');
        console.log(data);
        console.log('get');
        console.log(getUserSuccess(data.results));
        yield put(getUserSuccess(data.results))
    } catch(error){
        yield put(getUserError(error))
    }
}