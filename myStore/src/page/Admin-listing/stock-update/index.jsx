import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function StockPage() {
  const [itemName, setItemName] = useState();
  const [quantity, setQuantity] = useState();
  const [price, setPrice] = useState();
  const [colors, setColor] = useState();
  const [image, setImage] = useState();
  const navigate = useNavigate();
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    setSelectedFiles(Array.from(event.target.files));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("itemName", itemName);
    formData.append("quantity", quantity);
    formData.append("price", price);
    formData.append("colors", colors);

    selectedFiles.forEach((file) => {
      formData.append("images", file);
    });

    axios
      .post("http://localhost:3001/additems", formData)
      .then((result) => {
        console.log(result);
        navigate("/listing");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="bg-linear-to-r from-gray-400 to-gray-700 flex justify-center items-center p-10 ">
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
              Item Name
              <input
                className="bg-gray-100 py-2 rounded-lg px-1"
                placeholder="Enter First Name"
                type="text"
                name="itemName"
                required
                autoComplete="off"
                onChange={(e) => {
                  setItemName(e.target.value);
                }}
              ></input>
            </label>
            <label className="flex flex-col gap-1">
              {" "}
              Quantity
              <input
                className="bg-gray-100 py-2 rounded-lg px-1"
                placeholder="Enter Last Name"
                type="number"
                name="quantity"
                required
                autoComplete="off"
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
              ></input>
            </label>{" "}
            <label className="flex flex-col gap-1">
              {" "}
              Colors
              <input
                className="bg-gray-100 py-2 rounded-lg px-1"
                placeholder="e.g. red, blue, green"
                type="text"
                name="colors"
                required
                autoComplete="off"
                onChange={(e) => {
                  setColor(e.target.value);
                }}
              ></input>
            </label>{" "}
            <label className="flex flex-col gap-1">
              {" "}
              Price
              <input
                className="bg-gray-100 py-2 rounded-lg px-1"
                placeholder="Enter your address"
                type="text"
                name="price"
                required
                autoComplete="off"
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              ></input>
            </label>{" "}
            <label className="flex flex-col gap-1">
              {" "}
              image
              <input
                type="file"
                name="image"
                multiple
                accept="image/*"
                onChange={handleFileChange}
              />
            </label>{" "}
            <button
              type="submit"
              className="bg-linear-to-r from-gray-400 to-gray-200 border-[1px] py-2 px-4 rounded-2xl w-fit"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default StockPage;
