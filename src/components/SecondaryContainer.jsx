import { useSelector } from "react-redux"
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies)
  return (
    <div className="bg-black">
      <div className="lg:-mt-48 md:pl-12 pl-4 z-20 relative pb-4">
        <MovieList title = {"Now playing"} movies = {movies.nowPlayingMovies}/>
        <MovieList title = {"Trending"} movies = {movies.popularMovies}/>
        <MovieList title = {"Top Rated Movies"} movies = {movies.topRatedMovies}/>
      </div>
    </div>
  )
};

export default SecondaryContainer;