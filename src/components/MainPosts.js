import React from "react";
import { CardOne } from "./Cards/CardOne";
import { CardTwo } from "./Cards/CardTwo";
import { Slider } from "./Cards/Slider";

export const MainPosts = () => {
  return (
    <div className="flex flex-col md:flex-row mx-2 md:mx-7">
      <div className="w-full md:w-1/4 p-2 md:p-4">
        <CardOne />
      </div>
      <div className="w-full md:w-1/4 p-2 md:p-4">
        <CardTwo />
      </div>
      <div className="w-full md:w-1/2 p-2 md:p-4">
        <Slider/>
      </div>
    </div>
  );
};
