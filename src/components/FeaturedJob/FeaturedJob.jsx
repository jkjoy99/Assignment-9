import SingleJob from '../SingleJob/SingleJob';


const FeaturedJob = ({featuredJobs}) => {

//   const jobListings = useLoaderData();
//   console.log(jobListings);



    return (
        <div className='md:grid md:grid-cols-2 gap-5 md:justify-center md:items-center'>
            {
                featuredJobs.slice(0,4).map(job => <SingleJob job={job} key={job.id}></SingleJob>)
            }
        </div>
    );
};

export default FeaturedJob;