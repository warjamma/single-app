import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getMessaging } from "firebase/messaging";
import firebase from "@constants/firebase";

// config firebase
const firebaseConfig = {
  apiKey: firebase.apiKey,
  authDomain: firebase.authDomain,
  projectId: firebase.projectId,
  storageBucket: firebase.storageBucket,
  messagingSenderId: firebase.messagingSenderId,
  appId: firebase.appId,
  measurementId: firebase.measurementId,
};

const firebaseApp = initializeApp(firebaseConfig);
const databaseFirebase = getFirestore(firebaseApp);
const messagingFirebase = getMessaging(firebaseApp);
export { databaseFirebase, messagingFirebase };
