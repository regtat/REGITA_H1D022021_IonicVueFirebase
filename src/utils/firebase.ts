import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyCRtkwRi4VsySGg4T6sXlMdFX4QX1WRdIk",
  authDomain: "vue-firebase-prak-pemob.firebaseapp.com",
  projectId: "vue-firebase-prak-pemob",
  storageBucket: "vue-firebase-prak-pemob.firebasestorage.app",
  messagingSenderId: "485852364477",
  appId: "1:485852364477:web:0388e35c01a61ec68ac1d4"
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();

const db = getFirestore(firebase);
export { auth, googleProvider, db };