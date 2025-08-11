import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const ItemsList = ({
  admin,
  cart,
  setCart,
  setTotalCartItem,
  totalCartItem,
}) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteItemId, setDeleteItemId] = useState(null);
  const [editItemId, setEditItemId] = useState(null);

  const [error, setError] = useState("");
  const [selectedImageIndices, setSelectedImageIndices] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/getitems")
      .then((result) => {
        setItems(result.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Error fetching items");
        setLoading(false);
      });
  }, []);

  const handleColorClick = (itemId, colorIndex) => {
    setSelectedImageIndices((prev) => ({
      ...prev,
      [itemId]: colorIndex,
    }));
  };
  const handleUpdateStock = () => {
    navigate("/stockpage");
  };
  const handleDelete = (item) => {
    const uniqueId = item.uniqueId;
    axios;
    axios
      .post(
        "http://localhost:3001/deleteitem",
        { uniqueId },
        { withCredentials: true }
      )

      .then((result) => {
        console.log(result);
        navigate("/listing");
      })
      .catch((err) => console.log(err));
    window.location.reload();
  };
  const handleIsDelete = (item) => {
    setDeleteItemId(item._id);
  };
  const userId = localStorage.getItem("uniqueId");
  const orderId = uuidv4();

  const handleAddToCart = async (item) => {
    const selectedColorIndex = selectedImageIndices[item._id] || 0;
    const selectedColor = item.colors[selectedColorIndex];
    const selectedImage = item.image[selectedColorIndex];
    const uniqueId = item.uniqueId;
    const itemName = item.itemName;
    const price = item.price;
    const userId = localStorage.getItem("uniqueId");

    const cartItem = {
      uniqueId,
      itemName,
      price,
      selectedColor,
      selectedImage,
      quantity: 1,
    };

    try {
      const res = await axios.post("http://localhost:3001/cart", {
        userId,
        item: cartItem,
      });

      // Optional: sync cart state if needed
      setCart(res.data.cart.items);

      // Update total quantity
      const totalQuantity = res.data.cart.items.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
      setTotalCartItem(totalQuantity);
    } catch (err) {
      console.error(
        "Failed to add to cart:",
        err.response?.data || err.message
      );
    }
  };

  const handleEdit = (itemToEdit) => {
    localStorage.setItem("editItemId", itemToEdit.uniqueId);
    navigate("/stockeditpage");
  };
  useEffect(() => {
    if (editItemId) {
      const itemToEdit = items.find((item) => item.uniqueId === editItemId);
      if (itemToEdit) {
        handleEdit(itemToEdit);
      }
    }
  }, [editItemId, items]);

  if (loading) return <p>Loading items...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="py-10 px-10">
      {admin ? (
        <div className="flex justify-end items-end pb-5">
          <button
            className="border-[2px] p-2 rounded-2xl hover:bg-gradient-to-r from-gray-200 to-gray-500 text-gray-900 cursor-pointer hover:text-lg"
            onClick={handleUpdateStock}
          >
            Update Stock
          </button>
        </div>
      ) : null}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.length === 0 ? (
          <p>No items found.</p>
        ) : (
          items.map((item) => {
            const selectedImageIndex = selectedImageIndices[item._id] || 0;
            const selectedImage = item.image && item.image[selectedImageIndex];

            return (
              <div
                className="item-card flex flex-col justify-end gap-2 relative"
                key={item._id}
              >
                <div className="h-full flex flex-col justify-center ">
                  {selectedImage ? (
                    <img
                      src={`http://localhost:3001/${selectedImage}`}
                      alt={`${item.itemName} ${selectedImageIndex + 1}`}
                      height={300}
                      width={500}
                      className="border-[1px] object-cover h-full "
                    />
                  ) : (
                    <div className="placeholder-img">No Image</div>
                  )}
                  {admin ? (
                    <div className="absolute top-2 right-4 flex gap-2">
                      <button
                        className="cursor-pointer"
                        onClick={() => {
                          handleIsDelete(item);
                        }}
                      >
                        <img
                          src="delete.svg"
                          alt=""
                          className="w-6 h-6 object-cover rounded-full overflow-hidden"
                        />
                      </button>
                      <button
                        className="cursor-pointer"
                        onClick={() => {
                          setEditItemId(item.uniqueId);
                        }}
                      >
                        <img
                          src="edit.svg"
                          alt=""
                          className="w-6 h-6 object-cover rounded-full overflow-hidden"
                        />
                      </button>
                    </div>
                  ) : (
                    <div className="absolute top-2 right-4">
                      <button
                        className="cursor-pointer flex gap-2"
                        onClick={() => {
                          handleAddToCart(item);
                        }}
                      >
                        <img
                          src="add-to-cart.png"
                          alt=""
                          className="w-8 h-8 object-cover overflow-hidden"
                        />
                      </button>
                    </div>
                  )}
                  {deleteItemId === item._id && (
                    <div className="fixed inset-0  backdrop-blur-sm flex justify-center items-center z-10">
                      <div className="bg-white border rounded-xl p-8 flex flex-col items-center shadow-lg">
                        <p className="text-lg mb-4">
                          Are you sure you want to delete this item?
                        </p>
                        <div className="flex gap-4">
                          <button
                            className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                            onClick={() => {
                              const itemToDelete = items.find(
                                (item) => item._id === deleteItemId
                              );
                              if (itemToDelete) {
                                handleDelete(itemToDelete);
                              }
                            }}
                          >
                            Yes
                          </button>
                          <button
                            className="px-6 py-2 bg-gray-300 rounded hover:bg-gray-400"
                            onClick={() => setDeleteItemId(null)}
                          >
                            No
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-3">
                    <p className="text-lg  text-gray-700">Colors:</p>
                    <div className="flex gap-3 col-span-3">
                      {item.colors && item.colors.length > 0 ? (
                        item.colors.map((color, index) => (
                          <div
                            key={index}
                            title={color}
                            onClick={() => handleColorClick(item._id, index)}
                            style={{
                              backgroundColor: color,
                              border:
                                selectedImageIndices[item._id] === index
                                  ? "3px solid black"
                                  : "1px solid gray",
                            }}
                            className="w-12 h-12 rounded-full cursor-pointer"
                          ></div>
                        ))
                      ) : (
                        <span>No Color options</span>
                      )}
                    </div>
                    <div className="col-span-2">
                      <h3 className="text-2xl text-gray-700">
                        {item.itemName}
                      </h3>
                    </div>
                    <div className="col-span-1">
                      <p className="text-lg text-gray-700 flex gap-1">
                        Price:<span>£{item.price}</span>
                      </p>{" "}
                      <p className="text-sm text-gray-700 flex gap-1">
                        In Stock:<span>{item.quantity}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ItemsList;
