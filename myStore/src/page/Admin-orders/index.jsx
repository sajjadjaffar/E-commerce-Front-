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
      {orders.map((order) => (
        <div
          key={order._id}
          style={{ border: "1px solid black", margin: "10px", padding: "10px" }}
        >
          <h3>Order ID: {order.OrderId}</h3>

          <label>Status: </label>
          <select
            value={editedStatuses[order._id] || order.OrderStatus}
            onChange={(e) => handleStatusChange(order._id, e.target.value)}
          >
            <option value="pending">Pending</option>
            <option value="cancel">Cancel</option>
            <option value="accepted">Accepted</option>
            <option value="delivered">Delivered</option>
          </select>

          <button
            onClick={() => handleSaveStatus(order._id)}
            style={{ marginLeft: "10px" }}
          >
            Save
          </button>

          <p>Created At: {new Date(order.createdAt).toLocaleString()}</p>
          <p>User ID: {order.userId}</p>

          <h4>Items:</h4>
          <ul>
            {order.OrderDetail.map((item) => (
              <li key={item._id}>
                {item.itemName} - ${item.price} - Color: {item.selectedColor} -
                Qty: {item.quantity}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default OrdersPage;
