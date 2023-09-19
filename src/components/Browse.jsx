import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import Header from './Header';
// import MainContainer from './MainContainer';
// import SecondaryContainer from './SecondaryContainer';
import { lazy, Suspense } from 'react';
const MainContainer = lazy(() => import('./MainContainer')); 
const SecondaryContainer = lazy(() => import('./SecondaryContainer')); 

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header/>
      <Suspense fallback={<div>Loading...</div>}>
        <MainContainer/>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <SecondaryContainer/>
      </Suspense>
      
    </div>
  )
}

export default Browse;