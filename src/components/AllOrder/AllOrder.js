import React, { useEffect, useState } from "react";
import AllOrderLists from "./AllOrderLists/AllOrderLists";
// import AllOrderList from "./AllOrderList";

const AllOrder = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allorders")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h2>This is order</h2>
      <div className="my-2 overflow-x-auto sm:mx-6 lg:mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    {" "}
                    {users.map((user) => (
                      <AllOrderLists key={user._id} user={user}></AllOrderLists>
                    ))}
                  </tr>
                </tbody>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllOrder;
