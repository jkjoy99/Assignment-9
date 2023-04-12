import React from 'react';
import { Link } from 'react-router-dom';
import FilterBy from './FilterBy/FilterBy';

const ApplyList = ({jobs}) => {
    const {id, image, jobTitle, companyName
        , jobType1, jobType2, location, salary} = jobs;
    console.log(jobs);
    return (
        
            <div className='py-7'>
                 <div className='p-4 bg-gray-200'>
            <img className='inline-block h-32' src={image} alt="" />
            <h5 className='text-black font-semibold'>{jobTitle}</h5>
            <p className='my-2'>{companyName}</p>
            <div className='flex justify-center gap-5'>
                <p className='border-solid border-2 border-indigo-400 px-2'>{jobType1}</p>
                <p className='border-solid border-2 border-indigo-400 px-2'>{jobType2}</p>
            </div>
            <div className='flex justify-center items-center my-3 gap-3'>
                <p><small>{location}</small></p>
                <p><small>Salary: {salary}</small></p>
            </div>
             <Link to={`/ShowDetails/${id}`}> <button className="btn btn-active rounded-md my-2 btn-color">View Details</button></Link>
        </div>
            </div>

           
           
        
    );
};

export default ApplyList;