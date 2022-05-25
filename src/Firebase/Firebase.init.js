// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjrRd1BUPZaoUsSTRcniudv8QwAOaqvVo",
  authDomain: "parts-hub-6a16f.firebaseapp.com",
  projectId: "parts-hub-6a16f",
  storageBucket: "parts-hub-6a16f.appspot.com",
  messagingSenderId: "505846978017",
  appId: "1:505846978017:web:df180831fa165c6d6a2ea0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;