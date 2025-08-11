import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function EditUser({ password, email }) {
  const navigate = useNavigate();

  const [first_Name, setFirstName] = useState("");
  const [last_Name, setLastName] = useState("");
  const [address_, setAddress] = useState("");
  const [gender_, setGender] = useState("");
  const [phoneNumber_, setPhoneNumber] = useState("");
  const [image_, setImage] = useState("");
  const [email_, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [previewImage, setPreviewImage] = useState("");
  const [confirm, setConfirm] = useState(false);

  const uniqueId = localStorage.getItem("editUserId");
  useEffect(() => {
    axios
      .post(
        "http://localhost:3001/getinfo",
        {
          email,
          password,
          uniqueId,
        },
        {
          withCredentials: true,
        }
      )
      .then((result) => {
        if (result.data[0] === "success") {
          setFirstName(result.data[1]);
          setLastName(result.data[2]);
          setGender(result.data[3]);
          setAddress(result.data[4]);
          setEmail(result.data[5]);
          setPhoneNumber(result.data[6]);
          setImage(result.data[7]);

          if (typeof result.data[8] === "string") {
            setPreviewImage("http://localhost:3001/" + result.data[7]);
          }
        } else {
          setErrors(result.data);
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
  }, [email, password, navigate]);

  const validateForm = () => {
    const newErrors = {};

    if (!first_Name || first_Name.trim() === "") {
      newErrors.firstName = "First name is required";
    }
    if (!last_Name || last_Name.trim() === "") {
      newErrors.lastName = "Last name is required";
    }
    if (!address_ || address_.trim() === "") {
      newErrors.address = "Address is required";
    }
    if (!phoneNumber_ || phoneNumber_.toString().trim() === "") {
      newErrors.phoneNumber = "Phone number is required";
    }
    if (!gender_ || gender_.trim() === "") {
      newErrors.gender = "Gender is required";
    }
    if (!email_ || email_.trim() === "") {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email_)) {
      newErrors.email = "Invalid email format";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const formData = new FormData();
      formData.append("firstName", first_Name);
      formData.append("lastName", last_Name);
      formData.append("address", address_);
      formData.append("gender", gender_);
      formData.append("phoneNumber", phoneNumber_);
      formData.append("email", email_);
      formData.append("uniqueId", uniqueId);
      if (image_ && typeof image_ !== "string") {
        formData.append("image", image_);
      }

      axios
        .patch("http://localhost:3001/update", formData)
        .then((result) => {
          const { imagePath, name } = result.data;
          localStorage.setItem("name-", name);
          if (imagePath) {
            localStorage.setItem("image-", `${imagePath}`);
          }

          navigate("/users");
        })
        .catch((err) => console.log(err));

      if (typeof image_ === "string") {
        localStorage.setItem("image-", image_);
      } else if (previewImage) {
        localStorage.setItem("image-", previewImage);
      }

      navigate("/users");
    }
  };
  const handleDelete = () => {
    axios
      .post(
        "http://localhost:3001/delete",
        {
          email,
          password,
          uniqueId,
        },
        {
          withCredentials: true,
        }
      )
      .then((result) => {
        console.log(result);
        navigate("/users");
      })
      .catch((err) => console.log(err));
  };
  const handleConfirm = () => {
    setConfirm(true);
  };
  const handleCancel = () => {
    setConfirm(false);
  };

  return (
    <div>
      <div className="bg-linear-to-r from-gray-400 to-gray-700 flex justify-center items-center p-10 ">
        <div className="w-fit justify-items-center">
          <div className="flex flex-col gap-5 p-5">
            <div className="flex flex-col gap-1">
              <h1 className="text-xl md:text-3xl">User Profile!</h1>
            </div>
            <div className="flex flex-col gap-1">
              <form
                onSubmit={handleSubmit}
                encType="multipart/form-data"
                className="flex flex-col gap-2 text-sm relative"
              >
                <div className="flex md:flex-row flex-col items-center gap-3">
                  <img
                    src={previewImage || null}
                    height={150}
                    width={150}
                    alt="Profile"
                  />
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    className="border-[1px] rounded-sm p-2 bg-gray-300 font-medium max-w-[200px]"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      setImage(file);
                      if (file) {
                        setPreviewImage(URL.createObjectURL(file));
                      }
                    }}
                  />
                </div>
                <label className="flex flex-col gap-1">
                  First Name
                  <input
                    className="bg-gray-100 py-2 rounded-lg px-1"
                    type="text"
                    name="firstName"
                    value={first_Name}
                    required
                    autoComplete="off"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  {errors.firstName && (
                    <span className="text-red-500">{errors.firstName}</span>
                  )}
                </label>
                <label className="flex flex-col gap-1">
                  Last Name
                  <input
                    className="bg-gray-100 py-2 rounded-lg px-1"
                    type="text"
                    name="lastName"
                    value={last_Name}
                    required
                    autoComplete="off"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </label>
                <label className="flex flex-col gap-1">
                  Address
                  <input
                    className="bg-gray-100 py-2 rounded-lg px-1"
                    type="text"
                    name="address"
                    value={address_}
                    required
                    autoComplete="off"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </label>
                <label className="flex flex-col gap-1">
                  Phone Number
                  <input
                    className="bg-gray-100 py-2 rounded-lg px-1"
                    type="text"
                    name="phoneNumber"
                    value={phoneNumber_}
                    required
                    autoComplete="off"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </label>
                <label className="flex flex-col gap-1">
                  Gender
                  <div className="flex gap-2">
                    <input
                      id="male"
                      type="radio"
                      name="gender"
                      value="male"
                      checked={gender_ === "male"}
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <label htmlFor="male">Male</label>

                    <input
                      id="female"
                      type="radio"
                      name="gender"
                      value="female"
                      checked={gender_ === "female"}
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <label htmlFor="female">Female</label>
                  </div>
                </label>
                <label className="flex flex-col gap-1">
                  Email
                  <input
                    className="bg-gray-100 py-2 rounded-lg px-1"
                    type="email"
                    name="email"
                    value={email_}
                    required
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>

                {confirm ? (
                  <div className="flex flex-col gap-3">
                    <p className="text-base text-red-700">Are you sure?</p>
                    <div className="flex  gap-3">
                      <button
                        onClick={handleDelete}
                        className="bg-linear-to-r from-gray-400 to-gray-200 border-[1px] py-2 px-4 rounded-2xl w-fit min-w-[150px] "
                      >
                        Yes
                      </button>
                      <button
                        onClick={handleCancel}
                        className="bg-linear-to-r from-gray-400 to-gray-200 border-[1px] py-2 px-4 rounded-2xl w-fit min-w-[150px] "
                      >
                        No
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex gap-3">
                    <button
                      type="submit"
                      className="bg-linear-to-r from-gray-400 to-gray-200 border-[1px] py-2 px-4 rounded-2xl w-fit min-w-[150px]"
                    >
                      Update
                    </button>{" "}
                    <button
                      onClick={handleConfirm}
                      className="bg-linear-to-r from-gray-400 to-gray-200 border-[1px] py-2 px-4 rounded-2xl w-fit min-w-[150px]"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditUser;
