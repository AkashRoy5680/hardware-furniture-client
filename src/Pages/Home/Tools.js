import React, { useEffect, useState } from "react";
import useParts from "../../hooks/useParts";
import Tool from "./Tool";

const Tools = () => {
  const [tools, setTools] = useParts();
  
  const newTools = tools.slice(0, 3);
  return (
    <div className="my-20">
      <div>
        <div class="text-center">
          <h3 class="text-primary text-xl font-bold uppercase ">
            Our Services
          </h3>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {newTools.map((tool) => (
          <Tool key={tool._id} tool={tool}></Tool>
        ))}
      </div>
    </div>
  );
};

export default Tools;
