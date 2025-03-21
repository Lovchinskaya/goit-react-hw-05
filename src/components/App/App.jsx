import { useState } from 'react'
import AppHeader from '../Navigation/Navigation'
import { Routes, Route } from 'react-router';
// import './App.css'
import Homepage from '../../pages/HomePage/HomePage';
import MoviesPage from '../../pages/MoviesPage/MoviesPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import MovieDetailPage from '../../pages/MovieDetailsPage/MovieDetailsPage';
import MovieCast from '../MovieCast/MovieCast';
import MovieReview from '../MovieReviews/MovieReviews';

export default function App (){
  return (
    <div>
      <AppHeader />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailPage />}>
             <Route path="cast" element={<MovieCast/>}/>
             <Route path="reviews" element={<MovieReview/>}/>
        
        </Route>
        <Route path="*" element={<NotFoundPage />} />

      </Routes>
    </div>
  )
}