import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import './ShowDetails.css'
import { addToDb } from '../../utils/fakeDb';

const ShowDetails = () => {

    const handleAddToCart = id => {
        console.log(id)
        addToDb(id)
    }

    const jobData = useLoaderData();
    const {id} = useParams();
    
    // console.log();

    const jobDetailsData = jobData.find(item => item.id === id);
    // console.log(jobDetailsData);
    const { jobDescription, jobResponsibilities, educationRequirements, experience, salary, jobTitle, phoneNumber, email, location, } = jobDetailsData;

   

    return (               
        <div>
            <h2 className=' text-black font-semibold text-2xl'>Job Details</h2>
        <div className='lg:flex md:flex mt-14 w-full '>
            <div className='w-2/4 mx-20 tracking-wide'>
            <p> <span className='font-semibold text-2xl'>Job Description:</span>  {jobDescription}</p>
            <p> <span className='font-semibold text-2xl'> Job Responsibility:</span>{jobResponsibilities}</p>
            <p> <span className='font-semibold text-2xl'> Educational Requirements:</span>{educationRequirements}</p>
            <p> <span className='font-semibold text-2xl'> Experiences:</span>{experience}</p>
            <p>2-3 Years in this field.</p>
            </div>
            <div className='bg-sky-100 p-10 text-center job-detail'>
               <p className='mr-10 font-semibold text-2xl'>Job Details</p>
               <p> <span className='font-semibold text-2xl'>Salary :</span> {salary}</p>
               <p> <span className='font-semibold text-2xl'>Job Title :</span> {jobTitle}</p>
               <p>Contact Information</p>
               <p> <hr /> </p>
               <p> <span className='font-semibold text-2xl'>Phone :</span>{phoneNumber}</p>
               <p> <span className='font-semibold text-2xl'>Email: </span>{email}</p>
               <p> <span className='font-semibold text-2xl'>Address :</span>{location}</p>
               <button className='bg-blue-700 py-2 px-2 rounded text-white hover:bg-blue-900 text-center mt-5 w-full block 
               ' onClick={() => handleAddToCart(id)}>Apply Now</button>
            </div>
        </div>
        </div>
    );
};

export default ShowDetails;