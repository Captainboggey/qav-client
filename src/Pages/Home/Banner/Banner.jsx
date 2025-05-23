import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import b1 from "../../../assets/banner/banner1.png"
import b2 from "../../../assets/banner/banner2.svg"
import b3 from "../../../assets/banner/banner3.svg"

const Banner = () => {
    return (
        <Carousel className='banner-font' autoPlay infiniteLoop showArrows >
            <div>
                <div className="hero-content flex-col justify-between lg:flex-row-reverse min-h-[720px]">
                    <img
                        src={b1}
                        className="max-w-sm rounded-lg "
                    />
                    <div className='md:text-left'>
                        <h1 className="text-5xl  ">Home Internet</h1>

                        <button className="btn bg-blue-500 text-white mt-10 border-none rounded-3xl">Learn More</button>
                    </div>
                </div>
            </div>
            <div>
                <div className="hero-content flex-col justify-between lg:flex-row-reverse min-h-[720px]">
                    <img
                        src={b2}
                        className="max-w-sm rounded-lg "
                    />
                    <div className='md:text-left'>
                        <h1 className="text-5xl  ">Popular Package</h1>

                        <button className="btn bg-blue-500 text-white mt-10 border-none rounded-3xl">Learn More</button>
                    </div>
                </div>
            </div>
            <div>
               <div className="hero-content flex-col justify-between lg:flex-row-reverse min-h-[720px]">
                    <img
                        src={b3}
                        className="max-w-sm rounded-lg "
                    />
                    <div className='md:text-left'>
                        <h1 className="text-5xl  ">Corporate Internet</h1>

                        <button className="btn bg-blue-500 text-white mt-10 border-none rounded-3xl">Learn More</button>
                    </div>
                </div>
            </div>
        </Carousel>
    );
};

export default Banner;