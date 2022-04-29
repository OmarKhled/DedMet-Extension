import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  where,
  query,
  getDocs,
  DocumentData,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCarRqgo2HNHPWHza6Vp33-OeyLH9G4vQ",
  authDomain: "dedmet-26c91.firebaseapp.com",
  projectId: "dedmet-26c91",
  storageBucket: "dedmet-26c91.appspot.com",
  messagingSenderId: "1000978163574",
  appId: "1:1000978163574:web:2dc943f96690368160fc57",
  measurementId: "G-ET1J7B1BS5",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const validateKey: (key: string) => DocumentData = async (key) => {
  const date = new Date();
  const usersRef = collection(db, "users");
  const q = query(usersRef, where("licenseKey", "==", key));
  const res = await getDocs(q);
  if (res.size > 0) {
    const user = res.docs[0].data();
    console.log(user);
    if (user.expiresAt > date.getTime()) {
      return user;
    }
  }
  return null;
};

export default validateKey;
