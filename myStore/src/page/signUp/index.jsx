import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

function SignUp() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [address, setAddress] = useState();
  const [gender, setGender] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [image, setImage] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!firstName || firstName.trim() === "") {
      newErrors.firstName = "First name is required";
    }
    if (!lastName || lastName.trim() === "") {
      newErrors.lastName = "Last name is required";
    }
    if (!address || address.trim() === "") {
      newErrors.address = "Address is required";
    }
    if (!phoneNumber || phoneNumber.trim() === "") {
      newErrors.phoneNumber = "Phone number is required";
    }
    if (!gender || gender.trim() === "") {
      newErrors.gender = "gender is required";
    }

    if (!email || email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!password || password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("address", address);
      formData.append("gender", gender);
      formData.append("phoneNumber", phoneNumber);
      formData.append("email", email);
      formData.append("password", password);
      if (image) {
        formData.append("image", image);
      }

      axios
        .post("http://localhost:3001/signup", formData)
        .then((result) => {
          // console.log(result);
          navigate("/login");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <div className="bg-linear-to-r from-gray-400 to-gray-700 flex justify-center items-center p-10 ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 py-10 pr-10 bg-gray-200 rounded-4xl p-5">
          <div className="col-span-2 h-full flex ">
            <img src="CTA.png" alt="" className="object-cover rounded-xl" />
          </div>
          <div className="col-span-1 lg:min-h-[600px] ">
            <div className="flex flex-col gap-5 p-5">
              <div className="flex flex-col gap-1">
                <h1 className="text-xl md:text-3xl">Welcome!</h1>
                <p className="text-lg md:text-xl">
                  Enter your Credentials to create your account
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <form
                  action="/signup"
                  method="post"
                  encType="multipart/form-data"
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-1 text-sm"
                >
                  <label className="flex flex-col gap-1">
                    {" "}
                    First Name
                    <input
                      className="bg-gray-100 py-2 rounded-lg px-1"
                      placeholder="Enter First Name"
                      type="text"
                      name="firstName"
                      required
                      autoComplete="off"
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                    ></input>
                    <p className="text-red-600">{errors.firstName}</p>
                  </label>
                  <label className="flex flex-col gap-1">
                    {" "}
                    Last Name
                    <input
                      className="bg-gray-100 py-2 rounded-lg px-1"
                      placeholder="Enter Last Name"
                      type="text"
                      name="lastName"
                      required
                      autoComplete="off"
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                    ></input>
                    <p className="text-red-600">{errors.lastName}</p>
                  </label>{" "}
                  <label className="flex flex-col gap-1">
                    {" "}
                    Address
                    <input
                      className="bg-gray-100 py-2 rounded-lg px-1"
                      placeholder="Enter your address"
                      type="text"
                      name="address"
                      required
                      autoComplete="off"
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                    ></input>
                    <p className="text-red-600">{errors.address}</p>
                  </label>{" "}
                  <label className="flex flex-col gap-1">
                    {" "}
                    Phone Number
                    <input
                      className="bg-gray-100 py-2 rounded-lg px-1"
                      placeholder="Enter phone number"
                      type="text"
                      name="phoneNumber"
                      required
                      autoComplete="off"
                      onChange={(e) => {
                        setPhoneNumber(e.target.value);
                      }}
                    ></input>
                    <p className="text-red-600">{errors.phoneNumber}</p>
                  </label>{" "}
                  <label className="flex flex-col gap-1">
                    {" "}
                    Gender
                    <div className="flex gap-2">
                      <input
                        className="bg-gray-100 py-2 rounded-lg px-1"
                        id="male"
                        type="radio"
                        name="gender"
                        required
                        value="male"
                        onChange={(e) => {
                          setGender(e.target.value);
                        }}
                      />
                      <label htmlFor="male">male</label>{" "}
                      <input
                        className="bg-gray-100 py-2 rounded-lg px-1"
                        id="female"
                        type="radio"
                        required
                        name="gender"
                        value="female"
                        onChange={(e) => {
                          setGender(e.target.value);
                        }}
                      />
                      <label htmlFor="female">female</label>
                    </div>
                    <p className="text-red-600">{errors.gender}</p>
                  </label>{" "}
                  <label className="flex flex-col gap-1">
                    {" "}
                    image
                    <input
                      type="file"
                      name="image"
                      accept="image/*"
                      onChange={(e) => setImage(e.target.files[0])}
                    />
                    <p className="text-red-600">{errors.image}</p>
                  </label>{" "}
                  <label className="flex flex-col gap-1">
                    {" "}
                    Email
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
                    <p className="text-red-600">{errors.email}</p>
                  </label>{" "}
                  <label className="flex flex-col gap-1">
                    {" "}
                    Password
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
                    <p className="text-red-600">{errors.password}</p>
                  </label>{" "}
                  <button
                    type="submit"
                    className="bg-linear-to-r from-gray-400 to-gray-200 border-[1px] py-2 px-4 rounded-2xl w-fit"
                  >
                    Sign up
                  </button>
                </form>
              </div>
            </div>
            <div className=" flex flex-col gap-2 justify-center items-center">
              <div className="flex gap-3 justify-center items-center w-full">
                <div className="border-t-2 w-full"></div>
                <p>or</p>
                <div className="border-t-2 w-full"></div>
              </div>
              <p>Already have an account?</p>{" "}
              <NavLink
                className="bg-linear-to-r from-gray-400 to-gray-200 border-[1px] py-2 px-4 rounded-2xl w-fit"
                to="/login"
              >
                Login
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
