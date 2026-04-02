import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://foodlover-server.vercel.app/my-reviews?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      });
  }, [user.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://foodlover-server.vercel.app/reviews/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              Swal.fire("Deleted!", "Your review has been deleted.", "success");
              // Remove deleted review from state
              setReviews(reviews.filter((review) => review._id !== id));
            } else {
              Swal.fire(
                "Error!",
                data.error || "Failed to delete review",
                "error",
              );
            }
          });
      }
    });
  };

  // ✅ Loading Spinner
  if (loading) {
    return (
      <div className="text-center mt-10">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center mb-6">My Reviews</h2>

      <table className="table w-full">
        <thead>
          <tr>
            <th>Food Image</th>
            <th>Food Name</th>
            <th>Restaurant</th>
            <th>Posted Date</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {reviews.map((review) => (
            <tr key={review._id}>
              <td>
                <img src={review.foodImage} className="w-16 h-16 rounded" />
              </td>

              <td>{review.foodName}</td>
              <td>{review.restaurantName}</td>
              <td>{review.postedDate}</td>

              <td>
                <Link
                  to={`/updateReviews/${review._id}`}
                  className="btn text-white rounded-full bg-linear-to-r from-pink-500 to-red-600"
                >
                  UPDATE
                </Link>

                <button
                  onClick={() => handleDelete(review._id)}
                  className="btn text-white rounded-full bg-linear-to-r from-pink-500 to-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyReviews;
