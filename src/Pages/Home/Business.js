import React from 'react';

const Business = () => {
    return (
      
    <div>
      <h2 className='text-2xl text-primary font-bold m-5'>Business Summary</h2>
     <div class="stats shadow">
  <div class="stat place-items-center">
    <div class="stat-title">Downloads</div>
    <div class="stat-value text-primary">31K</div>
    <div class="stat-desc">From January 1st to February 1st</div>
  </div>
  
  <div class="stat place-items-center">
    <div class="stat-title">Users</div>
    <div class="stat-value text-secondary">4,200</div>
    <div class="stat-desc text-secondary">↗︎ 40 (2%)</div>
  </div>
  
  <div class="stat place-items-center">
    <div class="stat-title">New Registers</div>
    <div class="stat-value text-accent">1,200</div>
    <div class="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>
    </div>
    );
};

export default Business;