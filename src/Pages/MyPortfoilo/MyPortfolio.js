import React from "react";
import DP from "../MyPortfoilo/DP.JPEG";

const MyPortfolio = () => {
  return (
    <div>
      <h2 className="text-2xl text-accent font-bold mb-3">My Portfolio</h2>
      {/* <p> <span className='text-secondary font-bold'> Name</span>: Akash Saha</p>
            <p><span className='text-secondary font-bold'>Email</span>: royakash1272@gmail.com</p>
            <p><span className='text-secondary font-bold'>Educational Background</span>: Masters in Information Technology</p>
            <p><span className='text-secondary font-bold'>Skills</span>: HTML5,CSS3,REACT JS,Tailwind CSS,Firebase,MongoDB,Node JS,
            Github
            </p>
            <p><span className='text-secondary font-bold'>Website Links: </span>
           <br/> <a href="https://furniture-hub-client.netlify.app/">https://furniture-hub-client.netlify.app/</a>
           <br/> <a href="https://independent-service-supplier.netlify.app/">https://independent-service-supplier.netlify.app/</a>
           <br/> <a href="https://gadget-router-assignment-9.netlify.app/">https://gadget-router-assignment-9.netlify.app/</a>
    </p>*/}

      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <img style={{height:"250px"}} src={DP} alt=""
            class="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <p class="py-6">
            <p> <span className='text-secondary font-bold'> Name</span>: Akash Saha</p>
            <p><span className='text-secondary font-bold'>Email</span>: royakash1272@gmail.com</p>
            <p><span className='text-secondary font-bold'>Educational Background</span>: Masters in Information Technology</p>
            <p><span className='text-secondary font-bold'>Skills</span>: HTML5,CSS3,REACT JS,Tailwind CSS,Firebase,MongoDB,Node JS,
            Github
            </p>
            <p><span className='text-secondary font-bold'>Website Links: </span>
           <br/> <a href="https://furniture-hub-client.netlify.app/">https://furniture-hub-client.netlify.app/</a>
           <br/> <a href="https://independent-service-supplier.netlify.app/">https://independent-service-supplier.netlify.app/</a>
           <br/> <a href="https://gadget-router-assignment-9.netlify.app/">https://gadget-router-assignment-9.netlify.app/</a>
    </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
