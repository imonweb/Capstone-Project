import React from 'react'
import { useEffect } from 'react'
import { getRedirectResult } from 'firebase/auth'

import { 
  auth,
  signInWithGooglePopup, 
  createUserDocumentFromAuth, 
  signInWithGoogleRedirect 
} from '../../utils/firebase/firebase.utils'

const SignIn = () => {

  useEffect( async () => {
    const response = await getRedirectResult(auth)
    if(response){
      const userDocRef = await createUserDocumentFromAuth(response.user)
    }
    console.log(response)
  }, [])

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
   
    console.log(user) 
  }

  // const logGoogleRedirectUser = async () => {
  //   const { user } = await signInWithGoogleRedirect()
  //   const userDocRef = await createUserDocumentFromAuth(user)
  // }


  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      {/* <button onClick={logGoogleRedirectUser}>Sign in with Google Redirect</button> */}
      <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button>
    </div>
  )
}

export default SignIn