import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyAtyWN_UDd6Ld4O16cnc8lwmRJ4Gj_Tnbs",
  authDomain: "crispy-chick-kgf.firebaseapp.com",
  projectId: "crispy-chick-kgf",
  storageBucket: "crispy-chick-kgf.firebasestorage.app",
  messagingSenderId: "814260005387",
  appId: "1:814260005387:web:178c90ae92714ac955750e"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();
export const auth = firebase.auth();
export default firebase;
