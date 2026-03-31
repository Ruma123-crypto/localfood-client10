import React, { use, useState } from "react";
import { FcGoogle } from 'react-icons/fc';
import { Link ,useNavigate } from 'react-router';
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-hot-toast"; // ⚠️ Correct way


const Register = () => {
const {createUser, signInWithGoogle}=use(AuthContext);
 const [loading, setLoading] = useState(false);
 const navigate = useNavigate();
 const handleRegister = (event) => {
    event.preventDefault();
    const displayName = event.target.displayName.value;
    const photoURL = event.target.photoURL.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;


    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

     if (!passwordRegex.test(password)) {
      toast.error(
        "Password must be at least 6 characters and include uppercase & lowercase"
      );
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      setLoading(false);
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      
      })
      .catch((error) => {
        console.log(error);
    
      });
  };

   const handleGoogleSignIn = () => {
    
    signInWithGoogle()
      .then((result) => {
     
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        
      });
  };
    return (
       <div className="card bg-base-100 mt-3 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold text-center">Register</h1>
        <form onSubmit={handleRegister}>
          <fieldset className="fieldset">
            {/* Name field */}
            <label className="label">Name</label>
            <input
              type="text"
              name="displayName"
              className="input rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Name"
            />
                {/* photoURL */}
            <label className="label">PhotoURL</label>
            <input
              type="text"
              name="photoURL"
              className="input rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Photo URL"
            />
            {/* email field */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Email"
            />
            {/* password field */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Password"
            />

            {/* confrim password */}
             <label className="label">Confirm Password</label>
             <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
            className="input input-bordered w-full rounded-full"
          />

            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn text-white mt-4 rounded-full bg-linear-to-r from-pink-500 to-red-600">
              Register
            </button>
          </fieldset>
        </form>

        <button onClick={handleGoogleSignIn}  className="btn bg-white rounded-full text-black border-[#e5e5e5]">
          <FcGoogle />
          Login with Google
        </button>
        <p className="text-center">
          Already have an account? Please{" "}
          <Link className="text-blue-500 hover:text-blue-800" to="/auth/login">
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
    );
};

export default Register;