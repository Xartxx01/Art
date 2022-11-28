import React from "react";
import About from "./About";
import Contact from "./Contact";

import Header from "./Header";
import Hero from "./Hero";
import Sidebar from "./Sidebar";
import Work from "./Work";

const Home = () => {
  return (
    <div className="content position-relative">
      <div className="line position-absolute bottom-0 line--left"></div>
      <Header />
      <Sidebar />
      <Hero />
      <Work />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
