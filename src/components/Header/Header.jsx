import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
         <div className='md:flex justify-between md:sticky top-0 bg-slate-200 p-8'>
            <h2 className='mr-10 font-extrabold text-3xl'>JOB FINDER</h2>
            <nav>
                <Link className='mr-10 font-semibold text-2xl' to='/'>Home</Link>
                <Link className='mr-10 font-semibold text-2xl' to='/statistics'>Statistics</Link>
                <Link className='mr-10 font-semibold text-2xl' to='/appliedJob'>Applied Jobs</Link>
                <Link className='mr-10 font-semibold text-2xl' to='/blog'>Blog</Link>
            </nav>
            <button className="btn btn-active btn-color rounded-xl">Star Applying</button>
         </div>
    );
};

export default Header;