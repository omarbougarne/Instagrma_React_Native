// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcKr5CLMcVQ3ChL7gHAS9wtvj9Efe19wQ",
  authDomain: "ingram-9eb79.firebaseapp.com",
  projectId: "ingram-9eb79",
  storageBucket: "ingram-9eb79.appspot.com",
  messagingSenderId: "278318372414",
  appId: "1:278318372414:web:04123efa4a3c0e6001e36f",
  measurementId: "G-HG81M3Q20X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
const analytics = getAnalytics(app);