// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDNBtIzBoyhVr6hoSAsBqidHbdt4Bk2tn4",
  authDomain: "clone-6d597.firebaseapp.com",
  projectId: "clone-6d597",
  storageBucket: "clone-6d597.appspot.com",
  messagingSenderId: "456599511926",
  appId: "1:456599511926:web:89e7cf61b8b51195df9057",
  measurementId: "G-RTT7RTN25Z"
});

const auth = firebase.auth();

export { auth };