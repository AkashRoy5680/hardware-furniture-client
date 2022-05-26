import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const[reviews,setReview]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/review")
        .then(res=>res.json())
        .then(data=>setReview(data))
    },[])
    return (
        <div className='my-20'>
        <div>
        <div class="text-center">
        <h3 class="text-primary text-xl font-bold uppercase mb-3">Reviews</h3>
        </div>
        </div>
            <div  className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
           {
               reviews.map(review=><Review
               key={review._id}
               review={review}
               ></Review>)
           }
        </div>
    </div>
    );
};

export default Reviews;