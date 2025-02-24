import { initializeApp, FirebaseOptions } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";
import { getAnalytics, Analytics } from "firebase/analytics";

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyA2QOWhEneTK7WScDz4kQjFZlmoYWA3cuk",
  authDomain: "react-chat-4c0a6.firebaseapp.com",
  projectId: "react-chat-4c0a6",
  storageBucket: "react-chat-4c0a6.firebasestorage.app",
  messagingSenderId: "428624840296",
  appId: "1:428624840296:web:9952c1950745758609dddd",
  measurementId: "G-ECGGY3Y4NQ"
};

const app = initializeApp(firebaseConfig);

export const auth: Auth = getAuth(app);
export const db: Firestore = getFirestore(app);
export const analytics: Analytics | null = typeof window !== "undefined" ? getAnalytics(app) : null;
