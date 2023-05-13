import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDc-yqYGc6bz_sas7T9SYiNk2qJP0P7GIw",
  authDomain: "dashboard-c883f.firebaseapp.com",
  projectId: "dashboard-c883f",
  storageBucket: "dashboard-c883f.appspot.com",
  messagingSenderId: "1009343885719",
  appId: "1:1009343885719:web:89d6fabf0d33cbe243d4d2",
};

//init firebase
initializeApp(firebaseConfig);

//init services
const db = getFirestore();

const auth = getAuth();
const timestamp = serverTimestamp();

export { db, timestamp, auth };
