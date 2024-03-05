// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
console.log(import.meta.env.VITE_PASS)
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:  import.meta.env.VITE_APIKEY,
  authDomain:  import.meta.env.VITE_AuthDomain,
  projectId: import.meta.env.VITE_ProjectId,
  storageBucket: import.meta.env.StorageBucket,
  messagingSenderId: import.meta.env.MessagingSenderId,
  appId:  import.meta.env.AppId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
 