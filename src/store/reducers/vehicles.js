import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils/object';

const initialState = {
    error: null,
    loading: false,
    vehicles: [],
    liveStatusDataLoaded: false,
    liveStatusData: [],
    liveStatusSubscribers: [],
    latestSubscriptionIndex: null,
    liveStatusDataError: null
};

const loadVehiclesStart = (state, action) => {
    return updateObject(state, { error: null, loading: true });
};

const loadVehicleSuccess = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: false,
        vehicles: action.vehicles
    });
};

const loadVehicleFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
    });
};


const subscribeLiveVehicleshStatus = (state, action) => {
    const updatedLiveStatusSubscribers = [...state.liveStatusSubscribers];
    updatedLiveStatusSubscribers.push(action.callback);

    return updateObject(state, {
        liveStatusSubscribers: updatedLiveStatusSubscribers,
        latestSubscriptionIndex: updatedLiveStatusSubscribers.length
    });
};

const unsubscribeLiveVehicleshStatus = (state, action) => {
    const updatedLiveStatusSubscribers = [...state.liveStatusSubscribers];
    updatedLiveStatusSubscribers.splice(action.index, 1);
    return updateObject(state, {
        liveStatusSubscribers: updatedLiveStatusSubscribers,
        latestSubscriptionIndex: updatedLiveStatusSubscribers.length
    });
};

export const notifyLiveVehicleshStatusSuccess = (state, action) => {
    return updateObject(state, {
        liveStatusDataLoaded: true,
        liveStatusData: action.data
    });
}

export const notifyLiveVehicleshStatusFail = (state, action) => {
    return updateObject(state, {
        liveStatusDataError: action.error,
    });
}


export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_VEHICLES_START: return loadVehiclesStart(state, action);
        case actionTypes.LOAD_VEHICLES_SUCCESS: return loadVehicleSuccess(state, action);
        case actionTypes.LOAD_VEHICLES_FAIL: return loadVehicleFail(state, action);
        case actionTypes.SUBSCRIBE_LIVE_VEHICLES_STATUS: return subscribeLiveVehicleshStatus(state, action);
        case actionTypes.UNSUBSCRIBE_LIVE_VEHICLES_STATUS: return unsubscribeLiveVehicleshStatus(state, action);
        case actionTypes.NOTIFY_LIVE_VEHICLES_SUBSCRIBERS_SUCCESS: return notifyLiveVehicleshStatusSuccess(state, action);
        default: return state;
    }
}