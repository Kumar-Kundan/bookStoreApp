import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Courses from './courses/courses';
import HomePage from './home/HomePage';
import Signup from './components/Signup';
import {Toaster} from "react-hot-toast";
import { useAuth } from './components/context/AuthProvider';

function App() {
  const [authUser,setAuthUser]= useAuth();
    console.log(authUser);
    
  return (
    <>
    <div >
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/course' 
        element={authUser? <Courses/> : <Navigate to="/signup"/>}
      />
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    <Toaster/>
    </div>
    </>
  )
}

export default App