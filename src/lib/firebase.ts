// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
import dotenv from "dotenv";

dotenv.config();

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_LINGO_BUDDY_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_LINGO_BUDDY_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_LINGO_BUDDY_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_LINGO_BUDDY_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_LINGO_BUDDY_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_LINGO_BUDDY_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_LINGO_BUDDY_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
// export const analytics = getAnalytics(app);
