import React, { useEffect, useState } from 'react';
import BannerPart from '../BannerPart/BannerPart';
import JobCategory from '../JobCategory/JobCategory';
import FeaturedJob from '../FeaturedJob/FeaturedJob';

const Home = () => {

    const [featuredJobs, setFeaturedJobs] = useState([]);
    useEffect(() => {
  const featuredJobsData = async () => {
    try {
      const res = await fetch("/jobListings.json");
      const data = await res.json();
      setFeaturedJobs(data);
    } catch (error) {
      console.error("Error fetching:", error);
    }
  };
  featuredJobsData();
}, []);


    return (
        <div>
            <BannerPart></BannerPart>
            <JobCategory></JobCategory>
            <FeaturedJob featuredJobs={featuredJobs}></FeaturedJob>
        </div>
    );
};

export default Home;