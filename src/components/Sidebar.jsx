import React from "react";

const Sidebar = () => {
  function closeMenu() {
    document.querySelector(".sidebar").style.right = "-68rem";
  }

  return (
    <div className="sidebar">
      <button onClick={closeMenu} type="button">
        <ion-icon name="close"></ion-icon>
      </button>

      <ul className="align-items-center nav-bar">
        <li>
          <a href="#" className="sidebar-menu">
            START <span>/</span>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </a>
        </li>
        <li>
          <a href="#" className="sidebar-menu">
            WORK <span>/</span>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </a>
        </li>
        <li>
          <a href="#" className="sidebar-menu">
            ABOUT <span>/</span>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </a>
        </li>
        <li>
          <a href="#" className="sidebar-menu">
            CONTACT <span>/</span>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
