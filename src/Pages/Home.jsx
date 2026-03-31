import React from 'react';
import Hero from '../Components/Hero';
import { useLoaderData } from 'react-router';
import ReviewCard from '../Components/ReviewCard';
import FoodCategories from '../Components/FoodCategories ';
import WhyChooseUs from '../Components/WhyChooseUs';

const Home = () => {
    const data=useLoaderData();
    const  reviews =data.slice(0,6);
    return (
        <div className='my-3'>
            <Hero></Hero>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-3 m-3 gap-3'>
                {
                    reviews.map(reviews=><ReviewCard reviews={reviews}></ReviewCard>)
                }
            </div>
            <div>
                <FoodCategories></FoodCategories>
            </div>
            <div>
                <WhyChooseUs></WhyChooseUs>
            </div>
        </div>
    );
};

export default Home;