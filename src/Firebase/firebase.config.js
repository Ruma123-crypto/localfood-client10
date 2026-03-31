// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxyGv4556ZmPMu3gpiWiyunu5kgyCBXsI",
  authDomain: "smart-deals-13ba7.firebaseapp.com",
  projectId: "smart-deals-13ba7",
  storageBucket: "smart-deals-13ba7.firebasestorage.app",
  messagingSenderId: "494484304517",
  appId: "1:494484304517:web:594d2e9c1ca7b0188befec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);