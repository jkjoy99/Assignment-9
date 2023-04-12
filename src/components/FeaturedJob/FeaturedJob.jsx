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
         <div className='md:grid md:grid-cols-2 gap-5 md:justify-center md:items-center'>
            {/* {
                featuredJobs.slice(0,4).map(job => <SingleJob job={job} key={job.id}></SingleJob>)
            } */}

       {featuredJobs.slice(0, showAll ? 6 : 4).map((job) => (
          <SingleJob key={job.id} job={job}></SingleJob>
        ))}
        </div>

        {!showAll && 
        <div onClick={handleShowAll}>
          <Button>See All Jobs</Button>
        </div>
      }  
       </section>
    );
};

export default FeaturedJob;