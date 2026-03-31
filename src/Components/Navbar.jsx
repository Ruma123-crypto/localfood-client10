import React, { use } from 'react';
import { FaBurger } from 'react-icons/fa6';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Context/AuthContext';


const Navbar = () => {
  const {user,signOutUser}=use(AuthContext);
  

   const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
     
      <li>
        <NavLink to="/allReviews">All Reviews</NavLink>
      </li>
      <li>
        <NavLink to="/myFavourite">My Favourite</NavLink>
      </li>
    
    </>
  );
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {
        links
       }
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><span className='text-yellow-600'><FaBurger /></span>Food Lovers</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        links
      }
    </ul>
  </div>
  <div className="navbar-end">

{
  user? <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
       <div className="w-10 rounded-full">
  <img
    src={user?.photoURL}
    alt="User Avatar"
  />
</div>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <Link to='/addReviews' className="justify-between">
            Add Review  </Link>
        </li>
        <li><Link to='/myReviews'>My Reviews</Link ></li>
        <li onClick={signOutUser} className='btn text-white rounded-full bg-linear-to-r from-pink-500 to-red-600'><a>Logout</a></li>
      </ul>
    </div>:<Link to='/auth/login' className='btn text-white rounded-full bg-linear-to-r from-pink-500 to-red-600'>Login</Link>
}
    
  </div>


  
</div>



    );
};

export default Navbar;