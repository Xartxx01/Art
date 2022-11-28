import React from "react";

const Work = () => {
  return (
    <div className="work">
      <span
        className="fs-1 text-color title-margin-left title-margin-top align-items-center"
        style={{ display: "flex" }}
      >
        WORK <span style={{ marginLeft: ".5rem" }}>/</span>
        <ion-icon
          style={{ marginLeft: "-.5rem" }}
          name="chevron-forward-outline"
        ></ion-icon>
      </span>
      <h1
        className="work-web"
        style={{
          fontSize: "22rem",
          position: "absolute",
          right: "-2rem",
          fontWeight: "bold",
          color: "#d1d3d4",
          filter: "brightness(.1)",
        }}
      >
        WEB
      </h1>

      <div className="projects">
        <div id="project-one">
          {/* <img
          src="./img/featured/eCommerce-1.jpg"
          className="img-fluid project-ones"
          alt="image"
        /> */}
        </div>
        <div id="project-two">
          {/* <img
          src="./img/featured/eCommerce-1.jpg"
          className="img-fluid project-ones"
          alt="image"
        /> */}
        </div>
        <div id="project-three">
          {/* <img
          src="./img/featured/eCommerce-1.jpg"
          className="img-fluid project-ones"
          alt="image"
        /> */}
        </div>
        <div id="project-four">
          {/* <img
          src="./img/featured/eCommerce-1.jpg"
          className="img-fluid project-ones"
          alt="image"
        /> */}
        </div>
      </div>
    </div>
  );
};

export default Work;
