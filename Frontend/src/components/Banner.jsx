import React from 'react'
import book from '../../public/Book.jpg'

function Banner() {
    return (
        <>
            <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
                <div className='order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-25'>
                    <div className='space-y-12'>
                        <h1 className='text-4xl font-bold'>
                            Hello, welcome here to learn something{" "}
                            <span className='text-pink-600'>new everyday!!!</span>
                        </h1>
                        <p className='text-xl'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                            et totam. Tempora amet atque expedita, quae corrupti totam sed
                            pariatur corporis at veniam est voluptas animi!
                        </p>
                        <label className="input flex w-full items-center  gap-2 dark:bg-slate-900 dark:border-gray-600 ">
                            <svg className="h-[1em] opacity-50 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                </g></svg>
                            <input type="text" className='grow dark:text-white dark:placeholder-gray-500 ' placeholder="Enter email to login" />
                        </label>
                    </div>
                    <button className="btn mt-6 btn-secondary">Get Started</button>
                </div>
                <div className='w-full order-1 md:w-1/2'>
                    <img src={book} className="w-3xl" alt='' />
                </div>
            </div>
        </>
    )

}

export default Banner;