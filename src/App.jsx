import React from "react";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Teams from "./components/teams/Teams";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
        <h2 className="text-5xl my-16 container mx-auto font-semibold text-slate-800">Teams</h2>
      <Teams />
    </div>
  );
};

export default App;
