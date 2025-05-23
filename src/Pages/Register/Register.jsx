import React from 'react';
import logo from "../../../src/assets/logo.png"
import { Link } from 'react-router-dom';

const Register = () => {
   
    return (
        <div className='flex justify-center items-center min-h-screen'>
            
            <div>
                <img src={logo} className='w-44 mx-auto' alt="" />
                <div className="card bg-base-100 w-[400px] p-5 max-w-2xl border-2 border-blue-400 shrink-0 ">

                    <form className="card-body w-full">
                        <p className='text-2xl text-left my-5 font-bold'>Register </p>
                        <div className="form-control">

                            <input type="text" placeholder="First Name" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control">

                            <input type="text" placeholder="Last Name" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control">

                            <input type="email" placeholder="email" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control">

                            <input type="password" placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-blue-500 text-white w-full">Register</button>
                        </div>
                    </form>

                </div>
                <p className='mt-5 text-center'>Already Have An Account? <Link to={'/login'} className='text-red-600'>Login</Link> First</p>
            </div>

        </div>
    );
};

export default Register;