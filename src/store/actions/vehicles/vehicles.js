import * as actionTypes from '../../actions/actionTypes';

import axios from '../../../springboot-axios';
import { serializeFunction, deserializeFunction } from '../../../utils/redux';

// Synchronous
export const loadVehiclesStart = () => {
    return {
        type: actionTypes.LOAD_VEHICLES_START
    };
};

export const loadVehiclesSuccess = vehicles => {
    return {
        type: actionTypes.LOAD_VEHICLES_SUCCESS,
        vehicles
    };
};

export const loadVehicleshFail = error => {
    return {
        type: actionTypes.LOAD_VEHICLES_FAIL,
        error
    };
};

export const subscribeLiveVehicleshStatus = callback => {
    return {
        type: actionTypes.SUBSCRIBE_LIVE_VEHICLES_STATUS,
        callback
    };
};

export const unsubscribeLiveVehicleshStatus = index => {
    return {
        type: actionTypes.UNSUBSCRIBE_LIVE_VEHICLES_STATUS,
        index
    };
};

export const notifyLiveVehiclesStatusSubscribersSuccess = data => {
    return {
        type: actionTypes.NOTIFY_LIVE_VEHICLES_SUBSCRIBERS_SUCCESS,
        data
    };
}

export const notifyLiveVehiclesStatusSubscribersFailed = error => {
    return {
        type: actionTypes.NOTIFY_LIVE_VEHICLES_SUBSCRIBERS_FAIL,
        error
    };
}

// Asynchronous
export const loadVehicles = () => {
    return async (dispatch, getState) => {
        dispatch(loadVehiclesStart())

        try {
            const response = await axios({
                url: `getVehicleListBasedOnFleetowner?fleetOwner=${getState().auth.user.uid}`,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            dispatch(loadVehiclesSuccess(response.data));
        } catch (error) {
            dispatch(loadVehicleshFail(error));
        }
    }
}

export const startLiveVehicleStatus = () => {
    return async (dispatch, getState) => {
        let subscriptionIndex = null;
        const liveUpdateFetcher = setInterval(async () => {
            if (!subscriptionIndex) {
                subscriptionIndex = getState().vehicles.latestSubscriptionIndex
            }
            try {
                if (getState().vehicles.liveStatusSubscribers.length < subscriptionIndex) {
                    clearInterval(liveUpdateFetcher);
                }

                const response = await axios({
                    url: `getVehicleLiveStatus?fleetowner=${getState().auth.user.uid}`,
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (JSON.stringify(response.data) !== JSON.stringify(getState().vehicles.liveStatusData)) {
                    dispatch(notifyLiveVehiclesStatusSubscribersSuccess(response.data));
                }
            } catch (error) {
                dispatch(notifyLiveVehiclesStatusSubscribersFailed(error));
            }
        }, 2000);
        dispatch(subscribeLiveVehicleshStatus(serializeFunction(liveUpdateFetcher)));
    }
}


export const stopLiveVehicleStatus = (index) => {
    return async (dispatch, getState) => {
        const callback = getState().vehicles.liveStatusSubscribers[index];

        clearInterval(deserializeFunction(callback));
        dispatch(unsubscribeLiveVehicleshStatus(index));
    }
}