import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className=" bg-cover bg-no-repeat bg-opacity-50 custom-background">
      <div className=" custom-font text-center w-3/4 py-60 m-auto rounded">
        <div className="text-white">
          <h2 className="text-5xl pb-4 font-bold">
            GOING INSIDE <br /> THE LOUVRE MUSEUM
          </h2>
          <p className="font-normal text-lg mb-2">
            When hanging your hammock between two trees, be sure the trees are
            sturdy and mature
          </p>
        </div>
        <button className=" py-3 px-5 mt-2 rounded-3xl bg-red-100">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Banner;
