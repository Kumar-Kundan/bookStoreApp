import React from 'react';
import { useAuth } from './context/AuthProvider';
import toast from 'react-hot-toast';

function Logout() {
    const [authUser,setAuthUser] = useAuth();
    const handleLogout = ()=> {
        try {
            setAuthUser({...authUser,user:null});
            localStorage.removeItem("User");
            toast.success("Logout successfully!!");

            setTimeout(() => {
                window.location.reload();
            }, 500);
        } catch (error) {
            toast.error("Error: "+error);
        }

    }
  return (
    <div>
        <button className='bg-red-500 text-white px-3 py-2 rounded-md cursor-pointer'
        onClick={handleLogout}
        >Logout</button>
    </div>
  )
}

export default Logout;