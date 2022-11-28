import React from "react";

const Hero = () => {
  return (
    <div className="hero position-relative">
      <div className="position-absolute top-50 hero-mid">
        <span className="start">
          Start <span>/</span>
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </span>
        <h1 className="title-name fw-bold">
          Hi, my name is Art Bernales
          <span>i design and develop websites</span>
        </h1>
        <span className="start get-in-touch mt-0">Get in touch . . .</span>
      </div>

      <img
        className="position-absolute bottom-0 w-100"
        src="../img/hero.svg"
        alt="hero"
      />
    </div>
  );
};

export default Hero;
