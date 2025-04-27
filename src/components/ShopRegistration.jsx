import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const ShopRegistration = ({ addShop }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log("Registered Shop:", data);
      await axios.post('https://jsonplaceholder.typicode.com/posts', data);  // mock API call

      // Add the new shop to the list
      addShop(data);  // Add to App's state

      alert("Shop registered successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Error occurred while registering the shop.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Shop Registration</h2>
        <form onSubmit={handleSubmit(onSubmit)}>

          <input {...register("shopName", { required: true })} placeholder="Shop Name" className="inputStyle" />
          {errors.shopName && <p className="errorText">Shop Name is required</p>}

          <input {...register("ownerName", { required: true })} placeholder="Owner Name" className="inputStyle" />
          {errors.ownerName && <p className="errorText">Owner Name is required</p>}

          <input {...register("email", { required: true })} placeholder="Email Address" className="inputStyle" />
          {errors.email && <p className="errorText">Email Address is required</p>}

          <input {...register("contact", { required: true })} placeholder="Contact Number" className="inputStyle" />
          {errors.contact && <p className="errorText">Contact Number is required</p>}

          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 mt-4 rounded">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default ShopRegistration;
