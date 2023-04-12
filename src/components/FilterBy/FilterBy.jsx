import React, { useEffect, useState } from 'react';

const FilterBy = () => {
//     const [appliedJobs, setAppliedJob] = useState([]);
//     const [appliedJobsCheck, setAppliedJobCheck] = useState([]);

//     useEffect(() => {
//         const storedJobs = getShoppingCart();
//        // local storage code
//         setAppliedJob(newJob);
//         setAppliedJobCheck(newJob);
//     }, []);

//     // pick Remote Job
//     const pickRemoteJob = () => {
//         const remoteJob = appliedJobsCheck.filter(job => job.remoteOrOnsite === "Remote");
//         setAppliedJob(remoteJob);
//     };

//     // pick Onsite Job
//     const pickOnsiteJob = () => {
//         const onsiteJob = appliedJobsCheck.filter(job => job.remoteOrOnsite === "Onsite");
//         setAppliedJob(onsiteJob);
//     };
    return (
        <div className='container mx-auto flex justify-end mb-8'>
            <div className='w-36 bg-gray-200 p-5 flex-col justify-end rounded-lg'>
            <p onClick={()=> pickRemoteJob }>
                <span>Filter By</span>
            </p>
            </div>
        </div>
    );
};

export default FilterBy;