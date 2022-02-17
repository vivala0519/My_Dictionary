// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtCcIa6kdAlH1PcseIUzPG7UVAYa0Xi6Y",
  authDomain: "sparta-prac-3d46d.firebaseapp.com",
  projectId: "sparta-prac-3d46d",
  storageBucket: "sparta-prac-3d46d.appspot.com",
  messagingSenderId: "139428622818",
  appId: "1:139428622818:web:402bf024d67b0d942c49bb",
  measurementId: "G-NXRMQ7XVN7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(); 
