import React, { useEffect, useState } from "react";

const AllOrderLists = (props) => {
  const { _id, name, email, phone } = props.user;

  const [users, setUsers] = useState([]);
  console.log(users);
  useEffect(() => {
    fetch("https://grisly-alien-01596.herokuapp.com/allusers")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleDelete = (id) => {
    const procced = window.confirm("Are you sure you want to delete?");
    if (procced) {
      const url = `https://grisly-alien-01596.herokuapp.com/allusers/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("reload the page to see");
            // const remaining = users.filter((user) => user._id !== id);
            // setUsers(remaining);
          }
        });
    }
  };

  return (
    <div>
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          {/* <thead className="bg-gray-50"> */}
          <tbody className="bg-white divide-y divide-gray-200">
            <tr className="text-center">
              <td className="lg:px-6 py-4 whitespace-nowrap w-2/4">
                <div className="flex items-center">
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      {name}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{email}</div>
              </td>

              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {_id}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {phone}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <button
                  onClick={() => handleDelete(_id)}
                  className="bg-red-600 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
          {/* </thead> */}
        </table>
      </div>
    </div>
  );
};

export default AllOrderLists;
