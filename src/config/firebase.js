
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCReW4bOpaVA7oJM0NyDutf_GydZz4u53I",
  authDomain: "vite-contact-13e07.firebaseapp.com",
  projectId: "vite-contact-13e07",
  storageBucket: "vite-contact-13e07.appspot.com",
  messagingSenderId: "405458765557",
  appId: "1:405458765557:web:f027e97dcb038e9b9127bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
