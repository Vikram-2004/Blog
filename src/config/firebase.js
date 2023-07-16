import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyAP1meabSpYu4qHY9wuRuhdUbOCgZ2jzPc",
//   authDomain: "blog-3365f.firebaseapp.com",
//   projectId: "blog-3365f",
//   storageBucket: "blog-3365f.appspot.com",
//   messagingSenderId: "370177367909",
//   appId: "1:370177367909:web:9fb8bf382fafce5f024b8c",
//   measurementId: "G-7JR0KNLQ20",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
const firebaseConfig = {
  apiKey: "AIzaSyB9DkWY8jASOwxX_L-PqleSxUCqNPcS6rI",
  authDomain: "blogg-ad40e.firebaseapp.com",
  projectId: "blogg-ad40e",
  storageBucket: "blogg-ad40e.appspot.com",
  messagingSenderId: "435740749213",
  appId: "1:435740749213:web:b554179b72f478ff799374",
  measurementId: "G-QGCPJL09PE",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
