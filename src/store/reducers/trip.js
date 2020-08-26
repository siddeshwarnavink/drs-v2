import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils/object';

const initialState = {
    error: null,
    loading: false,
    data: [],
};

const loadTripDataStart = (state, action) => {
    return updateObject(state, { error: null, loading: true });
};

const loadTripDataSuccess = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: false,
        data: action.data
    });
};

const loadTripDataFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
    });
};


export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_TRIP_DATA_START: return loadTripDataStart(state, action);
        case actionTypes.LOAD_TRIP_DATA_SUCCESS: return loadTripDataSuccess(state, action);
        case actionTypes.LOAD_TRIP_DATA_FAIL: return loadTripDataFail(state, action);
        default: return state;
    }
}