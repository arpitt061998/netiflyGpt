import Header from './Header';
import { useState,useRef } from 'react';
import { checkValidata } from '../utils/validate';
import { auth } from '../utils/firebase';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleBtnClick = () => {
    // console.log({email,password})
    const message = checkValidata(email.current.value, password.current.value, name?.current?.value);
    setErrorMessage(message);
    if(message) return;
    //Sign in Sign up logic
    if(!isSignInForm){
      //Sign up logic
      createUserWithEmailAndPassword(
        auth, email?.current?.value, password?.current?.value
      )
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://media.licdn.com/dms/image/C4D03AQGod45ATWcztQ/profile-displayphoto-shrink_400_400/0/1659365951587?e=1700092800&v=beta&t=uRCMGC4LG4_JGCshsTJTi0RWfvr1xiPkrBLhL2dVwuw"
          }).then(() => {
            const {uid, email, displayName, photoURL} = auth.currentUser;
            dispatch(addUser({
              uid:uid,
              email:email,
              displayName: displayName,
              photoURL: photoURL
            }));       
            navigate("/browse");          
          }).catch((error) => {
            console.error("error 0")
            setErrorMessage(error.message)
          })
        })
        .catch((error) => {
          console.error("error 1")
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" +errorMessage);
        });
    } else{
      signInWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user)
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" +errorMessage);
        })
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }

  return (
    <>
      <Header/>
      <div className ='absolute w-full h-full'>
      <img className = 'w-full h-full object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='logo'></img>
      </div>
      <div className='form-wrapper absolute w-full h-full flex justify-center items-center'>
        <form onSubmit = {(e)=> e.preventDefault()} className='bg-black w-10/12 md:w-4/12 p-12 text-white rounded-lg bg-opacity-80'>
          <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In": "Sign Up"}</h1>
          {!isSignInForm && 
            <input 
              ref={name}
              type='text'
              placeholder='Full name'
              className='p-2 my-2 w-full bg-gray-700 rounded-sm'
            />
          }
          <input 
            ref={email}
            type='text' 
            placeholder='Email Address' 
            className='p-2 my-2 w-full bg-gray-700 rounded-sm'
          />
          <input 
            ref={password}
            type='password' 
            placeholder='Password' 
            className='p-2 my-2 w-full bg-gray-700 rounded-sm'
          />
          <p className='text-red-500 font-valid text-lg py-2'> {errorMessage} </p>
          <button 
            className='p-4 my-2 bg-red-700 w-full rounded-lg'
            onClick={handleBtnClick}
          >
            {isSignInForm ? "Sign In": "Sign Up"}
          </button>

          <p className='py-2 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign up now" : "Already Registered Sign In Now"}</p>
        </form>
      </div>
    </>
  )
}

export default Login;
