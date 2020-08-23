/* istanbul ignore file */

import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils/object';

const initialState = {
    error: null,
    loading: false,
    isAuthenticated: false,
    mobile: {
        confirmationResult: null
    }
};

const authStart = (state, action) => {
    return updateObject(state, { error: null, loading: true });
};

const authSuccess = (state, action) => {
    return updateObject(state, {
        isAuthenticated: true,
        error: null,
        loading: false
    });
};

const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
        isAuthenticated: false
    });
};

const mobileAuthPending = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: false,
        mobile: {
            ...state.mobile,
            confirmationResult: action.confirmationResult
        }
    });
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.MOBILE_AUTH_PENDING: return mobileAuthPending(state, action);
        default: return state;
    }
}