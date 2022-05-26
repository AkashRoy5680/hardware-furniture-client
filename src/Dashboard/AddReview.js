import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddReview = () => {
    const { register,handleSubmit,reset } = useForm();
    const onSubmit = async(data) => {
        console.log(data);
        reset();
    
        //send data to server
        const url = `http://localhost:5000/review`;
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
            if (result.insertedId) {
              console.log("inserted id:", result.insertedId);
              toast("Your Item is added !");
            }
          })
}
    return (
        <div>
        <div class="hero h-screen bg-base-200">
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control">
                <label class="label">
                  <span class="label-text">Ratings</span>
                </label>
                <input
                  type="number"
                  placeholder="ratings"
                  class="input input-bordered"
                  {...register("rating")}
                /> 
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Description</span>
                </label>
                <textarea
                  type="number"
                  placeholder="Description"
                  class="input input-bordered"
                  {...register("description")}
                /> 
              </div>
              <div class="form-control mt-5">
              <button class="btn btn-accent text-white">Feedback</button>
            </div>
            </form>
            
            </div>
          </div>
        </div>
      </div>
    );
};

export default AddReview;