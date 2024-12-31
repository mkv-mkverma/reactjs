// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvKif-bF2xaEIONbIfyRJJTw5d7rzr3ks",
  authDomain: "netflixgpt-33637.firebaseapp.com",
  projectId: "netflixgpt-33637",
  storageBucket: "netflixgpt-33637.firebasestorage.app",
  messagingSenderId: "22621198",
  appId: "1:22621198:web:d182690beec50b01d0205f",
  measurementId: "G-8XH23XCHY7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
console.log("Firebase Analytics initialized:", analytics);
