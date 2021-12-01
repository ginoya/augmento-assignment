import { call, put, takeLatest } from 'redux-saga/effects';
import { DashboardConstants } from './components/Assignment/AssignmentActions';
import { handleRequestData } from './components/Assignment/AssignmentSaga';

export function* watcherSaga(){
    yield takeLatest(DashboardConstants.REQUEST_DATA,handleRequestData);
}