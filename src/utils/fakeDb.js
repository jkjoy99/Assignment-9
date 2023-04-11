// add data to local storage

const addToDb = id=> {
let FeatureJobs = {}
const storedJobs = localStorage.getItem('FeatureJobs')
if(storedJobs){
    FeatureJobs = JSON.parse(storedJobs)
}

const quantity = FeatureJobs[id]
if(quantity){
const newQuantity = quantity + 1
FeatureJobs[id] = newQuantity
}
else{
    FeatureJobs[id] = 1
}
localStorage.setItem('FeatureJobs', JSON.stringify(FeatureJobs))
}

// get stored data
const getStoredCart = ()=>{
    let FeatureJobs = {}

    const storedJobs = localStorage.getItem('FeatureJobs')
if(storedJobs){
    FeatureJobs = JSON.parse(storedJobs)
}

return FeatureJobs
}


export {addToDb, getStoredCart}