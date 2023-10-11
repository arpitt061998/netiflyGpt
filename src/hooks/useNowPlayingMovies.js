
import { TMDB_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addNowPlayingMovies } from '../utils/moviesSlice';

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector(store => store.nowPlayingMovies)
    const getNowPlayingMovies = async () => {
      const data = await fetch(
        'https://api.themoviedb.org/3/movie/now_playing?page=1',
        TMDB_OPTIONS
      );
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results));
    };
    
    useEffect(() => {
      !nowPlayingMovies && getNowPlayingMovies();
    },[]);
};

export default useNowPlayingMovies;
