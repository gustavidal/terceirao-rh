import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyAd2rzZ3GDbN148EfkAhNngANzHmGNjzEo",
  authDomain: "terceirao-rh.firebaseapp.com",
  projectId: "terceirao-rh",
  storageBucket: "terceirao-rh.firebasestorage.app",
  messagingSenderId: "70556753778",
  appId: "1:70556753778:web:477b350b379c35dee587eb"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)