import axios from "axios";
import React, { useEffect, useState } from "react";

function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [editedStatuses, setEditedStatuses] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:3001/orders")
      .then((result) => {
        setOrders(result.data);
        const initialStatuses = {};
        result.data.forEach((order) => {
          initialStatuses[order._id] = order.OrderStatus;
        });
        setEditedStatuses(initialStatuses);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleStatusChange = (orderId, newStatus) => {
    setEditedStatuses((prev) => ({
      ...prev,
      [orderId]: newStatus,
    }));
  };

  const handleSaveStatus = (orderId) => {
    const newStatus = editedStatuses[orderId];
    axios
      .put(`http://localhost:3001/orders/${orderId}`, {
        OrderStatus: newStatus,
      })
      .then(() => {
        console.log(`Order ${orderId} updated to ${newStatus}`);

        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order._id === orderId ? { ...order, OrderStatus: newStatus } : order
          )
        );
      })
      .catch((err) => {
        console.error("Failed to update status:", err);
      });
  };

  return (
    <div>
      {orders.length === 0 ? (
        <div>
          <p>No Orders</p>
        </div>
      ) : null}

      {orders.map((order) => (
        <div key={order._id} className="border-[1px] p-3 m-3">
          <h3>Order ID: {order.OrderId}</h3>
          <div className="border-b-[1px] border-gray-500 "></div>

          <p>Created At: {new Date(order.createdAt).toLocaleString()}</p>
          <div className="border-b-[1px] border-gray-500 "></div>

          <p>User ID: {order.userId}</p>
          <div className="border-b-[1px] border-gray-500 "></div>

          <h4>Items:</h4>
          <div className="border-b-[1px] border-gray-500 "></div>

          <ul>
            {order.OrderDetail.map((item) => (
              <li key={item._id}>
                {item.itemName} - ${item.price} - Color: {item.selectedColor} -
                Qty: {item.quantity}
              </li>
            ))}
          </ul>
          <div className="flex gap-2 justify-end items-center">
            {" "}
            <label>Status: </label>
            <select
              value={editedStatuses[order._id] || order.OrderStatus}
              onChange={(e) => handleStatusChange(order._id, e.target.value)}
              className="border-[1px] py-2 px-4 rounded-lg w-fit min-w-[150px] flex justify-center items-center"
            >
              <option value="pending">Pending</option>
              <option value="cancel">Cancel</option>
              <option value="accepted">Accepted</option>
              <option value="delivered">Delivered</option>
            </select>
            <button
              onClick={() => handleSaveStatus(order._id)}
              className="bg-linear-to-r from-gray-400 to-gray-200 border-[1px] py-2 px-4 rounded-2xl w-fit min-w-[150px]"
            >
              Save
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OrdersPage;
