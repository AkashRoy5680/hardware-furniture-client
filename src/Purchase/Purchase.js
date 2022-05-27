import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../Firebase/Firebase.init";
import Loading from "../Shared/Loading";

const Purchase = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
  } = useForm();
  const { id } = useParams();
  const [purchase, setPurchase] = useState({});
  const [user, loading] = useAuthState(auth);
  useEffect(() => {
    const url = `http://localhost:5000/service/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPurchase(data));
  }, [id]);

  const onSubmit = async (data) => {
    console.log(data);

    const order = {
      userName: user.displayName,
      userEmail: user.email,
      orderName: purchase.name,
      orderDescription: purchase.description,
      minQuantity: purchase.min,
      availability: purchase.available,
      price: totalPrice,
      phone: data.phone,
    };
    console.log(order);
    reset();

    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast("Your Order is Booked");
        }
      });
  };

  const availability = watch("availability");
  const totalPrice = availability * purchase.price;

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div class="hero h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-control">
                <label class="label">
                <span class="label-text">UserName</span>
                </label>
                  <input
                    type="text"
                    placeholder="UserName"
                    class="input input-bordered"
                    {...register("username")}
                    value={user.displayName}
                  />
                </div>
                <div class="form-control">
                <label class="label">
                <span class="label-text">Email</span>
                </label>
                  <input
                    type="email"
                    placeholder="Email"
                    class="input input-bordered"
                    {...register("email")}
                    value={user?.email}
                    readOnly
                  />
                </div>

                <div class="form-control">
                <label class="label">
                <span class="label-text">Product Name</span>
                </label>
                  <input
                    type="text"
                    placeholder="Name"
                    class="input input-bordered"
                    {...register("name")}
                    value={purchase.name}
                    disabled
                  />
                </div>

                <div class="form-control">
                <label class="label">
                <span class="label-text">Availability</span>
                </label>
                  <input
                    type="number"
                    placeholder={`${purchase.available}`}
                    class="input input-bordered"
                    {...register("availability", {
                      min: purchase.min,
                      max: purchase.available,
                    })}
                  />
                </div>
                <div class="form-control">
                <label class="label">
                <span class="label-text">Price</span>
                </label>
                  <input
                    type="number"
                    placeholder="Total Price"
                    class="input input-bordered"
                    {...register("price")}
                    value={totalPrice}
                    readOnly
                  />
                </div>

                <div class="form-control">
                  <button class="btn btn-primary text-white mt-2">Order</button>
                </div>
              </form>
            </div>
          </div>
          <div class="text-center lg:text-left">
          <img style={{height:"200px",width:"400px"}} src={purchase.img} alt="" />
            <p class="py-3">
            <h2 className="text-center font-bold">{purchase.name}</h2>
            <p className="text-center">Minimum Quantity: {purchase.min}</p>
            <p className="text-center">Available Item: {purchase.available}</p>
            <p className="text-center">Unit Price: {purchase.price}</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
