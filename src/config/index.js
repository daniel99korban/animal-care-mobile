import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDM04r2EcUY4vMn9IWWsO_SCaZI7osu7hA",
  authDomain: "animal-care-42303.firebaseapp.com",
  projectId: "animal-care-42303",
  storageBucket: "animal-care-42303.appspot.com",
  messagingSenderId: "110870148100",
  appId: "1:110870148100:web:aaa27a996f82871f277151"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export default app;