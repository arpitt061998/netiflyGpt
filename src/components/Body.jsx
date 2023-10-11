import Login from './Login';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { lazy,Suspense } from 'react';
import Watch from './Watch';

const Browse = lazy(() => import("./Browse"));

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login/>
    },
    {
      path: "/browse",
      element: <Suspense
        fallback={
        <div className="container">
          <h1>Loading...</h1>
        </div>
        }
      >
        <Browse />
      </Suspense>
    },
    {
      path:"/watch/:id",
      element: <Watch/>
    }
  ]);

  return (
    <div className='w-full h-full'>
      <RouterProvider router={appRouter} />
    </div>
  )
};

export default Body;