import React from 'react'
import Navbar from '../components/Navbar'
import Course from '../components/Course'
import Footer from '../components/Footer'

function Courses() {
  return (
    <>
        <div className='flex flex-col min-h-screen dark:bg-slate-900 '>
        < Navbar />
        < Course />
        < Footer />
        </div>
    </>
  )
}

export default Courses;