import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Work from "./components/Work";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work" element={<Work />} />
    </Routes>
  );
};

export default App;
