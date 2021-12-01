import axios from 'axios';

export const DashboardConstants = {
    REQUEST_DATA: 'FETCH_DATA',
    FETCHED_DATA_SUCCESS: 'FETCHED_DATA_SUCCESS',
    FETCHED_DATA_ERROR: 'FETCHED_DATA_ERROR'
}

export const requestData = () => {
    return {
        type: DashboardConstants.REQUEST_DATA
    }
}
export const saveFetchedData = (data: any) => {
    return {
        type: DashboardConstants.FETCHED_DATA_SUCCESS,
        payload: data
    }
}
export const saveErrorMsg = (errmssg: string) => {
    return {
        type: DashboardConstants.FETCHED_DATA_ERROR,
        payload: errmssg
    }
}
export const fetchDataFromJson = () => {
    return axios.request({
        method:'GET',
        url:''//get api url
    })
}