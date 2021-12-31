// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCksogeh94eNWnozVcghMkSMwa2PibBN-Q",
  authDomain: "markmovie-c5259.firebaseapp.com",
  projectId: "markmovie-c5259",
  storageBucket: "markmovie-c5259.appspot.com",
  messagingSenderId: "442096089833",
  appId: "1:442096089833:web:63521ced1af133a405ce78",
  measurementId: "G-8KERSV4V5Y"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);