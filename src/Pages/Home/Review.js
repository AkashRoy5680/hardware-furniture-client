import React from "react";

const Review = ({ review }) => {
  const {description, ratings } = review;
  return (
    <div>
      <div  class="card lg:card-side bg-base-100 shadow-2xl">
        <div class="card-body">
          <h2 class="card-title">{}</h2>
          <p><span className="font-bold text-accent">Ratings:</span> {ratings}</p>
          <p><span className="font-bold text-accent">Description</span>: {description}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
