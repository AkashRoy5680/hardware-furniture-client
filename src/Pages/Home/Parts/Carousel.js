import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { useNavigate } from "react-router-dom";
import hardware from "../Parts/hardware.jpg";


const Carousel = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{ backgroundImage: `url(${hardware})` }}
      className={`bg-center bg-cover bg-no-repeat h-full md:h-screen bg-blend-darken `}
    >
     
      <div className="h-[68vh] flex flex-col gap-5 justify-center items-center">
        <h1 className="text-4xl md:text-6xl text-center font-semibold text-neutral font-koulen uppercase">
          Best Online Tools <br /> Hardware Menufecturer
        </h1>
        <button
          className="text-accent uppercase bg-yellow-400  py-2 px-8  rounded-md font-bold flex justify-between items-center"
          onClick={() => navigate("/all-products")}
        >
          Explore Our Tools
          <ArrowRightIcon className="h-6 w-6 ml-3 "></ArrowRightIcon>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
