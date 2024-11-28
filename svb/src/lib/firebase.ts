// Import the functions you need from the SDKs you need
import { deleteApp, getApps, initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0Wl6Dr7F7c4Ld1GKMSlQ1vB66WzEuMFg",
  authDomain: "svbt-d42bc.firebaseapp.com",
  projectId: "svbt-d42bc",
  storageBucket: "svbt-d42bc.firebasestorage.app",
  messagingSenderId: "9021789951",
  appId: "1:9021789951:web:2f1f4a5d3a519a8e469eca"
};

// Initialize Firebase
let firebaseApp: FirebaseApp;

if(!getApps().length){
    firebaseApp = initializeApp(firebaseConfig);
}else{
    firebaseApp = getApps()[0]
    deleteApp(firebaseApp)
    firebaseApp = initializeApp(firebaseConfig);
}

export const db = getFirestore(firebaseApp)
export const auth = getAuth(firebaseApp)
export const googleProvider = new GoogleAuthProvider()