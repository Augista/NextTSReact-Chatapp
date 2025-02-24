import { initializeApp, FirebaseOptions } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";
import { getAnalytics, Analytics } from "firebase/analytics";

const firebaseConfig: FirebaseOptions = {
  apiKey: "APIKEY",
  authDomain: "....firebaseapp.com",
  projectId: "PROJECT-ID",
  storageBucket: "PROJECTID.firebasestorage.app",
  messagingSenderId: "SENDERID",
  appid",
  measurementId: "MeasureID"
};

const app = initializeApp(firebaseConfig);

export const auth: Auth = getAuth(app);
export const db: Firestore = getFirestore(app);
export const analytics: Analytics | null = typeof window !== "undefined" ? getAnalytics(app) : null;
