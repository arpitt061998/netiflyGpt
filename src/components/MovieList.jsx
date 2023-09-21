import MovieCard from "./MovieCard";

const MovieList = ({title, movies}) => {

  return (
      movies && (
      <div className="md:px-6">
        <h1 className="md:text-3xl text-2xl py-4 text-white md:pl-4">{title}</h1>
        <div className="flex overflow-x-scroll no-scrollbar">
          <div className="flex">
            {movies.map(movie => <MovieCard key={movie.id} posterpath={movie.poster_path}/>)}
          </div>
        </div>
    </div>
    )
  )
};

export default MovieList;