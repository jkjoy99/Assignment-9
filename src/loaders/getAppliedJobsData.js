import { getStoredCart } from "../utils/fakeDb"

 export const appliedJobsData = async()=>{
    const jobData = await fetch ('/jobListings.json')
    const data = await jobData.json()
    const savedApplied = getStoredCart()
    let newArr =[]
    for (const id in savedApplied){
        const jobApplied = data.find(job => job.id === id)
        
        if(jobApplied){
            jobApplied.quantity = savedApplied[id]
            // appliedD.push(jobApplied)
            newArr.push(jobApplied)
        }
        }
        return {newArr, data}
}


