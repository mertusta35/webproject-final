
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
} from "firebase/auth";

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from "firebase/firestore";

// Firebase Setup
const firebaseConfig = {
    apiKey: "AIzaSyCjwEmjH4xbPA25-u1QN0yClGIP7i7Q8kY",
    authDomain: "web-final-65363.firebaseapp.com",
    projectId: "web-final-65363",
    storageBucket: "web-final-65363.appspot.com",
    messagingSenderId: "359713282982",
    appId: "1:359713282982:web:590ed3323c2beec48e8d67",
    measurementId: "G-FV6LTMSYJY"
  };


const firebaseApp = initializeApp(firebaseConfig);

// Authentication Setup
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

// Firestore Setup
export const db = getFirestore();
export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
    ) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid); //benzersiz bir bağlantı noktası
    const userSnapShot = await getDoc(userDocRef); // veri setine erişim

    // Users veritabanı yok ise
    if (!userSnapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        } catch (error) {
            console.log("kullancıyı kaydetmede hata:", error.message);
        }
    }

    //Benzersiz bağlantıyı döndürme
    return userDocRef;
}

// Email/Password Sign Up
export const createAuthUserWithEmailAndPassword = async (email,password) =>{
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth,email,password);
}





