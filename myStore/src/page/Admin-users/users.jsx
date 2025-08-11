import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleUserCreation = () => {
    navigate("/createuser");
  };
  const handleEdit = (user) => {
    navigate("/edituser");
    localStorage.setItem("editUserId", user.uniqueId);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/userdata")
      .then((result) => {
        setUsers(result.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Error fetching users");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;
  //   console.log(users);

  return (
    <div className="py-5 px-5 bg-gradient-to-l from-gray-300 to bg-gray-900">
      <div className="flex justify-end items-end pb-5">
        <button
          className="border-[2px] p-2 rounded-2xl hover:bg-gradient-to-r from-gray-200 to-gray-500 text-gray-900 cursor-pointer hover:text-lg"
          onClick={handleUserCreation}
        >
          Create User
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
        {users.length === 0 ? (
          <p>No users found.</p>
        ) : (
          users.map((user) => (
            <div
              key={user.uniqueId}
              className="grid grid-cols-1 md:grid-cols-3 border-[1px] rounded-2xl overflow-hidden relative  w-fit "
            >
              <div className="col-span-1 justify-items-center content-center  bg-gradient-to-r from-gray-100 to-gray-300 h-full w-full ">
                <div className="flex flex-col justify-center items-center gap-2 px-5 py-2">
                  <img
                    src={`http://localhost:3001/${user.image}`}
                    alt=""
                    className="w-30 h-30 overflow-hidden rounded-full"
                  />
                </div>
              </div>
              <div className="col-span-2 bg-gradient-to-r from-gray-300 to-gray-400 h-full">
                <div className="py-5 px-14 flex flex-col gap-2">
                  <p>
                    <strong>First Name:</strong> {user.firstName}
                  </p>{" "}
                  <div className="border-b-[1px]"></div>
                  <p>
                    <strong>Last Name:</strong> {user.lastName}
                  </p>
                  <div className="border-b-[1px]"></div>
                  <p>
                    <strong>Email:</strong> {user.email}
                  </p>
                  <div className="border-b-[1px]"></div>
                  <p>
                    <strong>Address:</strong> {user.address}
                  </p>
                  <div className="border-b-[1px]"></div>
                  <p>
                    <strong>Phone Number:</strong> {user.phoneNumber}
                  </p>
                  <div className="border-b-[1px]"></div>
                  <p>
                    <strong>Gender:</strong> {user.gender}
                  </p>
                  <div className="border-b-[1px]"></div>
                  <p>
                    <strong>Role:</strong> {user.role}
                  </p>
                  <div className="border-b-[1px]"></div>
                </div>
              </div>
              <div className="absolute right-3 top-2 flex gap-2">
                <button
                  className="cursor-pointer"
                  onClick={() => {
                    handleEdit(user);
                  }}
                >
                  <img
                    src="edit.svg"
                    alt=""
                    className="w-6 h-6 object-cover rounded-full overflow-hidden"
                  />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Users;
