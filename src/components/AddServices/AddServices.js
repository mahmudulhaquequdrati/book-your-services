import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddServices.css";

const AddServices = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios.post("http://localhost:5000/services", data).then((res) => {
      if (res.data.insertedId) {
        alert("succesfully service added");
        reset();
      }
    });
  };

  return (
    <div className="flex justify-center">
      <div className="border p-12 m-12 shadow-lg">
        <h2 className="text-center text-2xl font-bold my-6 text-red-500">
          Please add a service
        </h2>
        <div className="flex justify-center">
          <form className="service-form w-72" onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="name"
              className="border"
              {...register("name", { required: true })}
            />
            <textarea
              placeholder="description"
              className="border"
              {...register("description")}
            />
            <input
              placeholder="price"
              className="border"
              type="number"
              {...register("price")}
            />
            <input
              placeholder="photo-url"
              className="border"
              {...register("img")}
            />
            <input type="submit" className="cursor-pointer" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddServices;
