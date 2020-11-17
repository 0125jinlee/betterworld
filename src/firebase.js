import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "betterworld-aac7e.firebaseapp.com",
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: "betterworld-aac7e",
  storageBucket: "betterworld-aac7e.appspot.com",
  messagingSenderId: "60751268485",
  appId: "1:60751268485:web:6588111865a3f6e21b77ec",
  measurementId: "G-ZLCGCXNM1B"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
