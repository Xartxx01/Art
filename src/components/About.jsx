import React from "react";

const About = () => {
  return (
    <div className="about">
      <span
        className="fs-1 text-color title-margin-left align-items-center"
        style={{ display: "flex" }}
      >
        ABOUT <span style={{ marginLeft: ".5rem" }}>/</span>
        <ion-icon
          style={{ marginLeft: "-.7rem" }}
          name="chevron-forward-outline"
        ></ion-icon>
      </span>

      <div className="about__me" style={{ width: "100%", marginLeft: "32rem" }}>
        {/* ABOUT ME */}
        <div className="line-title d-flex align-items-center">
          <div
            className="landscape-line"
            style={{ filter: "brightness(.2)" }}
          ></div>
          <h4
            className="fs-2"
            style={{
              fontWeight: "400",
              marginLeft: "2rem",
              color: "#ffde59",
            }}
          >
            About Me
          </h4>
        </div>
        <h6 className="fs-3" style={{ marginTop: "2rem" }}>
          // I'm ambitious and I love new challenges.{" "}
          <span>// My vast variety of skills is continuously expanding.</span>
        </h6>
        <h3>
          <span
            style={{
              color: "#ffde59",
              filter: "brightness(.7)",
            }}
          >
            name :{" "}
          </span>
          Art Alfred Bernales
        </h3>
        <h3>
          <span style={{ color: "#ffde59", filter: "brightness(.7)" }}>
            dateOfBirth :{" "}
          </span>
          Nov 05, 2001
        </h3>
        <h3>
          <span style={{ color: "#ffde59", filter: "brightness(.7)" }}>
            age :{" "}
          </span>
          22
        </h3>

        {/* EXPERIENCE */}
        <div style={{ marginTop: "10rem" }}>
          <div className="line-title d-flex align-items-center">
            <div
              className="landscape-line"
              style={{ filter: "brightness(.2)" }}
            ></div>
            <h4
              className="fs-2"
              style={{
                fontWeight: "400",
                marginLeft: "2rem",
                color: "#ffde59",
              }}
            >
              Experience
            </h4>
          </div>
          <p
            className="w-50 fs-3"
            style={{
              color: "#ffde59",
              filter: "brightness(.8)",
              marginTop: "2rem",
            }}
          >
            For 2+ years, I have been continously learning in the field of
            front-end and experimenting with new technologies and frameworks,
            and here you can see a summary of my skills.
          </p>
          <div
            className="contact-600p d-flex align-items-center justify-content-start"
            style={{ gap: "4rem", marginTop: "4rem" }}
          >
            <div>
              <h4
                className="fs-3"
                style={{
                  fontWeight: "400",
                  color: "#ffde59",
                  filter: "brightness(.8)",
                }}
              >
                React
              </h4>
            </div>
            <div>
              <h4
                className="fs-3"
                style={{
                  fontWeight: "400",
                  color: "#ffde59",
                  filter: "brightness(.8)",
                }}
              >
                Javascript
              </h4>
            </div>
            <div>
              <h4
                className="fs-3"
                style={{
                  fontWeight: "400",
                  color: "#ffde59",
                  filter: "brightness(.8)",
                }}
              >
                Tailwind
              </h4>
            </div>
            <div>
              <h4
                className="fs-3"
                style={{
                  fontWeight: "400",
                  color: "#ffde59",
                  filter: "brightness(.8)",
                }}
              >
                Bootstrap
              </h4>
            </div>
            <div>
              <h4
                className="fs-3"
                style={{
                  fontWeight: "400",
                  color: "#ffde59",
                  filter: "brightness(.8)",
                }}
              >
                CSS
              </h4>
            </div>
            <div>
              <h4
                className="fs-3"
                style={{
                  fontWeight: "400",
                  color: "#ffde59",
                  filter: "brightness(.8)",
                }}
              >
                Html
              </h4>
            </div>
          </div>
        </div>

        {/* EDUCATION */}
        <div className="educ" style={{ marginTop: "10rem" }}>
          <div className="line-title d-flex align-items-center">
            <div
              className="landscape-line"
              style={{ filter: "brightness(.2)" }}
            ></div>
            <h4
              className="fs-2"
              style={{
                fontWeight: "400",
                marginLeft: "2rem",
                color: "#ffde59",
              }}
            >
              Education
            </h4>
          </div>
          <p
            className="fs-3 education-sub"
            style={{
              color: "#ffde59",
              filter: "brightness(.8)",
              marginTop: "2rem",
            }}
          >
            2020 - 2023 : Ama Computer College Makati : Bachelor's Degree -
            Information Technology
          </p>
          <p
            className="fs-3 education-sub-two"
            style={{ color: "#ffde59", filter: "brightness(.8)" }}
          >
            2018 - 2020 : Ama Computer College (SHS) Pasig : STEM
          </p>
          <p
            className="fs-3"
            style={{ color: "#ffde59", filter: "brightness(.8)" }}
          >
            2015 - 2018 : Villamor High School (JHS)
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
