import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function StockEditPage({ password, email }) {
  const navigate = useNavigate();

  const [image, setImage] = useState([]);
  const [previewImage, setPreviewImage] = useState("");
  const [previewImage1, setPreviewImage1] = useState("");
  const [previewImage2, setPreviewImage2] = useState("");
  const [previewImage3, setPreviewImage3] = useState("");
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);

  const uniqueId = localStorage.getItem("editItemId");
  const [colors, setColors] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const [price, setPrice] = useState([]);
  const [itemName, setItemName] = useState([]);

  useEffect(() => {
    axios
      .post(
        "http://localhost:3001/getiteminfo",
        { uniqueId },
        { withCredentials: true }
      )
      .then((result) => {
        setColors(result.data.colors);
        setQuantity(result.data.quantity);
        setPrice(result.data.price);
        setItemName(result.data.itemName);
        setImage(result.data.image);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    setPreviewImage1("http://localhost:3001/" + image[0]);
    setPreviewImage2("http://localhost:3001/" + image[1]);
    setPreviewImage3("http://localhost:3001/" + image[2]);
  }, [image]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("itemName", itemName);
    formData.append("quantity", quantity);
    formData.append("price", price);
    formData.append("uniqueId", uniqueId);
    formData.append("colors", colors);
    if (file1) formData.append("images", file1);
    if (file2) formData.append("images", file2);
    if (file3) formData.append("images", file3);

    axios
      .patch("http://localhost:3001/updateitem", formData)
      .then((result) => {
        navigate("/listing");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="bg-linear-to-r from-gray-400 to-gray-700 flex justify-center items-center p-10 ">
        <div className="w-fit justify-items-center">
          <div className="flex flex-col gap-5 p-5">
            <div className="flex flex-col gap-1">
              <form
                encType="multipart/form-data"
                onSubmit={handleSubmit}
                className="flex flex-col text-sm relative gap-14"
              >
                {/* <div className="flex md:flex-row flex-col items-center gap-3">
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
                </div> */}
                <div className="flex gap-2">
                  <div>
                    {" "}
                    <img
                      src={previewImage1 || null}
                      alt=""
                      className="h-full"
                    />{" "}
                    <input
                      type="file"
                      name="previewImage1"
                      accept="image/*"
                      className="border-[1px] rounded-sm p-2 bg-gray-300 font-medium max-w-[200px]"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        setFile1(file);
                        setPreviewImage1(URL.createObjectURL(file));
                        console.log(previewImage1);
                      }}
                    />
                  </div>{" "}
                  <div>
                    {" "}
                    <img
                      src={previewImage2 || null}
                      alt=""
                      className="h-full"
                    />{" "}
                    <input
                      type="file"
                      name="previewImage2"
                      accept="image/*"
                      className="border-[1px] rounded-sm p-2 bg-gray-300 font-medium max-w-[200px]"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        setFile2(file);
                        setPreviewImage2(URL.createObjectURL(file));
                      }}
                    />
                  </div>{" "}
                  <div>
                    {" "}
                    <img
                      src={previewImage3 || null}
                      alt=""
                      className="h-full"
                    />{" "}
                    <input
                      type="file"
                      name="previewImage3"
                      accept="image/*"
                      className="border-[1px] rounded-sm p-2 bg-gray-300 font-medium max-w-[200px]"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        setFile3(file);
                        setPreviewImage3(URL.createObjectURL(file));
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <label className="flex flex-col gap-1">
                    Colors
                    <input
                      className="bg-gray-100 py-2 rounded-lg px-1"
                      type="text"
                      name="colors"
                      value={colors}
                      required
                      autoComplete="off"
                      onChange={(e) => setColors(e.target.value)}
                    />
                  </label>
                  <label className="flex flex-col gap-1">
                    item Name
                    <input
                      className="bg-gray-100 py-2 rounded-lg px-1"
                      type="text"
                      name="itemName"
                      value={itemName}
                      required
                      autoComplete="off"
                      onChange={(e) => setItemName(e.target.value)}
                    />
                  </label>
                  <label className="flex flex-col gap-1">
                    Quantity
                    <input
                      className="bg-gray-100 py-2 rounded-lg px-1"
                      type="number"
                      name="quantity"
                      value={quantity}
                      required
                      autoComplete="off"
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </label>

                  <label className="flex flex-col gap-1">
                    Price
                    <input
                      className="bg-gray-100 py-2 rounded-lg px-1"
                      type="number"
                      name="price"
                      value={price}
                      required
                      autoComplete="off"
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </label>
                  <div className="flex gap-3">
                    <button
                      type="submit"
                      className="bg-linear-to-r from-gray-400 to-gray-200 border-[1px] py-2 px-4 rounded-2xl w-fit min-w-[150px]"
                    >
                      Save
                    </button>{" "}
                    <button
                      onClick={() => {
                        navigate("/listing");
                      }}
                      className="bg-linear-to-r from-gray-400 to-gray-200 border-[1px] py-2 px-4 rounded-2xl w-fit min-w-[150px]"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StockEditPage;
