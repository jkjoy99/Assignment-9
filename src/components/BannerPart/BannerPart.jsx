import React from 'react';
import './Banner.css'
const BannerPart = () => {
    return (
        <div className='col-12 md:flex mt-24 font-semibold'>
            <div className='col-6'>
                <h2 className='text-6xl my-4'>Find the Most <span className='text-color'>Exciting Startup</span> Jobs</h2>
                <p className='my-4'>Discover tens of thousands of employment options with the necessary knowledge. It is the future you. Locate it here. Manage every aspect of your job application process.</p>
                <button className="btn btn-active btn-color rounded-xl">Lets Started</button>
            </div>
            <div className='col-6 w-4/5 h-4/5'>
                <img src='../../assets/banner.png' alt="" />
            </div>
        </div>
    );
};

export default BannerPart;