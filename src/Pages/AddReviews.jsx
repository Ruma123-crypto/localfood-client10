import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const AddReviews = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddReview = (e) => {
    e.preventDefault();

    const form = e.target;

    const reviewData = {
      foodName: form.foodName.value,
      foodImage: form.foodImage.value,
      restaurantName: form.restaurantName.value,
      location: form.location.value,
      starRating: parseFloat(form.rating.value),
      reviewText: form.reviewText.value,

      // ✅ requirement
      reviewerName: user?.displayName,
      createdBy: user?.email,
      postedDate: new Date().toISOString(),
    };

    fetch("https://foodlover-server.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Review Added Successfully!");
          form.reset();
          navigate("/allReviews");
        }
      });
  };

  return (
    <div className="card bg-base-100 mt-5 w-full mx-auto max-w-sm shrink-0 shadow-2xl border border-gray-200">
      <div className="card-body text-center">
        <h1 className="text-2xl font-bold">Add now!</h1>
        <form onSubmit={handleAddReview}>
          <fieldset className="fieldset">
            {/* Food Name */}
            <input
              type="text"
              name="foodName"
              placeholder="Food Name"
              className="input input-bordered w-full"
              required
            />

            {/* Food Image */}
            <input
              type="text"
              name="foodImage"
              placeholder="Food Image URL"
              className="input input-bordered w-full"
              required
            />

            {/* Restaurant Name */}
            <input
              type="text"
              name="restaurantName"
              placeholder="Restaurant Name"
              className="input input-bordered w-full"
              required
            />

            {/* Location */}
            <input
              type="text"
              name="location"
              placeholder="Location"
              className="input input-bordered w-full"
              required
            />

            {/* Star Rating */}
            <input
              type="number"
              name="rating"
              placeholder="Star Rating (1-5)"
              min="1"
              max="5"
              className="input input-bordered w-full"
              required
            />

            {/* Review Text */}
            <textarea
              name="reviewText"
              placeholder="Write your review..."
              className="textarea textarea-bordered w-full"
              required
            ></textarea>

            <button className="btn text-white rounded-full bg-linear-to-r from-pink-500 to-red-600">
              Submit Review
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default AddReviews;
