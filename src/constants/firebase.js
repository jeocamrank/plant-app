import { initializeApp } from "firebase/app";
import { getAuth, sendEmailVerification } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9F8vu6PdDJHpQIqfC8k0_77HDG41qLfU",
  authDomain: "plantappauth-c85fa.firebaseapp.com",
  projectId: "plantappauth-c85fa",
  storageBucket: "plantappauth-c85fa.appspot.com",
  messagingSenderId: "1049532659110",
  appId: "1:1049532659110:web:15467a32c0b601ea9e0b67"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
