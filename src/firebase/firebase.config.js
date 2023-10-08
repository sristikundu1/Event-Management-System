// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaLG8TS28QoKmrkB3rFtqCP21h2Wix2tk",
  authDomain: "phantasy-event-management.firebaseapp.com",
  projectId: "phantasy-event-management",
  storageBucket: "phantasy-event-management.appspot.com",
  messagingSenderId: "382812787096",
  appId: "1:382812787096:web:95fa47aa022834de95dbed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;