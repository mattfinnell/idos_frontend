import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  getAuth,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAZUSL6XLtIfgguub8Rcet1DfyXrbbhxcw",
  authDomain: "international-database-of-send.firebaseapp.com",
  projectId: "international-database-of-send",
  storageBucket: "international-database-of-send.appspot.com",
  messagingSenderId: "274574434109",
  appId: "1:274574434109:web:8cc8a181e9477a12cd2f54",
  measurementId: "G-56D4KKCL1V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export utilities
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
export const facebookAuthProvider = new FacebookAuthProvider();
export const firebaseErrors = {
  emailAlreadyInUse: "auth/email-already-in-use",
};
