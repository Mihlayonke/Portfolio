// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcFWFUkGu5VtA8U0xRKz7HGWzyBWyy7f8",
  authDomain: "portfolio-mihla.firebaseapp.com",
  projectId: "portfolio-mihla",
  storageBucket: "portfolio-mihla.appspot.com",
  messagingSenderId: "172108473457",
  appId: "1:172108473457:web:c28fe0372dea44ffcf27d0",
  measurementId: "G-LNW2SY1QQW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
const analytics = getAnalytics(app);