import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router';

const UpDateReviews = () => {

     const { id } = useParams();
  const navigate = useNavigate();
  const [review, setReview] = useState(null);
  const [loading, setLoading] = useState(true);

   useEffect(() => {
    fetch(`http://localhost:3000/reviews/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setReview(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

   const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedReview = {
      foodName: form.foodName.value,
      foodImage: form.foodImage.value,
      restaurantName: form.restaurantName.value,
      location: form.location.value,
      starRating: parseFloat(form.rating.value),
      reviewText: form.reviewText.value,
    };

    fetch(`http://localhost:3000/reviews/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedReview),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        toast.success("Review Updated!");
        navigate("/myReviews"); 
      });
  };
    return (
               <div className="card bg-base-100 mt-5 w-full mx-auto max-w-sm shrink-0 shadow-2xl border border-gray-200">
      <div className="card-body text-center">
          <h1 className="text-2xl font-bold">Add now!</h1>
       <form onSubmit={handleUpdate}>
         <fieldset className="fieldset">
        {/* Food Name */}
        <input
          type="text"
          name="foodName"
           defaultValue={review.foodName}
          placeholder="Food Name"
          className="input input-bordered w-full"
          required
        />

        {/* Food Image */}
        <input
          type="text"
          name="foodImage"
        defaultValue={review.foodImage}
          placeholder="Food Image URL"
          className="input input-bordered w-full"
          required
        />

        {/* Restaurant Name */}
        <input
          type="text"
          name="restaurantName"
          defaultValue={review.restaurantName}
          placeholder="Restaurant Name"
          className="input input-bordered w-full"
          required
        />

        {/* Location */}
        <input
          type="text"
          name="location"
           defaultValue={review.location}
          placeholder="Location"
          className="input input-bordered w-full"
          required
        />

        {/* Star Rating */}
        <input
          type="number"
          name="rating"
            defaultValue={review.starRating}
          placeholder="Star Rating (1-5)"
          min="1"
          max="5"
          className="input input-bordered w-full"
          required
        />

        {/* Review Text */}
        <textarea
          name="reviewText"
          defaultValue={review.reviewText}
          placeholder="Write your review..."
          className="textarea textarea-bordered w-full"
          required
        ></textarea>

        <button className='btn text-white rounded-full bg-linear-to-r from-pink-500 to-red-600'>
          Update Review
        </button>
        </fieldset> 
       </form>
      </div>
    </div>
    );
};

export default UpDateReviews;