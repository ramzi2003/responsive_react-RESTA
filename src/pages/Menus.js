import React, { useState } from "react";
import "../Menus.css";
import "../components/Navbar.js";
import lunchMenu from "../pics/lunchMenu.jpeg";
import dinnerMenu from "../pics/dinnerMenu.jpg";
import brunchMenu from "../pics/brunchMenu.jpg";
import Navbar from "../components/Navbar";

function Menus() {
  const [menuImage, setMenuImage] = useState(lunchMenu);

  const [isLunchActive, setIsLunchActive] = useState(true);
  const [isDinnerActive, setIsDinnerActive] = useState(false);
  const [isBrunchActive, setIsBrunchActive] = useState(false);

  const showLunch = () => {
    setMenuImage(lunchMenu);
    setIsLunchActive(true);
    setIsDinnerActive(false);
    setIsBrunchActive(false);
  };

  const showDinner = () => {
    setMenuImage(dinnerMenu);
    setIsLunchActive(false);
    setIsDinnerActive(true);
    setIsBrunchActive(false);
  };

  const showBrunch = () => {
    setMenuImage(brunchMenu);
    setIsLunchActive(false);
    setIsDinnerActive(false);
    setIsBrunchActive(true);
  };

  const today = new Date();

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div className="menus">
        <div className="menu-toggle-buttons">
          <button
            className={`lunch ${isLunchActive ? "active" : ""}`}
            onClick={showLunch}
          >
            LUNCH
          </button>
          <button
            className={`dinner ${isDinnerActive ? "active" : ""}`}
            onClick={showDinner}
          >
            DINNER
          </button>
          <button
            className={`brunch ${isBrunchActive ? "active" : ""}`}
            onClick={showBrunch}
          >
            BRUNCH
          </button>
        </div>
        <p>{today.toDateString()}</p>
        <div className="menu-select">
          <img src={menuImage} className="menu-image" />
        </div>
        <div className="footer">
          <div
            className="instagram"
            onClick={() =>
              (window.location.href =
                "https://instagram.com/sh_ramziiii?igshid=ZDdkNTZiNTM=")
            }
          >
            <ion-icon name="logo-instagram" size="large"></ion-icon>
          </div>
          <p>MADE BY RAMZI</p>
        </div>
      </div>
    </div>
  );
}

export default Menus;
