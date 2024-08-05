// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjVe4yaScz801ASRSVmtiyRcPf80JWjjY",
  authDomain: "pantry-app-92d6a.firebaseapp.com",
  projectId: "pantry-app-92d6a",
  storageBucket: "pantry-app-92d6a.appspot.com",
  messagingSenderId: "1051112872839",
  appId: "1:1051112872839:web:993f6397d88c4ae643d122"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export {app, firestore};