import React from "react";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
