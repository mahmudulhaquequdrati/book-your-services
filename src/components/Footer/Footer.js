import React from "react";

import img from "../../images/service-center.png";
import img1 from "../../images/email.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-400">
      <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-4 px-6 py-12 bg-gray-400">
        <div className="flex justify-center">
          <div>
            <h3 className="text-xl font-bold mb-2">Need Help?</h3>
            <div className="flex align-middle mb-2">
              <img width="32px" src={img} alt="" />
              <p className="pl-2">+09666374773</p>
            </div>
            <div className="flex align-middle">
              <img width="28px" src={img1} alt="" />
              <p className="pl-2"> contact@qudrati.com</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div>
            <h3 className="text-xl font-bold">Explore More</h3>
            <div>
              <Link to="/">Home</Link>
              <br />
              <Link to="/services">Services</Link>
              <br />
              <Link to="/about">About</Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div>
            <h3 className="text-xl font-bold">Subscribe Now </h3>
            <input
              className="border-0 rounded my-2 px-2"
              type="email"
              placeholder="email"
            />
            <br />
            <button className="bg-yellow-300 px-4 rounded py-1">Submit</button>
          </div>
        </div>
      </div>
      <hr className="w-3/4 bg-gray-900 mx-auto h-0.5 border-0" />
      <p className="text-center text-gray-900 py-3">© Qudrati 2021 </p>
    </div>
  );
};

export default Footer;
