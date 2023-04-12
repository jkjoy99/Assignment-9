import { useState } from 'react';
import SingleJob from '../SingleJob/SingleJob';


const FeaturedJob = ({featuredJobs}) => {

//   const jobListings = useLoaderData();
//   console.log(jobListings);
const [showAll, setShoAll] = useState(false);

const handleShowAll = () => {
    setShoAll(true);
  };

    return (
       <section>
       <div className='mb-7'>
       <h2 className='mr-10 font-extrabold text-3xl'>Featured Jobs</h2>
        <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
       </div>
         <div className='md:grid md:grid-cols-2 gap-5 md:justify-center md:items-center'>
       {featuredJobs.slice(0, showAll ? 6 : 4).map((job) => (
          <SingleJob key={job.id} job={job}></SingleJob>
        ))}
        </div>

        {!showAll && 
        <div onClick={handleShowAll}>
          <button className='bg-blue-700 py-2 px-2 rounded text-white hover:bg-blue-900 text-center mt-5 w-full block '>See All Jobs</button>
        </div>
      }  
       </section>
    );
};

export default FeaturedJob;