// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfEAuZYSQ_HpHybfThs4XuT4ym4ukg0ss",
  authDomain: "portfolio-b638b.firebaseapp.com",
  projectId: "portfolio-b638b",
  storageBucket: "portfolio-b638b.appspot.com",
  messagingSenderId: "659898321658",
  appId: "1:659898321658:web:14b8e63b246f90fd875743",
  measurementId: "G-ZERBVKDG25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app);