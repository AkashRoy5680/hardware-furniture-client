import { ArrowCircleRightIcon } from "@heroicons/react/solid";
import React from "react";
import useParts from "../../hooks/useParts";
import Tool from "./Tool";

const AllProducts = () => {
  const [tools, setTools] = useParts();
  return (
    <div className="bg-neutral p-8">
      <div>
        <div class="text-center">
        <h1 className="text-4xl text-center text-accent mb-5 uppercase font-bold pt-8">
          Recenlty Menufectured
        </h1>
        <div className="flex justify-center items-center gap-2 mb-10">
          {/* <span className=" h-1 bg-accent rounded-full w-20"></span> */}
          <span className=" h-1 bg-primary rounded-full w-28"></span>
          {/* <span className="h-1 bg-accent rounded-full w-20"></span> */}
        </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center py-6 px-6 ">
        {tools.map((tool) => (
          <Tool key={tool._id} tool={tool}></Tool>
        ))}
      </div>
      <button className="btn btn-primary btn-md mx-auto flex items-center mt-5" >
          Explore All Painting Tools
          <ArrowCircleRightIcon className="h-8 w-8 ml-3" />
        </button>
    </div>
  );
};

export default AllProducts;
