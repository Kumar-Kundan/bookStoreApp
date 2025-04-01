import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Courses from './courses/courses';
import HomePage from './home/HomePage';
import Signup from './components/Signup';

function App() {
  return (
    <>
    <div >
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/course' element={<Courses/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    </div>
    </>
  )
}

export default App