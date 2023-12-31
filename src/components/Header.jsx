import React, {useState, useEffect, useRef} from 'react';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO_URL, SUPPORTED_LANGUAGE } from '../utils/constants';
import { addGptMovieResult, toggleGptSearchView } from '../utils/gptSlice';
import lang from '../utils/languageConstants';
import { changeLanguage } from '../utils/configSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faHouse } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedLang = useRef(null);
  const user = useSelector( store => store.user)
  const showGptSearch = useSelector( store => store.gpt.showGptSearch)
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user){
        const {uid, email, displayName, photoURL} = user;
        const url = location.pathname;
        dispatch(addUser({
          uid:uid,
          email:email,
          displayName: displayName,
          photoURL: photoURL
        }));
        if(!url.includes("watch"))
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

  const handleLanguageChange = () => {
    dispatch(changeLanguage(selectedLang.current.value))
  }

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
    dispatch(addGptMovieResult({movieNames: null, movieResults: null}))
  };

  const handleHomeClick = () => {
    dispatch(toggleGptSearchView(false));
    navigate("/browse");
  }
  
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("SIGNED OUT");
      })
      .catch(() => {
        navigate("/error");
      })
  }
  
  return (
    <div className='absolute w-full md:px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img  className='md:w-44 w-28 object-contain cursor-pointer' onClick={handleHomeClick} src = {LOGO_URL} alt='netflixlogo'></img>
      {user && (
          <div className='flex'>
            { showGptSearch &&
              ( 
                <select ref= {selectedLang} 
                  className='px-2 hidden landscape:block md:block rounded-lg py-1 m-auto h-[3rem] bg-gray-900 text-white' onChange={handleLanguageChange}>
                  {SUPPORTED_LANGUAGE.map(lang => 
                    <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)
                  }
                </select>
              )
          }
            <div className='m-auto'>
              <button 
                className="py-2 px-4 md:mx-4 hidden landscape:block md:block mx-1 bg-purple-800 text-white rounded-lg"
                onClick={handleGptSearchClick}
              >
                {showGptSearch ? (
                  <>
                    Home <FontAwesomeIcon className="px-1" icon={faHouse} />
                  </>
                ) : (
                  <>
                    Gpt Search <FontAwesomeIcon className="px-1" icon={faMagnifyingGlass} />
                  </>
                )}
              </button>
            </div>
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
            <ul className={`z-10 text-sm lg:shadow-soft-3xl duration-250 before:duration-350 before:font-awesome before:ease-soft min-w-44 before:text-5.5 transform-dropdown  absolute left-auto top-1/2 m-0 -mr-4 mt-6 list-none rounded-lg border-0 border-solid border-transparent bg-black bg-opacity-80 bg-clip-padding px-0 py-2 text-left text-slate-500 opacity-0 transition-all before:absolute before:right-7 before:left-auto before:top-0 before:z-40 before:text-white before:transition-all before:content-['\f0d8'] ${isDropdownOpen ? 'block opacity-100' : 'hidden opacity-0'}`}>
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
          </div>
      )}
    </div>
  )
}

export default Header;