import React from 'react';
import mainLogo from "../../assets/logo.png"
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Navbar = () => {
    const {user,signOutUser}=useAuth();
    const navOptions = <>
    <Link to={'/'}><li><h1>Home</h1></li></Link>
    {
        user?<li><h1 onClick={()=>signOutUser()}>Logout</h1></li>:<Link to={'/login'}><li><h1>Login</h1></li></Link>
    }
  
    </>
    return (
        <div className="navbar  max-w-7xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navOptions}
                       
                    </ul>
                </div>
               <Link to={'/'}> <img className=" w-16 text-2xl" src={mainLogo} alt="" /></Link>
              
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                    
                </ul>
            </div>
           
        </div>
    );
};

export default Navbar;