import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = ({
  isLoggedIn,
  setIsLoggedIn,
  admin,
  setAdmin,
  totalCartItem,
}) => {
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
    localStorage.removeItem("admin");
    localStorage.removeItem("editUserId");
    localStorage.removeItem("editItemId");
    localStorage.removeItem("image-");
    localStorage.removeItem("name-");
    setAdmin(false);
  };
  const profileImage = localStorage.getItem("image");
  return (
    <>
      <div>
        <div className="grid grid-cols-3 justify-items-center items-center md:py-4 md:px-5 border-b-2 border-gray-300">
          <div className="grid grid-cols-6 justify-items-center gap-2 text-[13px] text-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive ? "text-orange-400" : "text-gray-600"
                }  hover:text-orange-400`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/About"
              className={({ isActive }) =>
                `${
                  isActive ? "text-orange-400" : "text-gray-600"
                }  hover:text-orange-400`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `${
                  isActive ? "text-orange-400" : "text-gray-600"
                }  hover:text-orange-400`
              }
            >
              Blog
            </NavLink>
            <NavLink
              to="contactus"
              className={({ isActive }) =>
                `${
                  isActive ? "text-orange-400" : "text-gray-600"
                }  hover:text-orange-400`
              }
            >
              Contact us
            </NavLink>{" "}
            <NavLink
              to="listing"
              className={({ isActive }) =>
                `${
                  isActive ? "text-orange-400" : "text-gray-600"
                }  hover:text-orange-400`
              }
            >
              Shop
            </NavLink>{" "}
            {admin ? (
              <div className="relative group">
                <p className="text-gray-600  hover:text-orange-400 ">
                  Admin Panel
                </p>

                <div className="absolute  z-1 hidden  bg-grey-200 group-hover:block">
                  <div className=" bg-gray-100 shadow-lg rounded-lg min-w-[200px] p-2 ">
                    <div className="flex flex-col justify-start">
                      {" "}
                      <NavLink
                        to="users"
                        className="text-gray-600 text-lg hover:text-orange-400"
                      >
                        Users
                      </NavLink>{" "}
                      <div className="border-b-[1px] w-full border-gray-500 shadow-2xl"></div>
                      <NavLink
                        to="orderspage"
                        className="text-gray-600 text-lg hover:text-orange-400"
                      >
                        Orders
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
          <NavLink
            to="/"
            className="text-sm md:text-2xl  text-bold text-gray-700  hover:text-orange-400 "
          >
            Infinity
          </NavLink>
          {isLoggedIn ? (
            <div className="flex gap-5">
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
                      alt="Profile"
                    />
                  </div>{" "}
                  <p className="text-lg text-gray-600  hover:text-orange-400">
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
                        <p className="text-lg text-gray-600  hover:text-orange-400">
                          my profile
                        </p>
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
                          className="text-gray-600 cursor-pointer text-lg  hover:text-orange-400"
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {admin ? null : (
                <NavLink
                  to="cartpage"
                  className="flex py-1 px-2 gap-5 items-center relative"
                >
                  <div className="w-8 h-8 overflow-hidden">
                    <img src="shopping-cart.png" alt="Cart" />
                  </div>
                  {totalCartItem > 0 && (
                    <span className="absolute top-0 -right-1 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                      {totalCartItem}
                    </span>
                  )}
                </NavLink>
              )}
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
