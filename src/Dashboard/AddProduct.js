import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
      } = useForm();

      const onSubmit = async (data) => {
        console.log(data);
         //send data to server
         const url = `http://localhost:5000/product`;
         fetch(url, {
           method: "POST",
           headers: {
             "content-Type": "application/json",
           },
           body: JSON.stringify(data),
         })
           .then((res) => res.json())
           .then((result) => {
             console.log("Data is", result);
        reset();
             if (result.insertedId) {
               console.log("inserted id:", result.insertedId);
               toast("Your Item is added !");
             }
           })
    }
    return (
        <div>
            <h2>Add a new Product !!!</h2>
      <div class="hero h-screen bg-base-200">
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-control">
                <label class="label">
                <span class="label-text">ProductName</span>
                </label>
                  <input
                    type="text"
                    placeholder="UserName"
                    class="input input-bordered"
                    {...register("productname")}
                  />
                </div>
                <div class="form-control">
                <label class="label">
                <span class="label-text">Product Price</span>
                </label>
                  <input
                    type="number"
                    placeholder="Price"
                    class="input input-bordered"
                    {...register("price")}
                  />
                </div>

                <div class="form-control">
                <label class="label">
                <span class="label-text">Description</span>
                </label>
                  <textarea
                    type="text"
                    placeholder="Description"
                    class="input input-bordered"
                    {...register("description")}
                  />
                </div>

                <div class="form-control">
                <label class="label">
                <span class="label-text">Product Image</span>
                </label>
                  <input
                    type="text"
                    placeholder="Product Image"
                    class="input input-bordered"
                    {...register("img")}
                  />
                </div>

                
                <div class="form-control">
                <label class="label">
                <span class="label-text">Minimum Order</span>
                </label>
                  <input
                    type="text"
                    placeholder="Minimum Order"
                    class="input input-bordered"
                    {...register("min")}
                  />
                </div>

                
                <div class="form-control">
                <label class="label">
                <span class="label-text">Product Available</span>
                </label>
                  <input
                    type="text"
                    placeholder="Product Available"
                    class="input input-bordered"
                    {...register("available")}
                  />
                </div>

                <div class="form-control">
                  <button class="btn btn-primary text-white mt-2">Add Product</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AddProduct;