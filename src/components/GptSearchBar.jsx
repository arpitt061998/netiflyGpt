import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openai";
import { TMDB_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const currLang = useSelector(store => store.config.lang);
  const searchMovieTMDB = async(movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      TMDB_OPTIONS
    );
    const json = await data.json();
    return json.results;
  }
  const  handleGptSearch = async() => {
    var searchValue = searchText.current.value;
    //Make an api call to gpt api and get movies result
    const gptQuery = "Act like a movie recommendation system and suggest some movies for the query" + searchValue + ". only give me names of 5 movies, comma separated like the example result given ahead. Example result: Bhagam bhag, Koi Mil gaya, Sholay, Don, Golmaal";
    var data = [];
    try {
      const gptResult = await openai.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery }],
        model: 'gpt-3.5-turbo',
      });
      const gptMovies = gptResult.choices?.[0]?.message?.content.split(",");
      const promiseArray =  gptMovies.map((movie) => searchMovieTMDB(movie));
      const tmdbResult = await Promise.all(promiseArray);
      dispatch(addGptMovieResult({movieNames:gptMovies, movieResults: tmdbResult}))
    }
    catch(error){
      if(error.status === 429){
        data = ["Bhagam Bhag", "Hera Pheri", "Welcome", "Phir Hera Pheri", "Dhamaal"];
      }
    }
  }
  return (
    <div className="pt-[10%] block landscape:flex md:flex justify-center">
        <form className="w-full m-4 mt-16 md:mt-4 lg:m-0 lg:w-1/2 bg-black flex  rounded-lg" onSubmit={(e) => e.preventDefault()}>
            <input ref= {searchText} type="text" className="p-4 m-4 w-full rounded-md" placeholder={lang[currLang].gptSearchPlaceholder}/>
            <button 
              className="py-2 px-4 m-4 bg-red-700 text-white rounded-md"
              onClick={handleGptSearch}  
            >
              {lang[currLang].search}</button>
        </form>
    </div>
  )
};

export default GptSearchBar;