import React, { useState } from 'react';
import logo from "../../../src/assets/logo.png"
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import useAuth from '../../Hooks/useAuth';
import toast, { Toaster } from 'react-hot-toast';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

const Register = () => {
    const {signUpUser}=useAuth()
    const notify = () => toast.success('Successfully Registered!');
    const navigate = useNavigate();
    const axiosPublic =useAxiosPublic()
    // const notifyFalse = () => toast.success('Error!');
    const [useNotify,setNotify]=useState(()=>null);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
       
          signUpUser(data.email,data.password)
          .then(res=>{
            if(res.user){
                const userInfo={
                    firstName: data.first,
                    lastName: data.last,
                    email: data.email
                }
                axiosPublic.post('/users',userInfo)
                .then(res=>{
                    if(res.data.insertedId){
                        setNotify(notify);
                        navigate('/')
                    }
                })
            }
          })
       

    }
    return (
        <div className='flex justify-center items-center min-h-screen'>

            <div>
                <img src={logo} className='w-44 mx-auto' alt="" />
                <div className="card bg-base-100 w-[400px] p-5 max-w-2xl border-2 border-blue-400 shrink-0 ">

                    <form onSubmit={handleSubmit(onSubmit)} className="card-body w-full">
                        <p className='text-2xl text-left my-5 font-bold'>Register </p>
                        <div className="form-control">

                            <input {...register("first")} type="text" placeholder="First Name" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control">

                            <input {...register("last")} type="text" placeholder="Last Name" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control">

                            <input {...register("email")} type="email" placeholder="email" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control">

                            <input {...register("password")} type="password" placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button onClick={()=>useNotify}  className="btn bg-blue-500 text-white w-full">Register</button>
                              <Toaster />
                        </div>
                    </form>

                </div>
                <p className='mt-5 text-center'>Already Have An Account? <Link to={'/login'} className='text-red-600'>Login</Link> First</p>
            </div>

        </div>
    );
};

export default Register;