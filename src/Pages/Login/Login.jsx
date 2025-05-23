import React, { useState } from 'react';
import logo from "../../../src/assets/logo.png"
import { Link,useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import useAuth from '../../Hooks/useAuth';
import toast, { Toaster } from 'react-hot-toast';


const Login = () => {
    const {signInUser}=useAuth()
    const navigate = useNavigate();
     const notify = () => toast.success('Successfully Registered!');
    const [useNotify,setNotify]=useState(()=>null);
    const {
            register,
            handleSubmit,
            watch,
            formState: { errors },
        } = useForm()
        const onSubmit = (data) =>{
            signInUser(data.email,data.password)
            .then(res=>{
                if(res.user){
                    setNotify(notify)
                    navigate('/')
                }
            })
        }
    
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div>
                <img src={logo} className='w-44 mx-auto' alt="" />
                <div className="card bg-base-100 w-[400px] p-5 max-w-2xl border-2 border-blue-400 shrink-0 ">
                    
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body w-full">
                        <p className='text-2xl text-left my-5 font-bold'>Login With</p>
                        <div className="form-control">
                            
                            <input {...register("email")} type="email" placeholder="email" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control">
                            
                            <input {...register("password")} type="password" placeholder="password" className="input input-bordered" required />
                    
                        </div>
                        <div className="form-control mt-6">
                            <button onClick={()=>useNotify} className="btn bg-blue-500 text-white w-full">Login</button>
                             <Toaster />
                        </div>
                    </form>
                    
                </div>
                <p className='mt-5 text-center'>Don't Have An Account? <Link to={'/register'} className='text-red-600'>Register</Link> First</p>
            </div>

        </div>
    );
};

export default Login;