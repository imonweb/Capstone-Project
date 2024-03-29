import { useState } from "react";
import FormInput from "../form-input/form-input.component";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const defaultformFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {

  const [formFields, setFormFields] = useState(defaultformFields);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields)

  const resetFormFields = () => {
    setFormFields(defaultformFields)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(password != confirmPassword){
      alert("password do not match");
      return;
    }

    try {
      const {user} = await createAuthUserWithEmailAndPassword(
        email, 
        password
      );

      await createUserDocumentFromAuth(user, { displayName});
      resetFormFields();
 
    } catch(error) {
      if(error.code === 'auth/email-already-in-use'){
        alert('Cannot create user, email already in use');
      } else {
        console.error('user creation encountered an error', error)
      }
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value })
  };

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      
      <form onSubmit={handleSubmit}>

        <label htmlFor="">Display Name</label>
        <FormInput 
          label="Display Name"
          type="text" 
          required 
          onChange={handleChange} 
          name="displayName" 
          value={displayName}
        />

        <label htmlFor="">Email</label>
        <FormInput 
          label="Email"
          type="email" 
          required 
          onChange={handleChange} 
          name="email" 
          value={email}
        />

        <label htmlFor="">Password</label>
        <FormInput 
          label="Password"
          type="password" 
          required 
          onChange={handleChange} 
          name="password" 
          value={password}
        />

        <label htmlFor="">Confirm Password</label>
        <FormInput 
          label="Confirm Password"
          type="password" 
          required 
          onChange={handleChange} 
          name="confirmPassword"
          value={confirmPassword}
        />

        <button type="submit">Sign Up</button>

      </form>
    </div>
  )
}

export default SignUpForm;