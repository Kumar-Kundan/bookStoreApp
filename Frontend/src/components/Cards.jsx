import React from 'react'

function Cards({item}) {
  return (
    <>
    <div className='my-3 p-3 mt-4 flex justify-center '>
        <div className="card bg-base-100 w-full md:w-90 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
            <figure>
                <img
                src={item.image}
                alt="Books" 
                className='w-full  object-cover'/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                {item.name}
                <div className="badge badge-secondary">{item.category}</div>
                </h2>
                <p>{item.title}</p>
                <div className="card-actions justify-between">
                  <div className="cursor-pointer border border-gray-600 rounded-md hover:bg-pink-600 px-2 py-1 hover:text-white duration-200">{item.price}</div>
                  <div className="cursor-pointer border border-gray-600 rounded-md hover:bg-pink-600 px-2 py-1 hover:text-white duration-200">Buy Now</div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Cards