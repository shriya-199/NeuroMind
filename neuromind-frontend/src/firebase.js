// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmNv41sORXis1jyaxxypZbavx-Nvx8VmY",
  authDomain: "neuromind-d5509.firebaseapp.com",
  projectId: "neuromind-d5509",
  storageBucket: "neuromind-d5509.appspot.com",
  messagingSenderId: "409108462240",
  appId: "1:409108462240:web:5e9ac218d12e1ddf0667c5",
  measurementId: "G-5058S7X3NM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ✅ Add auth and Google provider
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
