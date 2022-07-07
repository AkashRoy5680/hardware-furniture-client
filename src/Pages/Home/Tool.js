import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";

  const Tool = ({ tool }) => {
  const [user] = useAuthState(auth);
  const { _id, name, img, price, available,min } = tool;
  const navigate = useNavigate();

  const redirectPurchase = (id) => {
    navigate(`/purchase/${id}`);
  };

  return (
    <div>
      <div class="card lg:card-side bg-white shadow-xl transform transition duration-500 scale-90 hover:scale-100   ">
        
        <div class="card-body">
        <figure>
          <img className="w-full  mb-2 font-semibold" src={img} alt="Album" />
        </figure>
          <h2 class="card-title">{name}</h2>
          <div>
          <p className="font-bold">Price: {price}</p>
          <p className="font-bold">Availability: {available}</p>
          <p className="font-bold">Minimum Order: {min}</p>
          </div>
          <div class="card-actions justify-end">
            <button
              onClick={() => redirectPurchase(_id)}
              class="btn btn-primary">Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tool;
