import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L1LltCEg6UekNPEfJLameF1ypM1r5CQmxPIGxBOLz7Zbrjir7qugab9yhSfQM21I7KTGkvW01qqBYSvBBQx9SBw00SIvAh7nw"
);

const Payment = () => {
  const { orderid } = useParams();
  const url = `https://secure-beach-13890.herokuapp.com/order/${orderid}`;
  const { data: order, isLoading } = useQuery(["order", orderid], () =>
    fetch(url, {}).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div class="card-body">
          <p className="text-primary font-bold">Hello, {order.userName}</p>
          <h2 class="card-title">
            please pay for{" "}
            <span className="text-secondary">
              {order.orderName} €{order.price}
            </span>
          </h2>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
