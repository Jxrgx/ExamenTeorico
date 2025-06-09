import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAcDfsGVl9AY_d1ytfhe5tFf8ziUKMdskU",
  authDomain: "examenpractico-4e7be.firebaseapp.com",
  projectId: "examenpractico-4e7be",
  storageBucket: "examenpractico-4e7be.firebasestorage.app",
  messagingSenderId: "515335948725",
  appId: "1:515335948725:web:01d188fd6376e096c0f1fc"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
