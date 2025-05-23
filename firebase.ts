// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIq59lVsUxrNj9vsHTETnuw8I7Jl_IG8o",
  authDomain: "final-project-476a9.firebaseapp.com",
  projectId: "final-project-476a9",
  storageBucket: "final-project-476a9.firebasestorage.app",
  messagingSenderId: "221023117787",
  appId: "1:221023117787:web:020bf23dee5a46708bc7fe",
  measurementId: "G-GT9H7SETFW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const google = new GoogleAuthProvider();