import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

 // Your Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyBB1wry9JSG3CzjsXZnqEf17huMoCXg8xE",
   authDomain: "sufism-website.firebaseapp.com",
   projectId: "sufism-website",
   storageBucket: "sufism-website.firebasestorage.app",
   messagingSenderId: "336805816827",
   appId: "1:336805816827:web:2d6213fab91767eca2c35e"
 };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);

// Initialize Google Auth Provider
export const googleProvider = new GoogleAuthProvider();

// Add scopes for Google provider (optional)
googleProvider.addScope('profile');
googleProvider.addScope('email');

export default app;
