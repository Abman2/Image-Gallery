// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBk6ODffCLG1o_zV6nmmjqg3W2NldTbFwU" ,
  authDomain: "image-gallery-700be.firebaseapp.com",
  projectId: "image-gallery-700be",
  storageBucket: "image-gallery-700be.appspot.com",
  messagingSenderId: "289587683632",
  appId: "1:289587683632:web:e5aaf357bc98a58c9ae8f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
