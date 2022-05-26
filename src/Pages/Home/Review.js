import React from "react";

const Review = ({ review }) => {
  const {description, ratings } = review;
  return (
    <div>
      <div style={{border:"2px solid orange"}} class="card lg:card-side bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">{}</h2>
          <p>Ratings: {ratings}</p>
          <p>Description: {description}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
