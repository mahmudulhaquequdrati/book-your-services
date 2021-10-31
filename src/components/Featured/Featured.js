import React from "react";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured bg-cover mx-6 mb-6 text-2xl font-bold px-12 py-24 rounded-lg">
      <h2>
        YOUR PERFECT <br /> TOUR EXPERIENCE
      </h2>
      <p className="text-lg font-normal">Activities and accommodations</p>
      <a href="#srv">
        <button className="text-sm font-medium  bg-red-400 py-2 px-4 mt-3 mb-6 rounded text-white">
          Book Today
        </button>
      </a>
    </div>
  );
};

export default Featured;
