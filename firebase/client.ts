import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCpoHyf-UwQ0lted-uCzd-KN-8I259HeAs",
    authDomain: "intelliview-a4571.firebaseapp.com",
    projectId: "intelliview-a4571",
    storageBucket: "intelliview-a4571.firebasestorage.app",
    messagingSenderId: "639720036683",
    appId: "1:639720036683:web:d19012d5e4033a00ccf0ce",
    measurementId: "G-KF00H0XZQH"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) :getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);