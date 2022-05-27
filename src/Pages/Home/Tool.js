import React from "react";
import { useNavigate } from "react-router-dom";

  const Tool = ({ tool }) => {
  const { _id, name, img, price, available } = tool;
  const navigate = useNavigate();

  const redirectPurchase = (id) => {
    navigate(`/purchase/${id}`);
  };

  return (
    <div>
      <div class="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Album" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p>Price: {price}</p>
          <p>Availability: {available}</p>
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
