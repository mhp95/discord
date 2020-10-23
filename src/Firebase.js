// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyA2G5dFiuk5b7WY2nhgaixpqRrjZ7HMmS8",
  authDomain: "discord-7f1c5.firebaseapp.com",
  databaseURL: "https://discord-7f1c5.firebaseio.com",
  projectId: "discord-7f1c5",
  storageBucket: "discord-7f1c5.appspot.com",
  messagingSenderId: "1015904094031",
  appId: "1:1015904094031:web:be0ecc1225d33f3f51673a",
  measurementId: "G-LHT9T62L72",
};

const firebaseApp = firebase.initialzeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
