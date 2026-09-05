import { initializeApp, getApps, getApp } from 'firebase/app';
import { 
  getFirestore, 
  collection, 
  doc, 
  getDoc, 
  getDocs, 
  setDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy, 
  limit, 
  onSnapshot 
} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyAtyWN_UDd6Ld4O16cnc8lwmRJ4Gj_Tnbs",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "crispy-chick-kgf.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "crispy-chick-kgf",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "crispy-chick-kgf.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "814260005387",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:814260005387:web:178c90ae92714ac955750e"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);
export const auth = getAuth(app);

export {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  onSnapshot
};
export default app;
