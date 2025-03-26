import { lazy, Suspense } from 'react';
import AppHeader from '../Navigations/Navigations'
import { Routes, Route } from 'react-router';
// import './App.css'
// import Homepage from '../../pages/HomePage/HomePage';
// import MoviesPage from '../../pages/MoviesPage/MoviesPage';
// import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
// import MovieDetailPage from '../../pages/MovieDetailsPage/MovieDetailsPage';
// import MovieCast from '../MovieCast/MovieCast';
// import MovieReview from '../MovieReviews/MovieReviews';

const Homepage = lazy(() => import ('../../pages/HomePage/HomePage')) ;
const MoviesPage = lazy(() => import ('../../pages/MoviesPage/MoviesPage')) ;
const NotFoundPage = lazy(() => import ('../../pages/NotFoundPage/NotFoundPage')) ;
const MovieDetailPage = lazy(() => import ('../../pages/MovieDetailsPage/MovieDetailsPage')) ;
const MovieCast = lazy(() => import ('../MovieCast/MovieCast')) ;
const MovieReview = lazy(() => import ('../MovieReviews/MovieReviews')) ;

export default function App (){
  return (
    <div>
      <AppHeader />
      <Suspense
        fallback={
          <p>
            <b>Loading page...</b>
          </p>
        }
      >
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailPage />}>
             <Route path="cast" element={<MovieCast/>}/>
             <Route path="reviews" element={<MovieReview/>}/>
        
        </Route>
        <Route path="*" element={<NotFoundPage />} />

      </Routes>
      </Suspense>
    </div>
  )
}