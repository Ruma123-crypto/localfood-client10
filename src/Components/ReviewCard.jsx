import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const ReviewCard = ({ reviews }) => {
  const {
    _id,
    foodName,
    foodImage,
    restaurantName,
    location,
    starRating,
    reviewerName,
  } = reviews;
  const { user } = useContext(AuthContext);

  const [isFavorite, setIsFavorite] = useState(false);

  // Page load এ check করা
  useEffect(() => {
    if (user && user.email) {
      fetch(
        `https://foodlover-server.vercel.app/my-favorites?email=${user.email}`,
      )
        .then((res) => res.json())
        .then((favs) => {
          // রিভিউ ID বের করা
          const favReviewIds = favs.map((f) => f._id);
          if (favReviewIds.includes(_id)) {
            setIsFavorite(true);
          }
        });
    }
  }, [user, _id]);

  const handleFavorite = () => {
    if (!user || !user.email) {
      alert("Please login first!");
      return;
    }

    fetch("https://foodlover-server.vercel.app/favorites", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userEmail: user.email, reviewId: _id }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setIsFavorite(true);
          alert("Added to favorites!");
        } else {
          alert(data.message || "Already favorited");
        }
      });
  };

  return (
    <div className="card bg-white shadow-md hover:shadow-xl transition duration-300 rounded-xl">
      <figure>
        <img
          src={foodImage}
          alt={foodName}
          className="h-52 w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-black">{foodName}</h2>
        <p className="text-sm text-gray-600">🍽 {restaurantName}</p>
        <p className="text-sm text-gray-500">📍 {location}</p>
        <p className="text-sm">👤 {reviewerName}</p>
        <p className="font-semibold">⭐ {starRating} / 5</p>

        <button
          className=" btn rounded-full bg-linear-to-r from-pink-500 to-red-600"
          onClick={handleFavorite}
          style={{
            color: isFavorite ? "black" : "white", // Heart color
            fontSize: "20px",
            marginTop: "10px",
          }}
        >
          ♥ Add to Favorite
        </button>

        <Link
          to={`/reviews/${_id}`}
          className="btn w-full text-white rounded-full bg-linear-to-r from-pink-500 to-red-600"
        >
          View Details
        </Link>
        <button className="btn w-full text-white rounded-full bg-linear-to-r from-pink-500 to-red-600">
          Show All
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;
