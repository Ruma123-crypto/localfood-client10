import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const MyFavourite = () => {
  const [favorites, setFavorites] = useState([]);
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://foodlover-server.vercel.app/my-favorites?email=${user.email}`,
      )
        .then((res) => res.json())
        .then((data) => {
          setFavorites(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [user]);

  if (loading) {
    return <div>Loading favorites...</div>;
  }

  if (favorites.length === 0) {
    return <div>No favorites added yet.</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {favorites.map((fav) => (
        <div
          key={fav._id}
          className="border rounded-lg shadow-md overflow-hidden"
        >
          <img
            src={fav.foodImage}
            alt={fav.foodName}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">{fav.foodName}</h2>
            <p className="text-gray-600">{fav.restaurantName}</p>
            <p className="text-gray-500 text-sm">{fav.location}</p>
            <p className="mt-2">⭐ {fav.starRating}</p>
            <p className="mt-2">{fav.reviewText}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyFavourite;
