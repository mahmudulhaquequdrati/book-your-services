import React, { useEffect, useState } from "react";
import MyOrder from "./MyOrder";

const Order = () => {
  const [usersinfo, setUsersInfo] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allusers")
      .then((res) => res.json())
      .then((data) => setUsersInfo(data));
  }, []);
  console.log(usersinfo);

  return (
    <div className="pb-24 h-screen ">
      <h2 className="text-2xl text-center font-extrabold tracking-tight text-gray-900">
        My Orders
      </h2>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4 m-8">
        {usersinfo.map((userInfo) => (
          <MyOrder key={userInfo._id} userInfo={userInfo}></MyOrder>
        ))}
      </div>
    </div>

    // </div>
  );
};

export default Order;
