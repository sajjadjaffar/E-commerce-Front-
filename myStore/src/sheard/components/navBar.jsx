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
    window.location.reload;
  };

  return (
    <>
      <div>
        <div className="grid grid-cols-3 justify-items-center md:py-4 md:px-5 border-b-2 border-gray-300">
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
            <button onClick={handleLogout} className="md:px-5 text-gray-600">
              Logout
            </button>
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
