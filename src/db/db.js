// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiWaTV14HB7j4_YXiawyMJyqfP8S8hmhw",
  authDomain: "asma-store-23049.firebaseapp.com",
  projectId: "asma-store-23049",
  storageBucket: "asma-store-23049.firebasestorage.app",
  messagingSenderId: "1004643116052",
  appId: "1:1004643116052:web:97fc83bf86f3d910cdf301"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

export default db