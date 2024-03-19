import React from "react";
import { NavLink } from "react-router-dom";
export const CardTwo = () => {
  return (
    <NavLink to="/single">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuWbLYXjT9OjGIUue2MU_xzrRhpU2uRMnWvmcYNET7dA&s"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, .
          </p>
        </div>
      </div>
    </NavLink>
  );
};
