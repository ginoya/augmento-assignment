import React from 'react'
import { DashboardConstants } from './AssignmentActions';
const initState = {}

type actionType = {
    type: string,
    payload: any
}

function AssigmentReducer(state = initState, action: actionType) {
    switch (action.type) {
        case DashboardConstants.FETCHED_DATA_SUCCESS:
            return { ...state, data: action.payload }
        case DashboardConstants.FETCHED_DATA_ERROR:
            return { ...state, error: action.payload }
        default:
            return state;
    }
}

export default AssigmentReducer
