import React from 'react';
import { BiSolidRightArrow } from 'react-icons/bi';
import { FaAcquisitionsIncorporated, FaGlobeAmericas } from 'react-icons/fa';

const DoSection = () => {
    return (
        <div className="hero bg-blue-500  mt-10 py-20">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex flex-col gap-2 md:flex-row'>
                    <div className="card bg-base-100 w-52 shadow-xl">
                        <figure className='px-10 pt-10'>
                            <FaAcquisitionsIncorporated className='text-8xl' />
                        </figure>

                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Corporate Internet</h2>
                            <p>We offer safe internet access services with various service level descriptions for corporate businesses and SMEs.</p>
                            <div className="card-actions">
                                <p className='items-center text-sm text-blue-500 flex gap-2'>Learn More <BiSolidRightArrow /> </p>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-52 shadow-xl">
                        <figure className="px-10 pt-10">
                            <FaGlobeAmericas className='text-8xl' />

                        </figure>
                        <div className="card-body items-center text-center">

                            <h2 className="card-title">Home Internet</h2>
                            <p>provides an extensive range of high quality data & internet connectivity services throughout the country.</p>
                            <div className="card-actions">
                                <p className='items-center text-sm text-blue-500 flex gap-2'>Learn More <BiSolidRightArrow /> </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='text-white space-y-5'>
                    <p>Powering Your Digital World!</p>
                    <h1 className="text-4xl font-bold">What We Do?</h1>
                    <h1 className="text-3xl font-bold">Built for Speed. Backed by Trust.</h1>
                    <p className="py-6 ">
                        At QAV IT Solutions, we specialize in providing fast, stable, and secure internet services tailored to meet the needs of both residential and commercial users. Our goal is to make connectivity simple, seamless, and accessible to everyone.

                    </p>
                    <div>
                        <p className='flex items-center gap-2'><BiSolidRightArrow /> High-Speed Broadband</p>
                        <p className='flex items-center gap-2'><BiSolidRightArrow /> Custom Internet Packages</p>
                        <p className='flex items-center gap-2'><BiSolidRightArrow /> Reliable Network Infrastructure</p>
                        <p className='flex items-center gap-2'><BiSolidRightArrow /> 24/7 Customer Support</p>
                        <p className='flex items-center gap-2'><BiSolidRightArrow /> Business Connectivity Solutions</p>
                    </div>
                    <button className="btn btn-ghost bg-black text-white border-none rounded-3xl">Become a Client</button>
                </div>
            </div>
        </div>
    );
};

export default DoSection;