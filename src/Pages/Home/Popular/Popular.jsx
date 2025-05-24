import React from 'react';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import p1 from "../../../assets/home/popular.svg"
import { FaLongArrowAltRight, FaWifi } from 'react-icons/fa';
import { FaCloudArrowDown } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Popular = () => {
    const axiosPublic = useAxiosPublic();
    const { data: packages = [] } = useQuery({
        queryKey: ['packages'],
        queryFn: async () => {
            const result = await axiosPublic.get('/packages')
            return result.data;
        }
    })
    const popularPackage = packages.slice(0, 1);
    return (
        <div>
            <p className='text-center text-4xl font-bold my-10'>Most Popular Package</p>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content justify-evenly gap-10 flex-col lg:flex-row-reverse">
                    <img
                        src={p1}
                        className="max-w-sm rounded-lg " />
                    <div>
                        {
                            popularPackage.map(popular => <div key={popular._id} className="card  w-96 ">
                                <figure className="px-10 pt-10 text-center text-4xl">
                                   <FaCloudArrowDown />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title uppercase">{popular.category}</h2>
                                    <p className='flex gap-1'>
                                     <p className='text-xl'>BDT </p><span className='text-5xl'>{popular.price}</span>
                                    </p>
                                    <p className='mt-5 border-b-2 w-1/2'>{popular.speed_mbps} Mbps Unlimited</p>
                                    
                                    <p className='uppercase border-b-2 w-1/2'>{popular.connection_type} </p>
                                    <p className=' border-b-2 w-1/2'>OTC Fee {popular.otc} Taka </p>
                                    <p className=' border-b-2 w-1/2'> {popular.service} Customer Support </p>
                                    
                                
                                    <div className="card-actions mt-5">
                                       <Link to={'/packages'}> <button className=" flex items-center text-xl text-blue-600">View All Packages <FaLongArrowAltRight  className='text-2xl'/></button></Link>
                                    </div>
                                </div>
                            </div>)
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popular;