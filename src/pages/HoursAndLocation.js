import React from "react";
import "../HoursAndLocation.css";
import Navbar from "../components/Navbar";

function HoursAndLocation() {
  return (
    <div>
      <Navbar />
      <div className="HoursLocation">
        <div className="title">
          <h>HOURS & LOCATION</h>
        </div>
        <div className="Address">
          <p>12 Street</p>
          <p>City, State</p>
          <p>(123) 456-7890</p>
        </div>
        <div className="Schedule">
          <p>Lunch Monday - Friday // 11am - 3pm</p>
          <p>Dinner 7 Days // 5 - 10pm</p>
          <p>Brunch Saturday & Sunday // 11am - 3pm</p>
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

export default HoursAndLocation;
