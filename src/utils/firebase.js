// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPT8vs03ig2cMeRqFc_GOLAHDiAkwOvr4",
  authDomain: "movie-netifly.firebaseapp.com",
  projectId: "movie-netifly",
  storageBucket: "movie-netifly.appspot.com",
  messagingSenderId: "955429182068",
  appId: "1:955429182068:web:866fdd95da1e3cf6ca8f21",
  measurementId: "G-G943JLJ3EK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();