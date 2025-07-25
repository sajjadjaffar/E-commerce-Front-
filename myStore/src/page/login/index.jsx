import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/users", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "success") {
          navigate("/");
        }
        if (result.data === "password incorrect") {
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="flex justify-end container mx-auto py-5">
        <div className="flex flex-col gap-5 py-20 px-10">
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
                  className="border-2 rounded-xl border-gray-900 bg-white"
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                ></input>
              </label>{" "}
              <label className="flex flex-col gap-2">
                {" "}
                Enter Password
                <input
                  className="border-2 rounded-xl border-gray-900  bg-white "
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                ></input>
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <button
              onClick={handleSubmit}
              className="bg-gray-500 py-2 px-4 rounded-2xl w-fit"
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
                className="bg-gray-500 py-2 px-4 rounded-2xl w-fit"
                to="/signup"
              >
                Sign up
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
