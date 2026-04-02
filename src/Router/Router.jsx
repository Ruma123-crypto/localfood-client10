import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import HomeLayout from "../Layout/HomeLayout";
import { Component } from "react";
import Reviews from "../Pages/Reviews";
import AddReviews from "../Pages/AddReviews";
import MyReviews from "../Pages/MyReviews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import AllReviews from "../Pages/AllReviews";
import VeiwDetails from "../Pages/VeiwDetails";
import UpDateReviews from "../Pages/UpDateReviews";
import MyFavourite from "../Pages/MyFavourite";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: "true",
        Component: Home,
        loader: () => fetch("https://foodlover-server.vercel.app/reviews"),
      },

      {
        path: "/addReviews",
        element: (
          <PrivateRoute>
            <AddReviews></AddReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/myReviews",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/allReviews",
        Component: AllReviews,
        loader: () => fetch("https://foodlover-server.vercel.app/reviews"),
      },
      {
        path: "/updateReviews/:id",
        Component: UpDateReviews,
      },

      {
        path: "/myFavourite",
        Component: MyFavourite,
      },
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
]);
