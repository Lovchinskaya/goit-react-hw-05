import { useState } from 'react'
import AppHeader from '../Navigation/Navigation'
import { Routes, Route } from 'react-router';
// import './App.css'
import Homepage from '../../pages/HomePage/HomePage';
import MoviesPage from '../../pages/MoviesPage/MoviesPage';

export default function App (){
  return (
    <div>
      <AppHeader />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/movies" element={<MoviesPage />}></Route>

      </Routes>
    </div>
  )
}