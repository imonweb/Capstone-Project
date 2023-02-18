import { initializeApp } from 'firebase/app'
// import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAFxgUweDoYbG9GE2wh5NTefHlvrztl2s4",
  authDomain: "crwn-clothing-db-60c8f.firebaseapp.com",
  projectId: "crwn-clothing-db-60c8f",
  storageBucket: "crwn-clothing-db-60c8f.appspot.com",
  messagingSenderId: "279391310733",
  appId: "1:279391310733:web:ac94c5065f1b44f89963c4"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)

  console.log(userDocRef)
}