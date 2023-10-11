import GptSearchBar from "./GptSearchBar";
import { BG_URL } from "../utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestion";

const GptSearch = () => {
  return (
    <div>
      <div className ='fixed w-full h-full -z-10'>
        <img className = 'w-full h-full object-cover' src={BG_URL} alt='logo'></img>
      </div>
        <GptSearchBar/>
        <GptMovieSuggestion/>
    </div>
  )
};

export default GptSearch;