import React, { useEffect, useState } from 'react'
import Cards from './Cards';
import { Link } from 'react-router-dom';
import axios from "axios";

function Course() {
  const [book,setBook]=useState([]);

  useEffect(()=>{
    const getBook = async()=>{
      try {
        const res = await axios.get("http://localhost:4001/book");
        
        setBook(res.data);
      } catch (error) {
        console.log("Error!!",error);
      }
    };
    getBook();
  },[]);
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4  '>
      <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl md:text-4xl'>We're delighted to have you {" "}
          <span className='text-pink-600'>Here! :)</span>
        </h1>
        <p className='mt-12'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
           et totam. Tempora amet atque expedita, quae corrupti totam sed pariatur corporis at veniam est voluptas animi!. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,et totam. Tempora amet atque expedita  quae corrupti totam sed pariatur corporis at veniam est voluptas animi!.
        </p>
        <Link to='/' >
        <button className='mt-4 text-white bg-pink-600 px-4 py-2 rounded-xl hover:bg-pink-700'>
          Back
        </button>
        </Link>
      </div>
      <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3'>
        {book.map((item)=>(
          <Cards key={item.id} item={item} />
        ))}
      </div>
    </div>
    </>
    
  )
}

export default Course;