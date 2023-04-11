import React from 'react';
import { getStoredCart } from '../../utils/fakeDb';
import { useLoaderData, useParams } from 'react-router-dom';

const AppliedJobs = () => {
    const aJobData = useLoaderData();
    const {id} = useParams();
    console.log(aJobData);
 const applied = getStoredCart()
//  console.log(applied);
    return (
        <div>
            <h2>Applied Jobs Page</h2>
        </div>
    );
};

export default AppliedJobs;