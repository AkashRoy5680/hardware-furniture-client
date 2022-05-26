import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import auth from "../Firebase/Firebase.init";

const Purchase = () => {
  const { register,handleSubmit,reset } = useForm();
  const { id } = useParams();
  const [purchase, setPurchase] = useState({});
  const [user] = useAuthState(auth);
  useEffect(() => {
    const url = `http://localhost:5000/service/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPurchase(data));
  }, [id]);

  const onSubmit = async(data) => {console.log(data)
    reset();
};

  return (
    <div>
  <div class="hero h-screen bg-base-200">
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
          <div class="form-control mb-2">
              <input
                type="text"
                placeholder="UserName"
                class="input input-bordered"
                {...register("username")}
                value={user.displayName}
              /> 
            </div>
            <div class="form-control mb-2">
              <input
                type="email"
                placeholder="Email"
                class="input input-bordered"
                {...register("email")}
                value={user.email}
                disabled
              /> 
            </div>
            <div class="form-control mb-2">
              <textarea
                type="text"
                placeholder="Description"
                class="input input-bordered"
                {...register("description")}
                value={purchase.description}
                disabled
              /> 
            </div>
            <div class="form-control mb-2">
              <input
                type="number"
                placeholder="Min. Order"
                class="input input-bordered"
                {...register("minorder")}
              /> 
            </div>
            <div class="form-control mb-2">
              <input
                type="number"
                placeholder="Max. Order"
                class="input input-bordered"
                {...register("availability")}
              /> 
            </div>
            <div class="form-control mb-2">
              <input
                type="number"
                placeholder="Quantity"
                class="input input-bordered"
                {...register("quantity")}
              /> 
            </div>
            <div class="form-control mb-2">
              <input
                type="number"
                placeholder="Total Price"
                class="input input-bordered"
                {...register("price")}
              /> 
            </div>
            <div class="form-control mb-2">
              <input
                type="number"
                placeholder="Phone No."
                class="input input-bordered"
                {...register("phone")}
              /> 
            </div>
          
            <div class="form-control mt-2">
              <button class="btn btn-primary text-white">Order</button>
            </div>
          
          </form>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
