import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contacts" style={{ marginLeft: "32rem" }}>
        <span
          className="fs-1 text-color title-margin-top align-items-center"
          style={{ display: "flex" }}
        >
          CONTACT <span style={{ marginLeft: ".5rem" }}>/</span>
          <ion-icon
            style={{ marginLeft: "-.5rem" }}
            name="chevron-forward-outline"
          ></ion-icon>
        </span>

        <h1
          className="contact-subtitle"
          style={{
            fontSize: "7rem",
            color: "#fff",
            filter: "brightness(.7)",
            marginTop: "4rem",
          }}
        >
          Available for select{" "}
          <span style={{ display: "block" }}>freelance opportunities</span>
        </h1>
        <p
          className="contact-subparagraph"
          style={{
            fontSize: "3rem",
            marginTop: "4rem",
            color: "#fff",
            filter: "brightness(.7)",
          }}
        >
          Have an exciting project you need help with?{" "}
          <span style={{ display: "block" }}>
            Send me an email or contact me via instant{" "}
            <span style={{ display: "block" }}>message!</span>
          </span>
        </p>
        <h3
          style={{
            fontSize: "2rem",
            marginTop: "4rem",
            color: "#fff",
            filter: "brightness(.7)",
          }}
        >
          Mail me at
          <span
            style={{
              display: "block",
              fontSize: "1.6rem",
              marginTop: "1rem",
            }}
          >
            <a
              href="mailto:cacanindinart@gmail.com"
              style={{ color: "#ffde59" }}
            >
              Cacanindinart@gmail.com
            </a>
          </span>
        </h3>
        <h3
          style={{
            fontSize: "2rem",
            marginTop: "4rem",
            color: "#fff",
            filter: "brightness(.7)",
          }}
        >
          Find me on
        </h3>
        <div
          className="icons d-flex align-items-center"
          style={{ gap: "2rem", marginTop: "2rem" }}
        >
          <a
            href="#"
            className="d-flex align-items-center fs-4"
            style={{ textDecoration: "none", gap: "1rem" }}
          >
            <ion-icon
              style={{ fontSize: "2.6rem" }}
              name="logo-linkedin"
            ></ion-icon>
            Linkedin
          </a>
          <a
            href="#"
            className="d-flex align-items-center fs-4"
            style={{ textDecoration: "none", gap: "1rem" }}
          >
            <ion-icon
              style={{ fontSize: "2.6rem" }}
              name="logo-github"
            ></ion-icon>
            Github
          </a>
          <a
            href="#"
            className="d-flex align-items-center fs-4"
            style={{ textDecoration: "none", gap: "1rem" }}
          >
            <ion-icon
              style={{ fontSize: "2.6rem" }}
              name="logo-twitter"
            ></ion-icon>
            Twitter
          </a>
          <a
            href="#"
            className="d-flex align-items-center fs-4"
            style={{ textDecoration: "none", gap: "1rem" }}
          >
            <ion-icon
              name="logo-instagram"
              style={{ fontSize: "2.6rem" }}
            ></ion-icon>
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
