// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBB4MEqXCs4IXsKs0nXIkJ2GZVPdpouHS0",
  authDomain: "yt-demo-332da.firebaseapp.com",
  projectId: "yt-demo-332da",
  storageBucket: "yt-demo-332da.appspot.com",
  messagingSenderId: "612950089893",
  appId: "1:612950089893:web:a4729845d0c17d9de26d4c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default auth = firebase.auth();

 