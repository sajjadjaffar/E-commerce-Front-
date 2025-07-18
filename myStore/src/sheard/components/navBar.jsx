import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div>
        <div className="bg-black text-white flex flex-col justify-center items-center">
          <p>
            Get early access on launches and offers.
            <span className="">Sign Up For Texts</span>
          </p>
        </div>
        <div className="flex flex-row justify-between items-center py-4 px-5 border-b-2 border-gray-300">
          <div className="flex gap-3 justify-center items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "text-orange-400" : "text-gray-600"}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/About"
              className={({ isActive }) =>
                `${isActive ? "text-orange-400" : "text-gray-600"}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `${isActive ? "text-orange-400" : "text-gray-600"}`
              }
            >
              Blog
            </NavLink>
            <NavLink
              to="contact"
              className={({ isActive }) =>
                `${isActive ? "text-orange-400" : "text-gray-600"}`
              }
            >
              Contact us
            </NavLink>
          </div>

          <div className="text-3xl text-bold text-gray-700">Infinity</div>
          <div className="px-5">Sign in</div>
        </div>
        <div className="flex flex-row justify-center items-center">
          <p className="text-xl text-gray-400  py-2 px-3">New Arrivals</p>
          <p className="text-xl text-gray-400  py-2 px-3">Holiday Gifting</p>
          <p className="text-xl text-gray-400  py-2 px-3">Best-Sellers</p>
          <p className="text-xl text-gray-400  py-2 px-3">Clothing</p>
          <p className="text-xl text-gray-400  py-2 px-3">Tops & Sweaters</p>
          <p className="text-xl text-gray-400  py-2 px-3">Pants & Jeans</p>
          <p className="text-xl text-gray-400  py-2 px-3">Outerwear</p>
          <p className="text-xl text-gray-400  py-2 px-3">Shoes & Bags</p>
          <p className="text-xl text-red-600 font-semibold py-2 px-3">Sale </p>
        </div>
      </div>
    </>
  );
};
export default NavBar;
