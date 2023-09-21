import { useEffect } from "react";
import { useDispatch } from "react-redux"; 
import { TMDB_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();  
  const getMovieVideo = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, TMDB_OPTIONS);
    const json = await data.json();

    const filterVideo = json.results.filter(video => video.type === "Trailer");
    
    const trailer = filterVideo.length ? filterVideo[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideo();
  },[])
};
export default useMovieTrailer;