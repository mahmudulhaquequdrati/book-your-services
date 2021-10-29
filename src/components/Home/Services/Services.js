import React, { useEffect, useState } from "react";
import SingleService from "../SingleService/SingleService";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-2 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-4xl text-center  tracking-tight text-gray-900 font-bold">
            LONDON <span className="text-red-400">TOP</span> TOURS
          </h2>
          <p className="text-center text-2xl mt-3 text-gray-600">
            book your service today to explore london
          </p>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-4">
            {services.map((service) => (
              <SingleService
                key={service.key}
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
