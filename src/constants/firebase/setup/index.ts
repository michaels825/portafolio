import * as firebase from "firebase/app";
import "firebase/auth";
import 'firebase/database';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyCAHeZWswCqpTklhIUVT6JtzqPXwrKW4U0",
    authDomain: "michaelroportfolio.firebaseapp.com",
    projectId: "michaelroportfolio",
    storageBucket: "michaelroportfolio.appspot.com",
    messagingSenderId: "207897599925",
    appId: "1:207897599925:web:5407aaed0a6c2b904243fc",
    measurementId: "G-W5CNN657PC"
};

// Initialize Firebase
var Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;