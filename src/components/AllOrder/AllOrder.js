import React, { useEffect, useState } from "react";
import AllOrderLists from "./AllOrderLists/AllOrderLists";

const AllOrder = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://grisly-alien-01596.herokuapp.com/allusers")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h2 className="text-center text-white text-3xl font-bold bg-blue-500 rounded w-1/4 mx-auto py-4">
        All Users
      </h2>
      <div className="my-2 overflow-x-auto sm:mx-6 lg:mx-8 lg:h-screen">
        <div className="py-2 align-middle inline-block min-w-full sm:w-3/4 lg:w-full sm:px-6 lg:px-8">
          {users.map((user) => (
            <AllOrderLists key={user._id} user={user}></AllOrderLists>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllOrder;
