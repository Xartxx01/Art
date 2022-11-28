import React from "react";

import { sidebar } from "../App";

const Header = () => {
  function openMenu() {
    document.querySelector(".sidebar").style.right = "-1rem";
  }

  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="container-fluid menu">
            <a className="navbar-brand logo" href="#">
              ArtDev.
            </a>

            <button
              onClick={openMenu}
              type="button"
              className="menu-icon"
              id="menu-open"
            >
              <ion-icon name="menu"></ion-icon>
            </button>

            <ul className="align-items-center hide-menu">
              <li>
                <a href="#">
                  START <span>/</span>
                  <ion-icon name="chevron-forward-outline"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#">
                  WORK <span>/</span>
                  <ion-icon name="chevron-forward-outline"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#">
                  ABOUT <span>/</span>
                  <ion-icon name="chevron-forward-outline"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#">
                  CONTACT <span>/</span>
                  <ion-icon name="chevron-forward-outline"></ion-icon>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
