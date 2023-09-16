// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBb7udro4v0bqSnys88NxuJ-mIYRJ4C2r0",
  authDomain: "netflixgpt-e3fc6.firebaseapp.com",
  projectId: "netflixgpt-e3fc6",
  storageBucket: "netflixgpt-e3fc6.appspot.com",
  messagingSenderId: "15572282980",
  appId: "1:15572282980:web:38c28c3333abda8db57971",
  measurementId: "G-TV6VE1ZXKR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();