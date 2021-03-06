import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";

import SingleService from "../SingleService/SingleService";

const Services = () => {
  const { isLoading } = useAuth();
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://grisly-alien-01596.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div id="srv">
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-2 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-4xl text-center  tracking-tight text-gray-900 font-bold">
            LONDON <span className="text-red-400">TOP</span> TOURS
          </h2>
          <p className="text-center text-2xl mt-3 text-gray-600">
            book your service today to explore london
          </p>
          {isLoading && (
            <div className="w-12 mx-auto mt-2 -mb-24">
              <img
                alt=""
                class="animate-spin h-10 w-10 mr-3 border-4 border-red-400 mx-auto rounded-full"
                viewBox="0 0 24 24"
              />
            </div>
          )}
          <div className=" grid grid-cols-1 gap-y-10 gap-x-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-4 lg:mx-24 lg:my-12 ">
            {services.map((service) => (
              <SingleService
                key={service._id}
                service={service}
              ></SingleService>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
