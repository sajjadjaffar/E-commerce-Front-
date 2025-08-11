import axios from "axios";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Cart({ setTotalCartItem }) {
  const [cart, setCart] = useState([]);
  const [deleteItemId, setDeleteItemId] = useState(null);
  const [showOrderPopup, setShowOrderPopup] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  const userId = localStorage.getItem("uniqueId");

  const increaseQuantity = (uniqueId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.uniqueId === uniqueId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      const totalQuantity = updatedCart.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
      setTotalCartItem(totalQuantity);

      const updatedItem = updatedCart.find(
        (item) => item.uniqueId === uniqueId
      );

      axios.post("http://localhost:3001/update-cart-quantity", {
        userId,
        uniqueId,
        quantity: updatedItem.quantity,
      });

      return updatedCart;
    });
  };

  const decreaseQuantity = (uniqueId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.uniqueId === uniqueId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

      const totalQuantity = updatedCart.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
      setTotalCartItem(totalQuantity);

      const updatedItem = updatedCart.find(
        (item) => item.uniqueId === uniqueId
      );

      axios.post("http://localhost:3001/update-cart-quantity", {
        userId,
        uniqueId,
        quantity: updatedItem.quantity,
      });

      return updatedCart;
    });
  };

  const handleIsDelete = (item) => {
    setDeleteItemId(item.uniqueIdItem);
  };

  useEffect(() => {
    axios
      .post("http://localhost:3001/cartinfo", { userId })
      .then((result) => {
        const orders = result.data;
        const allItems = orders.flatMap((order) => order.items);

        setCart(allItems);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Error fetching cart");
        setLoading(false);
      });
  }, []);

  const orderId = uuidv4();
  const handleorder = (cart) => {
    const filteredCart = cart.map((item) => ({
      itemName: item.itemName,
      price: item.price,
      selectedColor: item.selectedColor,
      quantity: item.quantity,
    }));

    axios
      .post("http://localhost:3001/order", { filteredCart, userId, orderId })
      .then((result) => {
        const newOrder = result.data;
        setOrderDetails(result.data);
        setShowOrderPopup(true);
        setCart([]);
        setTotalCartItem(0);
        setOrders((prevOrders) => [newOrder, ...prevOrders]);
      })
      .catch((err) => console.log(err));
    axios
      .post("http://localhost:3001/emptycart", { userId })
      .then((result) => {});
  };

  const grandTotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/orders/user/${userId}`)
      .then((res) => {
        setOrders(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch user orders:", err);
        setLoading(false);
      });
  }, [userId]);

  if (loading) return <p>Loading orders...</p>;

  return (
    <div className="py-10 px-10 flex flex-col gap-3">
      <h2>Your Cart</h2>
      {cart.length === 0 && (
        <p className="text-center text-gray-500 mt-4">Your cart is empty.</p>
      )}
      <div className="flex flex-col gap-3">
        {cart.map((item, index) => (
          <div
            key={index}
            className="border-2 rounded-2xl w-full px-5 py-3 flex flex-row gap-5 relative bg-gradient-to-r from-gray-300 to-gray-400"
          >
            <img
              src={`http://localhost:3001/${item.selectedImage}`}
              alt={item.itemName}
              height={50}
              className=""
            />
            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-bold gap-3 flex">
                Article Name:
                <span className="font-normal">{item.itemName}</span>
              </h3>
              <p className="text-lg font-bold gap-3 flex">
                Color: <span className="font-normal">{item.selectedColor}</span>
              </p>
              <p className="text-lg font-bold gap-3 flex">
                Price: <span className="font-normal"> ${item.price}</span>
              </p>
              <p className="text-lg font-bold gap-3 flex">
                Quantity: <span className="font-normal"> {item.quantity}</span>
              </p>
              <p className="text-lg font-bold gap-3 flex">
                Total: ${item.price * item.quantity}
              </p>
              <div className="flex gap-3">
                <button
                  className="border-[1px] px-5 py-2 rounded-xl"
                  onClick={() => increaseQuantity(item.uniqueId)}
                >
                  +
                </button>
                <button
                  className="border-[1px] px-5 py-2  rounded-xl"
                  onClick={() => decreaseQuantity(item.uniqueId)}
                >
                  -
                </button>
              </div>
            </div>

            <div className="flex gap-2">
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
              </div>
              {deleteItemId === item.uniqueIdItem && (
                <div className="fixed inset-0  backdrop-blur-sm flex justify-center items-center z-10">
                  <div className="bg-white border rounded-xl p-8 flex flex-col items-center shadow-lg">
                    <p className="text-lg mb-4">
                      Are you sure you want to delete this item?
                    </p>
                    <div className="flex gap-4">
                      <button className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                        Yes
                      </button>

                      <button className="px-6 py-2 bg-gray-300 rounded hover:bg-gray-400">
                        No
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <p className="text-xl font-semibold text-right mt-4">
        Grand Total: <span className="font-bold">${grandTotal.toFixed(2)}</span>
      </p>

      {cart.length > 0 && (
        <button
          className="bg-gradient-to-r from-gray-400 to-gray-200 border-[1px] py-2 px-4 rounded-2xl w-fit"
          onClick={() => {
            handleorder(cart);
          }}
        >
          Confirm order
        </button>
      )}

      {showOrderPopup && orderDetails && (
        <div className="fixed inset-0 z-20 flex items-center justify-center backdrop-blur-sm bg-black bg-opacity-40">
          <div className="bg-white p-6 rounded-xl shadow-xl w-[90%] max-w-md">
            <h2 className="text-xl font-bold mb-4 text-green-600">
              Order Placed Successfully!
            </h2>
            <p className="mb-2">
              <strong>Order ID:</strong> {orderDetails.OrderId}
            </p>
            <p className="mb-2">
              <strong>Status:</strong> {orderDetails.OrderStatus}
            </p>
            <p className="mb-2">
              <strong>Placed At:</strong>{" "}
              {new Date(orderDetails.createdAt).toLocaleString()}
            </p>
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Items:</h3>
              <ul className="list-disc list-inside">
                {orderDetails.OrderDetail.map((item, idx) => (
                  <li key={idx}>
                    {item.itemName} - {item.selectedColor} - £{item.price}
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => setShowOrderPopup(false)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div>
        <h2>Your Orders History</h2>
        {orders.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          orders.map((order) => (
            <div
              key={order._id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                marginBottom: "10px",
              }}
            >
              <h4>Order ID: {order.OrderId}</h4>
              <p>
                Status: <strong>{order.OrderStatus}</strong>
              </p>
              <p>Created At: {new Date(order.createdAt).toLocaleString()}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Cart;
