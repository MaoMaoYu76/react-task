import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWCWoHellq7xHFlfc5YiziHIBOjok9PP4",
  authDomain: "react-project-26a32.firebaseapp.com",
  projectId: "react-project-26a32",
  storageBucket: "react-project-26a32.appspot.com",
  messagingSenderId: "852581931654",
  appId: "1:852581931654:web:4643067ec369185d9ccf07",
  measurementId: "G-F8PY23GHNL"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };