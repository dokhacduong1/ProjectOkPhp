import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getStorage} from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyAWnMumcc8i3dBInfahDolyIwxG95lRLjw",
  authDomain: "project-thongkebanhang.firebaseapp.com",
  projectId: "project-thongkebanhang",
  storageBucket: "project-thongkebanhang.appspot.com",
  messagingSenderId: "30414995273",
  appId: "1:30414995273:web:80f73a4b3420e1bf87e498",
  measurementId: "G-Z9C0VCY0Q4"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app)