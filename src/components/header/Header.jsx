import React from "react";
import header from "../../assets/header.jpg";
import Darkfilter from "../darkFilter/Darkfilter";
const Header = () => {
  return (
    <div className="w-full overflow-hidden rounded-xl  mt-10 h-[70vh] container mx-auto relative">
      <img src={header} alt="" className="w-full h-full object-cover" />
      <Darkfilter />
      <div className="absolute bottom-10 left-8 p-4 animate-fade">
        <h2 className="text-white text-5xl font-bold tracking-wide">
          UEFA Europe 2024
        </h2>
        <p className="text-white tracking-wide mt-4 max-w-4xl">
          The 2024 UEFA European Football Championship, commonly referred to as
          UEFA Euro 2024 (stylised as UEFA EURO 2024) or simply Euro 2024, will
          be the 17th edition of the UEFA European Championship
        </p>
      </div>
    </div>
  );
};

export default Header;
