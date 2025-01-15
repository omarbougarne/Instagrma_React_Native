// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcKr5CLMcVQ3ChL7gHAS9wtvj9Efe19wQ",
  authDomain: "ingram-9eb79.firebaseapp.com",
  projectId: "ingram-9eb79",
  storageBucket: "ingram-9eb79.firebasestorage.app",
  messagingSenderId: "278318372414",
  appId: "1:278318372414:web:04123efa4a3c0e6001e36f",
  measurementId: "G-HG81M3Q20X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);