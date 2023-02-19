
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDyBaItlNHYRpqUH-mi64z-ak9eQzi1O1M",
  authDomain: "home-ed-tifaal.firebaseapp.com",
  projectId: "home-ed-tifaal",
  storageBucket: "home-ed-tifaal.appspot.com",
  messagingSenderId: "409141551639",
  appId: "1:409141551639:web:1b1262c51e546c77097252"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

