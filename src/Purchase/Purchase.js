import React from "react";
import { useParams } from "react-router-dom";
import usePurchase from "../hooks/usePurchase";

const Purchase = () => {
  const { id } = useParams();
  const [purchase, setPurchase] = usePurchase();
  return (
    <div>
      <div class="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={purchase.img} alt="Album" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{purchase.name}</h2>
          <p>ID: {id}</p>
          <p>Price: {purchase.price}</p>
          <p>Quantity: {purchase.quantity}</p>
          
        </div>
      </div>
    </div>
  );
};

export default Purchase;
