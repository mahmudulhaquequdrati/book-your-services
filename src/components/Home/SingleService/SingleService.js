import React from "react";

const SingleService = (props) => {
  const { name, price, img } = props.service;

  //   const descriptions = description.slice(0, 40);

  return (
    <div className="group relative border  rounded shadow-lg">
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <img
          src={img}
          alt="img"
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <div className="mt-4 flex justify-between px-6 py-3">
        <div>
          <h3 className="text-xl text-gray-700">
            <span aria-hidden="true" className="absolute inset-0" />
            {name}
          </h3>
          <p className="mt-1 text-md text-gray-700">$ {price}</p>
        </div>
        <button className="text-sm font-medium  bg-blue-700 py-2 px-4 mt-3 mb-6 rounded text-white">
          Book Now
        </button>
      </div>
      {/* <button className="flex bg-blue-700 py-2 px-4 mt-3 mb-6 rounded text-white mx-auto">
        Book Now
      </button> */}
    </div>
  );
};

export default SingleService;
