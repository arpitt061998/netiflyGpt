import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { TMDB_OPTIONS } from "../utils/constants";
import { addTrailerVideo,addCurrentVideo} from "../utils/moviesSlice";

const useMovieTrailer = (movieId, watch = false) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector(store => store.trailerVideo);
  const getMovieVideo = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, TMDB_OPTIONS);
    const json = await data.json();
    const filterVideo = json.results.filter(video => video.type === "Trailer");
    const trailer = filterVideo.length ? filterVideo[0] : json.results[0];
    console.log(trailer);
    if(watch) dispatch(addCurrentVideo(trailer));
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    (!trailerVideo || watch) && getMovieVideo() ;
  },[])
};

export default useMovieTrailer;