import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

const ViewDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [review, setReview] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://foodlover-server.vercel.app/reviews/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="text-center mt-20 text-lg">
        Loading review details...
      </div>
    );
  }

  if (!review) {
    return (
      <div className="text-center mt-20">
        <p className="text-red-500">Review not found!</p>
        <button
          onClick={() => navigate("/allReviews")}
          className="btn mt-4 bg-pink-500 text-white rounded-full"
        >
          Back to Reviews
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Image */}
      <div className="w-full h-[400px] overflow-hidden rounded-2xl shadow-lg">
        <img
          src={review.foodImage}
          alt={review.foodName}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="mt-6 space-y-3">
        <h1 className="text-3xl font-bold text-gray-800">
          🍽 {review.foodName}
        </h1>

        <p className="text-lg text-gray-600">
          🏪 Restaurant: {review.restaurantName}
        </p>

        <p className="text-lg text-gray-600">
          📍 Location: {review.location}
        </p>

        <p className="text-lg text-gray-600">
          👤 Reviewer: {review.reviewerName}
        </p>

        <p className="text-lg font-semibold text-yellow-500">
          ⭐ Rating: {review.starRating} / 5
        </p>

        {/* Review Text */}
        <div className="bg-gray-100 p-4 rounded-xl mt-4">
          <h3 className="font-semibold mb-2">📝 Review:</h3>
          <p className="text-gray-700">
            {review.reviewText || "No review text provided"}
          </p>
        </div>

        {/* Button */}
        <div className="mt-6 flex gap-3">
          <button
            onClick={() => navigate(-1)}
            className="btn bg-gray-800 text-white rounded-full"
          >
            ⬅ Go Back
          </button>

          <button
            onClick={() => navigate("/allReviews")}
            className="btn bg-pink-500 text-white rounded-full"
          >
            View All Reviews
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;