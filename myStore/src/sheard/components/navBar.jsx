import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/login");
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie =
        name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
    }
    localStorage.removeItem("uniqueId");
    localStorage.removeItem("name");
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
          <NavLink
            to="/"
            className="text-sm md:text-2xl  text-bold text-gray-700 "
          >
            Infinity
          </NavLink>
          {isLoggedIn ? (
            // <div className="flex flex-row justify-center items-center gap-1 dropdow">

            // </div>
            <div>
              {" "}
              <div className="relative group">
                <NavLink
                  to="profilepage"
                  className="flex py-1 px-2 gap-5 items-center"
                >
                  <div className="w-10 h-10 overflow-hidden rounded-full">
                    <img
                      src={`http://localhost:3001/${localStorage.getItem(
                        "image"
                      )}`}
                      alt=""
                    />
                  </div>{" "}
                  <p className="text-lg text-gray-600">
                    Hi! {localStorage.getItem("name")}
                  </p>
                </NavLink>

                <div className="absolute left-0 z-1 hidden  bg-grey-200 group-hover:block">
                  <div className=" bg-gray-100 shadow-lg rounded-lg min-w-[200px] p-2 ">
                    <div className="flex flex-col justify-start">
                      <NavLink
                        to="profilepage"
                        className="flex items-center p-2 gap-2"
                      >
                        <img
                          src="profileIcon.png"
                          height={20}
                          width={20}
                          alt=""
                        />{" "}
                        <p className="text-lg text-gray-600">my profile</p>
                      </NavLink>{" "}
                      <div className="border-b-[1px] w-full border-gray-500 shadow-2xl"></div>
                      <div className="flex items-center gap-2 p-2">
                        <img
                          src="powerButton.png"
                          height={20}
                          width={20}
                          alt=""
                        />{" "}
                        <button
                          onClick={handleLogout}
                          className="text-gray-600 cursor-pointer text-lg"
                        >
                          Logout
                        </button>
                      </div>
                      {/* <div className="border-t-[1px] w-full border-gray-500"></div> */}
                    </div>
                  </div>
                </div>
              </div>
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
