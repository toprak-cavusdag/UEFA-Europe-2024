import React from "react";
import Teams from "../components/teams/Teams";
import Header from "../components/header/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <h2 className="text-5xl my-16 container mx-auto font-semibold text-slate-800">
        Teams
      </h2>
      <Teams />
    </div>
  );
};

export default Home;
