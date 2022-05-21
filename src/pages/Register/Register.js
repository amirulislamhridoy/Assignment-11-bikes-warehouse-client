import React, { useState } from "react";
import auth from "../../firebase_init";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link } from "react-router-dom";
import './Register.css'

const Register = () => {
    const [check, setCheck] = useState(false)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile, updating, updateError] = useUpdateProfile(auth, {sendEmailVerification: true});

    const handleFormSubmit = async e => {
        e.preventDefault();
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
    }
    
  return (
    <div
      className="w-50 mx-auto"
      style={{ marginTop: "100px", marginBottom: "50px" }}
    >
      <h2>Sign Up</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name='email'
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name='password'
          />
        </div>
        <div className="mb-3 form-check">
          <input onChange={() => setCheck(!check)} type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Are you register an account?
          </label>
        </div>
        <div>
            <Link className='register-login-link' to="/login">Already you have an account</Link>
        </div>
        <button disabled={!check} type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;