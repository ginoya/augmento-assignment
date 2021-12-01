import { fetchDataFromJson, saveErrorMsg, saveFetchedData } from "./AssignmentActions";
import { call, put } from 'redux-saga/effects';
import { DashboardData } from "../../Assets/DashboardData";

export function* handleRequestData() {
    try {
        // const response = yield call(fetchDataFromJson); api call
        //   const { data } = response;
        yield put(saveFetchedData(DashboardData));
    }
    catch (error:any) {
        yield put(saveErrorMsg(error.message));
    }
}

