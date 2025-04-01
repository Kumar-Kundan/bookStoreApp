import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"

function Signup() {
   const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data);

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-[500px] border border-gray-400 py-3 px-5 rounded-md shadow-md" >
        <form onSubmit={handleSubmit(onSubmit)} >
          <div className='flex justify-end'>
            <Link to='/' className="btn btn-sm btn-circle btn-ghost ">✕</Link>
          </div>

          <h3 className="font-bold text-lg">Signup</h3>
          <div className='flex flex-col mt-4 space-y-2'>
            <span>Name</span>
            <input type='text' className='border border-gray-400 rounded-md px-2 py-1 outline-none' placeholder='Enter your fullname'
              {...register("name", { required: true })} />
              {errors.name && <span className='text-red-500 text-sm'>This field is required</span>}
          </div>
          <div className='flex flex-col mt-4 space-y-2'>
            <span>Email</span>
            <input type='email' className='border border-gray-400 rounded-md px-2 py-1 outline-none' placeholder='Enter your email'
              {...register("email", { required: true })} />
              {errors.email && <span className='text-red-500 text-sm'>This field is required</span>}
          </div>
          <div className='flex flex-col mt-4 space-y-2'>
            <span>Password</span>
            <input type='password' className='border border-gray-400 rounded-md px-2 py-1 outline-none' placeholder='Enter your password' 
              {...register("password", { required: true })}/>
              {errors.password && <span className='text-red-500 text-sm'>This field is required</span>}
          </div>
          <div className='mt-4 flex justify-around'>
            <button className='bg-pink-600 text-white hover:bg-pink-700 rounded-md px-2 py-1'>Signup</button>
            <p>
              Have account?
              <button className='text-blue-500 underline cursor-pointer' onClick={() => document.getElementById("my_modal_3").showModal()} >
                Login
              </button>
              <Login />
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup