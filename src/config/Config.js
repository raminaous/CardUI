// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQw6u8zrBUniG3BcVR6s14O_LSNdtWUMg",
  authDomain: "flash-chat-ios-13-5ca74.firebaseapp.com",
  databaseURL: "https://flash-chat-ios-13-5ca74.firebaseio.com",
  projectId: "flash-chat-ios-13-5ca74",
  storageBucket: "flash-chat-ios-13-5ca74.appspot.com",
  messagingSenderId: "714020748781",
  appId: "1:714020748781:web:bb1535add0d1c6feb0bbe4",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
