import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAWsEtaHIp8RTCWNzwEoNf8OIAD-RZPZYk",
  authDomain: "rahul-1bf0a.firebaseapp.com",
  projectId: "rahul-1bf0a",
  storageBucket: "rahul-1bf0a.appspot.com",
  messagingSenderId: "378058125890",
  appId: "1:378058125890:web:86df982f5a1ed7eeb0b3db",
  measurementId: "G-D8RPTQ58S0",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
