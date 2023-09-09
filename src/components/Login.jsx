import React from 'react';
import Header from './Header';
import { useState } from 'react';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }

  return (
    <div>
      <Header/>
      <div className='absolute'>
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='logo'></img>
      </div>
      <form className='absolute bg-black w-4/12 p-12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In": "Sign Up"}</h1>
        {!isSignInForm && 
          <input 
            type='text'
            placeholder='Full name'
            className='p-2 my-2 w-full bg-gray-700 rounded-sm'
          />
        }
        <input 
          type='text' 
          placeholder='Email Address' 
          className='p-2 my-2 w-full bg-gray-700 rounded-sm'
        />
        <input 
          type='password' 
          placeholder='Password' 
          className='p-2 my-2 w-full bg-gray-700 rounded-sm'
        />
        <button 
          className='p-4 my-2 bg-red-700 w-full rounded-lg'
        >
          {isSignInForm ? "Sign In": "Sign Up"}
        </button>

        <p className='py-2 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign up now" : "Already Registered Sign In Now"}</p>
      </form>
    </div>
  )
}

export default Login;
