// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.VITE_API_KEY,
  authDomain: "todo-a9408.firebaseapp.com",
  projectId: "todo-a9408",
  storageBucket: "todo-a9408.appspot.com",
  messagingSenderId: "212564444295",
  appId: "1:212564444295:web:778f53b5883ba58af7e422"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);