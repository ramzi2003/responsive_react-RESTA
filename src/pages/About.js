import React from "react";
import "../About.css";
import Navbar from "../components/Navbar";
import aboutPic from "../pics/aboutPic.jpg";

function About() {
  return (
    <div>
      <Navbar />
      <div className="about">
        <img src={aboutPic}></img>
        <div className="text">
          <p className="title">ABOUT</p>
          <p className="main-text">
            Located on a then-lonesome little corner under the "certain place"
            in "certain city", Diner opened its doors on New Year’s Eve
            twenty-two years ago. Owners "certain name" and bartended and ended
            most nights with a hand of cards and a pitcher of margaritas. Chef
            "certain name" wrote a daily menu committed to local, seasonal,
            sustainable foods, and built relationships with the farmers in
            upstate "certain name" and surrounding regions. "certain name" was
            server and salad maker, scrawling the menu across table after table,
            then jumping back behind the line to overdress a salad when duty
            called.
          </p>
          <p className="main-text">
            Resta expansive bar, a place to sit and read and eat and watch the
            world go by is the centerpiece of the room, a 90-year-old Pullman
            dining car. Warm wood and aged enamel, like being in the belly of a
            whale or the protected hold of a ship.
          </p>
          <p className="main-text">
            From the outside, Resta might have been mistaken for a modest
            endeavor. But Resta, open summer, spring, or snowstorm, has become,
            with the help of all the people, staff as well as guests, who
            continue to return to it, a room that glows from within. Over twenty
            years later Resta has carried on the traditions of its early days. A
            place of occasion. A touchstone for a neighborhood.
          </p>
          <p className="workers-text">Chef: Lastname Firstname Middlename</p>
          <p className="workers-text">General Manager: Lastname Firstname</p>
          <p className="workers-text">Services Managers: List of names</p>
        </div>
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
  );
}

export default About;
