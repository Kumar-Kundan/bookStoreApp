import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast from 'react-hot-toast';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit =async (data) =>{
    const userInfo = {
      email:data.email,
      password:data.password
    };
    await axios.post("http://localhost:4001/user/login",userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        toast.success('Loggedin successfully!!');
        localStorage.setItem("User",JSON.stringify(res.data.user));

        //closing the login page
        document.getElementById("my_modal_3").close()
        setTimeout(() => {
          window.location.reload();
        }, 500);
      }
    }).catch((err)=>{
      if(err.response){
        toast.error("Error : " + err.response.data.message);
      }
    });
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal ">
        <div className="modal-box dark:bg-slate-900 dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button onClick={() => document.getElementById("my_modal_3").close()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          
          <h3 className="font-bold text-lg">Login</h3>
          <div className='flex flex-col mt-4 space-y-2'>
            <span>Email</span>
            <input type='email'  className='border border-gray-400 rounded-md px-2 py-1 outline-none' placeholder='Enter your email'
            {...register("email", { required: true })}/>
            {errors.email && <span className='text-red-500 text-sm'>This field is required</span>}
          </div>
          <div className='flex flex-col mt-4 space-y-2'>
            <span>Password</span>
            <input type='password' className='border border-gray-400 rounded-md px-2 py-1 outline-none' placeholder='Enter your password'
            {...register("password", { required: true })}/>
             {errors.email && <span className='text-red-500 text-sm'>This field is required</span>}
          </div>
          <div className='mt-4 flex justify-around'>
            <button className='bg-pink-600 text-white hover:bg-pink-700 rounded-md px-2 py-1'>Login</button>
            <p>
              Not registered?
              <Link to='/signup' className='text-blue-500 underline'>Signup</Link>
            </p>
          </div>
          </form>
        </div>
      </dialog>
    </div>
  )
}

export default Login