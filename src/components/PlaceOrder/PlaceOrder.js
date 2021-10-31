import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { RadioGroup } from "@headlessui/react";
// import { Link } from "react-router-dom";
import "./PlaceOrder.css";
import axios from "axios";

const product = {
  packs: [
    { name: "One Night", inStock: true },
    { name: "Day Night", inStock: true },
    { name: "One Day", inStock: true },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const PlaceOrder = () => {
  const { id } = useParams();
  const [service, setService] = useState({});

  const { _id, name, description, price, img } = service;

  const info = {
    name: name,
    price: price,
    img: img,
    description: description,
  };

  useEffect(() => {
    fetch(`http://localhost:5000/services/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  const handleDelete = (id) => {
    const procced = window.confirm("are you sure you want to delete?");
    if (procced) {
      const url = `http://localhost:5000/services/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("reload the page to see");
            //  setService(data)
          }
        });
    }
  };

  const [selectedSize, setSelectedSize] = useState(product.packs[0]);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data.info = info;
    axios.post("http://localhost:5000/users", data).then((res) => {
      if (res.data.insertedId) {
        alert("succesfully order completed");
        reset();
      }
    });
  };

  return (
    <div>
      <div className="bg-white">
        <div className="">
          {/* Image */}
          <div className="lg:px-0 md:px-2  mx-auto sm:px-2  ">
            <img
              className=" lg:w-screen sm:w-3/4 md:w-10/12 mx-auto"
              src={service.img}
              alt=""
            />
          </div>

          {/* Product info */}
          <div className="max-w-2xl mx-auto pt-4 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-12 lg:pb-16 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 ">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:px-12"></div>

            {/* Options */}
            <div className="mt-4 lg:mt-0 lg:row-span-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl sm:text-center md:text-center lg:text-left text-gray-900">
                ${service.price}
              </p>

              <form className="mt-10">
                {/* Sizes */}
                <div className="mt-10">
                  <div className="">
                    <h3 className="text-sm lg:text-left md:text-center sm:text-center text-gray-900 font-medium">
                      Size
                    </h3>
                    {/* / */}
                  </div>

                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="mt-4"
                  >
                    <RadioGroup.Label className="sr-only">
                      Choose a pack
                    </RadioGroup.Label>
                    <div className="grid grid-cols-3 gap-4 sm:grid-cols-3 lg:grid-cols-3">
                      {product.packs.map((pack) => (
                        <RadioGroup.Option
                          key={pack.name}
                          value={pack}
                          disabled={!pack.inStock}
                          className={({ active }) =>
                            classNames(
                              pack.inStock
                                ? "bg-white shadow-sm text-gray-900 cursor-pointer"
                                : "bg-gray-50 text-gray-200 cursor-not-allowed",
                              active ? "ring-2 ring-indigo-500" : "",
                              "group relative border rounded-md py-3 pl-2 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:pl-2"
                            )
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <RadioGroup.Label as="p">
                                {pack.name}
                              </RadioGroup.Label>
                              {pack.inStock ? (
                                <div
                                  className={classNames(
                                    active ? "border" : "border-2",
                                    checked
                                      ? "border-indigo-500"
                                      : "border-transparent",
                                    "absolute -inset-px rounded-md pointer-events-none"
                                  )}
                                  aria-hidden="true"
                                />
                              ) : (
                                <div
                                  aria-hidden="true"
                                  className="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none"
                                >
                                  <svg
                                    className="absolute inset-0 w-full h-full text-gray-200 stroke-2"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="none"
                                    stroke="currentColor"
                                  >
                                    <line
                                      x1={0}
                                      y1={100}
                                      x2={100}
                                      y2={0}
                                      vectorEffect="non-scaling-stroke"
                                    />
                                  </svg>
                                </div>
                              )}
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              </form>
              <div>
                <form
                  className="place-form py-4 px-2"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <input
                    placeholder="name"
                    className="border block w-full h-10 pl-2"
                    {...register("name")}
                  />
                  <input
                    type="email"
                    placeholder="email"
                    className="border block w-full h-10 pl-2"
                    {...register("email")}
                  />
                  <input
                    placeholder="number"
                    className="border block w-full h-10 pl-2"
                    type="number"
                    {...register("phone")}
                  />

                  <input
                    type="submit"
                    className="mt-4 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  />
                </form>
              </div>
            </div>

            <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:px-12">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">info</h3>
                <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl pb-4">
                  {service.name}
                </h1>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {service.description}
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleDelete(_id)}
                className="text-2xl font-bold mt-8 mx-2 bg-red-500 text-white py-2 px-4 rounded"
              >
                Delete this service
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
