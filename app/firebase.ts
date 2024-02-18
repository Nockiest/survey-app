// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfL7a64UMQAAgGdifhgpz5qzSMGRQmRac",
  authDomain: "surveyapp-dbb8b.firebaseapp.com",
  projectId: "surveyapp-dbb8b",
  storageBucket: "surveyapp-dbb8b.appspot.com",
  messagingSenderId: "736246615543",
  appId: "1:736246615543:web:87eeb936118d9d3ca632f2",
  measurementId: "G-SYB2NEH4LB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);