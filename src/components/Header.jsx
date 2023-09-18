import React, {useState, useEffect, useRef} from 'react';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO_URL } from '../utils/constants';


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector( store => store.user)

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user){
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({
          uid:uid,
          email:email,
          displayName: displayName,
          photoURL: photoURL
        }));
        navigate("/browse")
      } else {
        // user is signed out
        dispatch(removeUser());
        navigate("/");
      }
    })

    // unsubscribe when component unmounts
    return () => {
      unsubscribe();
    };
  },[]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch(() => {
        navigate("/error");
      })
  }
  
  return (
    <div className='absolute w-full md:px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img  className='w-44 sm:max-sm:w-20' src = {LOGO_URL} alt='netflixlogo'></img>
      {user && (
            <div className="relative" ref={dropdownRef}>
            <button
              aria-expanded={isDropdownOpen}
              type="button"
              className="flex px-6 py-3 mr-3 font-bold text-center text-white items-center transition-all rounded-lg cursor-pointer  text-sm ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs"
              onClick={toggleDropdown}
            >

              <img alt='usericon'
                className='w-12 h-12 rounded-full'
                src= {user.photoURL}
              />
              <div className='text-white ml-1'>Hi {user.displayName}</div>
            </button>

            <p className={`transform-dropdown-show ${isDropdownOpen ? 'block' : 'hidden'}`}></p>
            <ul className={`z-10 text-sm lg:shadow-soft-3xl duration-250 before:duration-350 before:font-awesome before:ease-soft min-w-44 before:text-5.5 transform-dropdown  absolute left-auto top-1/2 m-0 -mr-4 mt-4 list-none rounded-lg border-0 border-solid border-transparent bg-black bg-opacity-80 bg-clip-padding px-0 py-2 text-left text-slate-500 opacity-0 transition-all before:absolute before:right-7 before:left-auto before:top-0 before:z-40 before:text-white before:transition-all before:content-['\f0d8'] ${isDropdownOpen ? 'opacity-100' : 'opacity-0'}`}>
              <li>
                <a
                  className="py-2 lg:ease-soft clear-both block w-full whitespace-nowrap border-0 bg-transparent px-4 text-left font-normal text-white hover:bg-gray-200 lg:transition-colors lg:duration-300"
                >
                  Action
                </a>
              </li>
              <li>
                <a
                  className="py-2 lg:ease-soft clear-both block w-full whitespace-nowrap border-0 bg-transparent px-4 text-left font-normal text-white lg:transition-colors lg:duration-300"
                >
                  Another action
                </a>
              </li>
              <li>
                <button
                  className="py-2 lg:ease-soft clear-both block w-full whitespace-nowrap border-0 bg-transparent px-4 text-left font-normal text-white lg:transition-colors lg:duration-300"
                  onClick={handleSignOut}
                >
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
      )}
    </div>
  )
}

export default Header;