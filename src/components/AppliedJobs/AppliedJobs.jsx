import React, { useEffect, useState } from 'react';
import { getStoredCart } from '../../utils/fakeDb';
import { useLoaderData, useParams } from 'react-router-dom';
import ApplyList from '../ApplyList';
import FilterBy from '../FilterBy/FilterBy';

const AppliedJobs = () => {
    const {newArr} = useLoaderData();

    const [job, setJob] = useState(newArr);

    const handelJob = (jobType) =>{
        const newJobData = newArr.filter(job => job.jobType1 === jobType);
        setJob(newJobData);
    }
 
 console.log(newArr);
    return (
        <div className='flex min-h-screen items-start justify-center bg-gray-100 text-gray-900 '>
            
            
            <div className='flex flex-col max-w-3xl p-6 space-y-4 sm:p-10
            '>
               <div> <FilterBy></FilterBy> </div>
                <h2 className='text-xl font-semibold'>{newArr.length?'Review jobs apply':'No Apply'}</h2>

                <div className='text-end space-x-2'>
                <button onClick={()=>handelJob('Onside')} className='btn btn-active rounded-md my-2 p-2 btn-color mr-5'>OnSide</button>
                <button onClick={() => handelJob('Remote')} className='btn btn-active rounded-md my-2 p-2 btn-color'>Remote</button>
            </div>

                <ul className='flex flex-col max-w-full'>
                    {
                        job.map(jobs=> <ApplyList
                    key={jobs.id} jobs={jobs}></ApplyList>)
                    }
                    
                </ul>

            </div>

        </div>
    );
};

export default AppliedJobs;