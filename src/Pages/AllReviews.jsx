import React from 'react';
import { useLoaderData } from 'react-router';
import ReviewCard from '../Components/ReviewCard';

const AllReviews = () => {
    const reviews=useLoaderData();
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-3 m-3 gap-3'>
                {
                    reviews.map(reviews=><ReviewCard reviews={reviews}></ReviewCard>)
                }
            </div>
    );
};

export default AllReviews;