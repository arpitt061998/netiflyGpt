
import { TMDB_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addTopRatedMovies } from '../utils/moviesSlice';

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const topRatedMovies = useSelector(store => store.topRatedMovies)
    const getTopRatedMovies = async () => {
      const data = await fetch(
        'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
        TMDB_OPTIONS
      );
      const json = await data.json();
      dispatch(addTopRatedMovies(json.results));
    };
    
    useEffect(() => {
      !topRatedMovies && getTopRatedMovies();
    },[]);
};

export default useTopRatedMovies;
