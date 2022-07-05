import React from 'react';
import { FaHammer } from 'react-icons/fa';
import { FaUserTie } from 'react-icons/fa';
import { FaRegEdit } from 'react-icons/fa';

const Business = () => {
    return (
      
    <div className='bg-gray-200 py-16 px-8'>
      <h1 className="uppercase text-center text-primary font-bold text-4xl pb-8">
          {" "}
          Summary of bussiness
        </h1>
  <div data-aos="fade-up-right" class="stats shadow grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3   ">

  <div class="stat">
    <div class="stat-figure text-secondary">
    </div>
    <div data-aos="zoom-in" class="stat-value justify-center"><FaHammer/></div>
    <div class="stat-value text-green-600">31K</div>
    <div class="stat-desc text-secondary">Tech Appliences parts</div>
  </div>
  
  <div class="stat">
    <div class="stat-figure text-secondary">
    </div>
    <div data-aos="zoom-in" class="stat-value justify-center"><FaUserTie/></div>
    <div class="stat-value text-orange-500">1,200</div>
    <div class="stat-desc text-secondary">Employee</div>
  </div>
  
  <div class="stat">
    <div class="stat-figure text-secondary">
    </div>
    <div data-aos="zoom-in" class="stat-value"><FaRegEdit/></div>
    <div class="stat-value text-blue-600">500+</div>
    <div class="stat-desc text-secondary">Projects</div>
  </div>
  
</div>
    </div>
    );
};

export default Business;