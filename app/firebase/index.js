import firebase from 'firebase';

import {defaultState} from 'configStore';

try {
  var config = {
    apiKey: "AIzaSyCbQQCuYJ4rpkzY3UZXWGrBib9f5hqEl7c",
    authDomain: "magic-f7ace.firebaseapp.com",
    databaseURL: "https://magic-f7ace.firebaseio.com",
    projectId: "magic-f7ace",
    storageBucket: "",
    messagingSenderId: "223353267065"
  };
  firebase.initializeApp(config);
} catch (e) {

}

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const firebaseRef = firebase.database().ref();
export default firebase;
