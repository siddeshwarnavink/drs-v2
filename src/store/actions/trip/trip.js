import * as actionTypes from '../../actions/actionTypes';

import axios from '../../../springboot-axios';

// Synchronous
export const loadTripDataStart = () => {
    return {
        type: actionTypes.LOAD_TRIP_DATA_START
    };
};

export const loadTripDataSuccess = data => {
    return {
        type: actionTypes.LOAD_TRIP_DATA_SUCCESS,
        data
    };
};

export const loadTripDataFail = error => {
    return {
        type: actionTypes.LOAD_TRIP_DATA_FAIL,
        error
    };
};

// Asynchronous
export const loadTripData = seqNum => {
    return async (dispatch) => {
        dispatch(loadTripDataStart());
        try {
            const response = await axios({
                url: `getTripPlannerDataBasedOnSeqNum?seqNum=${seqNum}`,
                method: 'GET',
            });
            dispatch(loadTripDataSuccess(response.data));
        } catch (error) {
            dispatch(loadTripDataFail(error));
        }
    }
}