import React from "react";

const WhatweMake = () => {
  return (
    <div className="bg-neutral  ">
      <div className="flex items-center justify-center pt-10 pb-4">
        <h1 className="text-3xl text-center uppercase text-orange-400 font-semibold">
          {" "}
          What we Menufectures
        </h1>
      </div>
      <div className="flex justify-center items-center gap-2">
        <span className=" h-1 bg-gray-400 rounded-full w-20"></span>
        <span className=" h-1 bg-primary rounded-full w-28"></span>
        <span className="h-1 bg-gray-400 rounded-full w-20"></span>
      </div>
      <div className="grid container mt-3 grid-cols-1 md:grid-cols-2  gap-10 justify-center lg:grid-cols-3 pt-5 pb-16">
        <div className="text-center">
          <h2 className="text-2xl text-gray-400 mb-3 font-semibold uppercase">
            Appliances Hardware Tools
          </h2>
          <p className=" text-gray-400 font-thin">
            We are best in the market to Menufectures appliance hardware tools. The best part of us is our customer bealive us and We provide best of
            quality Home hardware Tools.
          </p>
        </div>
        <div className="text-center">
          <h2 className="text-2xl text-gray-400 mb-3 font-semibold uppercase">
            Industrial Hardware Tools
          </h2>
          <p className=" text-gray-400 font-thin">
            The industry expert are recommend our hardware tools. They
            know we are best in the market and we also know we have more and
            more quality and design.
          </p>
        </div>
        <div className="text-center ">
          <h2 className="text-2xl text-gray-400 mb-3 font-semibold uppercase">
            Shipping Hardware Tools
          </h2>
          <p className=" text-gray-400 font-thin">
            We love customer satisfication. When it is about manufacturing we just thinking about the flexibility.Customer concern our one of the main priority. Experts are also recommend our hardware Tools and Other Tools.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatweMake;
