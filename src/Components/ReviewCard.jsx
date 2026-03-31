import React from 'react';
import { Link } from 'react-router';

const ReviewCard = ({reviews}) => {

      const {
    _id,
    foodName,
    foodImage,
    restaurantName,
    location,
    starRating,
    reviewerName,
    
  } = reviews;
  return (
    <div className="card bg-white shadow-md hover:shadow-xl transition duration-300 rounded-xl">

      {/* Image */}
      <figure>
        <img
          src={foodImage}
          alt={foodName}
          className="h-52 w-full object-cover"
        />
      </figure>

      <div className="card-body">

        {/* Food Name */}
        <h2 className="card-title text-black">
          {foodName}
        </h2>

        {/* Restaurant */}
        <p className="text-sm text-gray-600">
          🍽 {restaurantName}
        </p>

        {/* Location */}
        <p className="text-sm text-gray-500">
          📍 {location}
        </p>

        {/* Reviewer */}
        <p className="text-sm">
          👤 {reviewerName}
        </p>

        {/* Rating */}
        <p className="font-semibold">
          ⭐ {starRating} / 5
        </p>

        {/* Button */}
          <Link
            to={`/reviews/${_id}`}
            className="btn w-full text-white rounded-full bg-linear-to-r from-pink-500 to-red-600" >
            View Details
          </Link>
        <button className='btn w-full text-white rounded-full bg-linear-to-r from-pink-500 to-red-600'>Show All</button>

      </div>
    </div>
  );
};


export default ReviewCard;