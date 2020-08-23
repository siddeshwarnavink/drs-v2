/* istanbul ignore file */

import * as actionTypes from '../actions/actionTypes';

import firebase from '../../config/firebase';

// Synchronous
export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = user => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        user
    };
};

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const mobileAuthPending = confirmationResult => {
    return {
        type: actionTypes.MOBILE_AUTH_PENDING,
        confirmationResult
    }
}

// Asynchronous
export const mobileAuth = (phoneNumber) => {
    return async (dispatch, getState) => {
        dispatch(authStart())
        try {
            if (!getState().auth.mobile.confirmationResult) {
                const confirmResult = await firebase.auth().signInWithPhoneNumber(`+91${phoneNumber}`, window.recaptchaVerifier);
                window.confirmationResult = confirmResult;
                dispatch(mobileAuthPending(confirmResult))
            } else {
                window.confirmationResult.confirm(phoneNumber).then(() => {
                    const credential = firebase.auth.PhoneAuthProvider.credential(window.confirmationResult.verificationId, phoneNumber);
                    firebase.auth().signInWithCredential(credential);
                });
            }
        } catch (error) {
            dispatch(authFail(error));
        }
    }
}

export const setInitialAuthState = () => {
    return (dispatch) => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                dispatch(authSuccess({
                    uid: user.uid,
                    email: user.email,
                    phoneNumber: user.phoneNumber
                }));
            }
        })
    }
}