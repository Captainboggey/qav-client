import React from 'react';
import CommonBanner from '../../Components/CommonBanner';
import PageHeader from '../../Components/PageHeader';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { FaCloudArrowDown } from 'react-icons/fa6';
import { FaWifi } from 'react-icons/fa';

const Package = () => {
    const axiosPublic=useAxiosPublic()
    const {data: packages=[]}=useQuery({
        queryKey:['packages'],
        queryFn:async()=>{
            const result =await  axiosPublic.get('/packages')
            return result.data
        }
    })
    return (
        <div>
            <CommonBanner header={'Packages'}></CommonBanner>
            <PageHeader subHeading={'Our Packages'} heading={'Pick The Best Plan For You'} description={'Super Speed Optical Fiber Internet Connectivity with Real IP Right to Your Door Steps'}></PageHeader>
           <div className='mt-10 grid md:grid-cols-3 gap-2 '>
            {
                packages.map(AllPackage=><div key={AllPackage._id} className="card mx-auto  w-64 bg-blue-500 text-white">
                                <figure className="px-10 pt-10 text-center text-4xl">
                                   <FaWifi />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title uppercase">{AllPackage.category}</h2>
                                    <p className='flex gap-1'>
                                     <p className='text-xl'>BDT </p><span className='text-5xl'>{AllPackage.price}</span>
                                    </p>
                                    <p className='mt-5 border-b-2 w-1/2'>{AllPackage.speed_mbps} Mbps Unlimited</p>
                                    
                                    <p className='uppercase border-b-2 w-1/2'>{AllPackage.connection_type} </p>
                                    <p className=' border-b-2 w-1/2'>OTC Fee {AllPackage.otc} Taka </p>
                                    <p className=' border-b-2 w-1/2'> {AllPackage.service} Customer Support </p>
                                    
                                
                                    <div className="card-actions mt-5">
                                       <button className='btn btn-primary rounded-3xl bg-black border-none border-b-0 text-white'>Get Online Register</button>
                                    </div>
                                </div>
                            </div>)
            }

           </div>
            
        </div>
    );
};

export default Package;