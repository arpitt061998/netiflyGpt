// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHL_CxuzxWG2ZhRXb_fdwBihQz07ImeOQ",
  authDomain: "netiflygpt.firebaseapp.com",
  projectId: "netiflygpt",
  storageBucket: "netiflygpt.appspot.com",
  messagingSenderId: "340001275243",
  appId: "1:340001275243:web:8f86a01dbafe8298d9202e",
  measurementId: "G-LBH10PS0WX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();