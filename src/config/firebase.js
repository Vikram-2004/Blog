import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAP1meabSpYu4qHY9wuRuhdUbOCgZ2jzPc",
  authDomain: "blog-3365f.firebaseapp.com",
  projectId: "blog-3365f",
  storageBucket: "blog-3365f.appspot.com",
  messagingSenderId: "370177367909",
  appId: "1:370177367909:web:9fb8bf382fafce5f024b8c",
  measurementId: "G-7JR0KNLQ20",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
