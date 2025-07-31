import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Login({ isLoggedIn, setIsLoggedIn }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:3001/login",
        { email, password },
        {
          withCredentials: true,
        }
      )
      .then((result) => {
        if (result.data === "success") {
          localStorage.setItem("uid", document.cookie);
          setIsLoggedIn | true;
          console.log(isLoggedIn);
          navigate("/");
        } else {
          setErrors(result.data);
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="bg-linear-to-r from-gray-400 to-gray-700 flex justify-center items-center p-10 ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 py-10 pr-10 bg-gray-200 rounded-4xl p-5">
          <div className="col-span-2 h-full flex ">
            <img src="CTA.png" alt="" className="object-cover rounded-xl" />
          </div>
          <div className="col-span-1 lg:min-h-[600px]">
            <div className="flex flex-col gap-5 p-5">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                  <h1 className="text-2xl md:text-5xl">Welcome back!</h1>
                  <p className="text-lg md:text-2xl">
                    Enter your Credentials to access your account
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <label className="flex flex-col gap-2">
                    {" "}
                    Enter Email
                    <input
                      className="bg-gray-100 py-2 rounded-lg px-1"
                      placeholder="Enter Email"
                      type="text"
                      name="email"
                      autoComplete="off"
                      required
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    ></input>
                  </label>{" "}
                  <label className="flex flex-col gap-2">
                    {" "}
                    Enter Password
                    <input
                      className="bg-gray-100 py-2 rounded-lg px-1"
                      placeholder="Enter password"
                      type="password"
                      name="password"
                      autoComplete="off"
                      required
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    ></input>
                  </label>
                  <p className="text-red-500">{errors}</p>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <button
                  onClick={handleSubmit}
                  className="bg-linear-to-r from-gray-400 to-gray-200 border-[1px] py-2 px-4 rounded-2xl w-fit"
                >
                  Login
                </button>
                <div className="flex gap-3 justify-center items-center">
                  <div className="border-t-2 w-full"></div>
                  <p>or</p>
                  <div className="border-t-2 w-full"></div>
                </div>

                <div className="flex flex-col items-center gap-4">
                  <p>Don't have an account?</p>{" "}
                  <NavLink
                    className="bg-linear-to-r from-gray-400 to-gray-200 border-[1px] py-2 px-4 rounded-2xl w-fit"
                    to="/signup"
                  >
                    Sign up
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
