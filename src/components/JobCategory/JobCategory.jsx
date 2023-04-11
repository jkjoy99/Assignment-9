import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';


const JobCategory = () => {

    const [category, setCategory] = useState();

    useEffect(()=>{
        fetch('jobcategory.json')
        .then(res => res.json())
        .then(data => setCategory(data))
    },[])


    return (
        <div className='my-16'>
          <h2 className='text-3xl font-semibold my-4'>Job Category List</h2>
          <p className='text-xl mb-10'>Explore thousands of job opportunities with all the information you need. Its your future</p>
          {category && (
            <div className='md:flex justify-around'>
              {category.map(categoryData => (
                <Category key={categoryData.id} categoryData={categoryData} />
              ))}
            </div>
          )}
        </div>
      );
    }

export default JobCategory;