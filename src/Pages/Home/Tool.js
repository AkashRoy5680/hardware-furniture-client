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
      <div class="card lg:card-side bg-white shadow-xl ">
        <figure>
          <img className="w-full   mb-2 p-4 " src={img} alt="Album" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p>Price: {price}</p>
          <p>Availability: {available}</p>
          <p>Minimum Order: {min}</p>
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
