import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleLogout = () => {
    setIsLoggedIn(false);
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie =
        name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
    }
    localStorage.removeItem("uid");
    localStorage.removeItem("username");
    localStorage.removeItem("image");
  };
  const profileImage = localStorage.getItem("image");
  console.log(profileImage);
  return (
    <>
      <div>
        <div className="grid grid-cols-3 justify-items-center items-center md:py-4 md:px-5 border-b-2 border-gray-300">
          <div className="grid grid-cols-4 justify-items-center gap-2 text-sm text-center">
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
              to="contactus"
              className={({ isActive }) =>
                `${isActive ? "text-orange-400" : "text-gray-600"}`
              }
            >
              Contact us
            </NavLink>
          </div>
          <div className="text-sm md:text-2xl  text-bold text-gray-700 ">
            Infinity
          </div>
          {isLoggedIn ? (
            <div className="flex flex-row justify-center items-center gap-1">
              <p className="text-lg text-gray-600">
                hi! {localStorage.getItem("username")}
              </p>
              <div className="w-14 h-14 overflow-hidden rounded-full">
                <img src={"http://localhost:3001/" + profileImage} alt="" />
              </div>
              <button onClick={handleLogout} className="md:px-5 text-gray-600">
                Logout
              </button>
            </div>
          ) : (
            <NavLink to="/login" className="md:px-5 text-gray-600">
              Login
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
};
export default NavBar;
