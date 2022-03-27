// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUuWbk7trGjO69glogHL4Bi__VmZIj6Po",
  authDomain: "clgproj-3faab.firebaseapp.com",
  projectId: "clgproj-3faab",
  storageBucket: "clgproj-3faab.appspot.com",
  messagingSenderId: "497812590586",
  appId: "1:497812590586:web:9fa3bdcc733ac5539ade43",
  measurementId: "G-RK20E7P2PD",
};

// Initialize Firebase
const fire = initializeApp(firebaseConfig);
const db = getFirestore(fire);

export { db, fire };
