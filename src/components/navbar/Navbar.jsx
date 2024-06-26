import React from "react";
import logo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <div className="shadow-lg flex items-center justify-between w-full h-full py-8 px-6">
      <img src={logo} alt="" className="w-24" />
      <h1 className="text-4xl text-slate-700 text-center font-bold">
        UEFA Europe 2024
      </h1>
      <div className="flex  gap-5   tracking-wide font-semibold">
        <h2 className="cursor-pointer hover:bg-blue-500 duration-300 rounded hover:text-white p-3">
          Matches
        </h2>
        <h2 className="cursor-pointer hover:bg-blue-500 duration-300 rounded hover:text-white p-3">
          Teams
        </h2>
        <h2 className="cursor-pointer hover:bg-blue-500 duration-300 rounded hover:text-white p-3">
          Players
        </h2>
      </div>
    </div>
  );
};

export default Navbar;
