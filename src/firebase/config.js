import { initializeApp } from "firebase/app";
import {getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // valores que você pode encontrar ao criar um projeto no site do fire base
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const authentication = getAuth(app);

export {app, db, authentication}