import { initializeApp } from 'firebase/app'
// import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword
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
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (
  userAuth, 
  additionalInformation = {}
  ) => {
  if ( !userAuth ) return;

  const userDocRef = doc(db, 'users', userAuth.uid)

  console.log(userDocRef)

  const userSnapshot = await getDoc(userDocRef)
  console.log(userSnapshot)
  console.log(userSnapshot.exists())

  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      })
    } catch (error){
      console.log('error creating the user', error.message);
    }
  }

  // if user data exists

  // if users data does not exist

  return userDocRef


}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return 

  return await createUserWithEmailAndPassword(auth, email, password)
}