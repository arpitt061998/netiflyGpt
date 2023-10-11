import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const {movieNames, movieResults} = useSelector(store => store.gpt);
  if(!movieNames) return null;
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-80">
      {movieNames.map((movieName, index) => <>
        <MovieList key={movieName+index} title={movieName} movies = {movieResults[index]} />
      </>) }
    </div>
  )
}

export default GptMovieSuggestion;