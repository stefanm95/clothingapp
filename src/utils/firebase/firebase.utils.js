import { initializeApp } from 'firebase/app';
import {  
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
  } from 'firebase/auth';

import { getFirestore,
         doc,
         getDoc,
         setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBVy_E0bBrn5_SpwlHpvYUHS2pexxG19t0",
    authDomain: "clothing-app-db-4797c.firebaseapp.com",
    projectId: "clothing-app-db-4797c",
    storageBucket: "clothing-app-db-4797c.appspot.com",
    messagingSenderId: "595558970472",
    appId: "1:595558970472:web:1370245cbd8decdce237dd"
  };
  
  // Initialize Firebase
 initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if(!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());
    
    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            })
        } catch (error){
            console.log('error creating the user', error.message);
        }
    return userDocRef;
    }

};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
};
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);