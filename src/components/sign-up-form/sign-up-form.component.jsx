import { useState } from "react";

const defaultformFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {

  const [formFields, setFormFields] = useState(defaultformFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name } = event;
  };

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      
      <form onSubmit={() => {}}>

        <label htmlFor="">Display Name</label>
        <input 
          type="text" 
          required 
          onChange={handleChange} 
          name="displayName" 
          value={'abc'}
        />

        <label htmlFor="">Email</label>
        <input type="email" required onChange={handleChange} name="email" />

        <label htmlFor="">Password</label>
        <input type="password" required onChange={handleChange} name="password" />

        <label htmlFor="">Confirm Password</label>
        <input type="password" required onChange={handleChange} name="confirmPassword"/>

        <button type="submit">Sign Up</button>

      </form>
    </div>
  )
}

export default SignUpForm;