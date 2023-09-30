import GptSearchBar from "./GptSearchBar";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className ='absolute w-full h-full -z-10'>
        <img className = 'w-full h-full object-cover' src={BG_URL} alt='logo'></img>
      </div>
        <GptSearchBar/>
    </div>
  )
};

export default GptSearch;