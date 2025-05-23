import React from 'react';
import w1 from "../../../assets/welcome/w1.svg"

const Welcome = () => {
    return (
        <div className="hero mt-10 h-[800px]">
            <div className="hero-content flex-col justify-between lg:flex-row-reverse">
                <img
                    src={w1}
                    className="max-w-sm rounded-lg " />
                <div>
                    <p className='text-blue-600 mb-5'>Welcome To QAV It Solutions</p>
                    <h1 className="text-4xl font-bold">#1 Broadband Internet <br /> Provider In Mirpur</h1>
                    <p className="py-6">
                        <span className='font-bold'>QAV IT Solutions</span> is a forward-thinking broadband service provider dedicated to delivering fast,<br /> reliable, and affordable internet to homes and businesses across the region. Founded with a mission <br /> to bridge the digital divide, we combine cutting-edge technology with exceptional customer service <br />
                         to keep you connected—always.

                        At QAV IT Solutions, we understand that in today's world, seamless <br /> internet access isn’t a luxury—it’s a necessity. Whether you're working from home, streaming your <br /> favorite shows, or running a business, our high-speed broadband ensures you stay online without <br /> interruptions.

                        What sets us apart is our commitment to quality, transparency, and local support. <br /> We offer flexible packages to fit every need and budget, backed by a passionate team of professionals <br /> who are just a call away.

                        Join the QAV family and experience the internet the way it should be—fast, simple, <br /> and stress-free.
                    </p>
                    <button className="btn bg-blue-500 text-white rounded-3xl">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Welcome;