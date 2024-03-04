// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmsNeEPis-TYk0a6muSSsaF1sAeasEkWU",
  authDomain: "main-dragon-website.firebaseapp.com",
  projectId: "main-dragon-website",
  storageBucket: "main-dragon-website.appspot.com",
  messagingSenderId: "5977897181",
  appId: "1:5977897181:web:8a8b492baa93ce2f494334"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
 