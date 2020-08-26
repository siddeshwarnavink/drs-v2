/* istanbul ignore file */

import * as actionTypes from '../actions/actionTypes';

import firebase from '../../config/firebase';
import axios from '../../springboot-axios';

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
                await window.confirmationResult.confirm(phoneNumber)
                const credential = firebase.auth.PhoneAuthProvider.credential(window.confirmationResult.verificationId, phoneNumber);

                const { user } = await firebase.auth().signInWithCredential(credential);

                await firebase.firestore().collection("Users").doc(user.uid).update({ status: 1 });

                // await axios({
                //     url: '/authenticate',
                //     method: 'POST',
                //     headers: {
                //         'Accept': 'application/json',
                //         'Content-Type': 'application/json;charset=UTF-8'
                //     },
                //     data: {
                //         username: user.uid,
                //         password: user.phoneNumber
                //     }
                // });
            }
        } catch (error) {
            dispatch(authFail(error));
        }
    }
}

export const setInitialAuthState = () => {
    return (dispatch) => {
        firebase.auth().onAuthStateChanged(async user => {
            if (user) {
                await firebase.firestore().collection("Users").doc(user.uid).update({ status: 1 });

                // await axios({
                //     url: '/authenticate',
                //     method: 'POST',
                //     headers: {
                //         'Accept': 'application/json',
                //         'Content-Type': 'application/json;charset=UTF-8'
                //     },
                //     data: {
                //         username: user.uid,
                //         password: user.phoneNumber
                //     }
                // });

                dispatch(authSuccess({
                    uid: user.uid,
                    email: user.email,
                    phoneNumber: user.phoneNumber
                }));
            }
        })
    }
}