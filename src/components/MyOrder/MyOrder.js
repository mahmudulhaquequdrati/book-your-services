import React from "react";

const MyOrder = (props) => {
  const { _id, info } = props.userInfo;
  console.log(_id, info);
  const des = info.description;
  const newDes = des.slice(0, 80);

  const handleDelete = (id) => {
    const procced = window.confirm("are you sure you want to delete?");
    if (procced) {
      const url = `http://localhost:5000/allusers/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("reload the page to see");
          }
        });
    }
  };

  return (
    <div className="border overflow-hidden rounded">
      <img src={info.img} alt="" />
      <div className="p-4">
        <div className="flex font-bold justify-between">
          <p>{info.name}</p>
          <p>${info.price}</p>
        </div>
        <p>{newDes}</p>
      </div>
      <button
        onClick={() => handleDelete(_id)}
        className="ml-4 mb-4 py-2 px-4 rounded-md text-white bg-red-500"
      >
        Delete
      </button>
    </div>
  );
};

export default MyOrder;
