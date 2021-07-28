// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "APIKEY",
  authDomain: "AUTHDOMAIN",
  projectId: "PROJECT-ID",
  storageBucket: "STORAGEBUCKET",
  messagingSenderId: "MESSAGINGSENDERID",
  appId: "APP-ID",
  measurementId: "MEASUREMENTID"
});

const auth = firebase.auth();

export { auth };
