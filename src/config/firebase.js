/* istanbul ignore file */

import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDO3tqc1sHknIJKYSkZGk4Z7SbY9BKt9lY",
    authDomain: "fleetos-bc8f4.firebaseapp.com",
    databaseURL: "https://fleetos-bc8f4.firebaseio.com",
    projectId: "fleetos-bc8f4",
    storageBucket: "fleetos-bc8f4.appspot.com",
    messagingSenderId: "81334380836",
    appId: "1:81334380836:web:ba2891bd762b93a8662bb1",
    measurementId: "G-13BMDP9HW9"
};

firebase.initializeApp(firebaseConfig)

firebase.auth().settings.appVerificationDisabledForTesting = process.env.NODE_ENV === 'development';

window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('captcha-container', {
    'size': 'invisible'
});

export default firebase;