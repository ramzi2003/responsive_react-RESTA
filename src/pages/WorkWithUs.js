import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../WorkWithUs.css";

function WorkWithUs() {
  const [fileName, setFileName] = useState("No file chosen");

  const handleFileUpload = (event) => {
    if (event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
    } else {
      setFileName("No file chosen");
    }
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div>
      <Navbar />
      <div className="work-with-us">
        <p className="title">WORK WITH US</p>
        <p className="text">
          We would love to have you join our team! Fill out the form below and
          we will be in touch.
        </p>

        <div className="input-div">
          <label>
            Name<span> - Required</span>
          </label>
          <input placeholder="Name" type="text" />
        </div>

        <div className="input-div">
          <label>
            Email<span> - Required</span>
          </label>
          <input placeholder="Email" type="email" />
        </div>

        <div className="input-div">
          <label>
            Phone Number<span> - Required</span>
          </label>
          <input placeholder="Phone Number" type="number" />
        </div>

        <div className="input-div cover-letter-div">
          <label>
            Cover Letter<span> - Required</span>
          </label>
          <textarea placeholder="Cover Letter"></textarea>
        </div>

        <div className="resume-div">
          <p className="last-text">
            Resume<span> - Required</span>
          </p>
          <div className="upload">
            <input type="file" onChange={handleFileUpload} />
          </div>
        </div>

        <button className="apply-btn" onClick={handleRefresh}>
          Apply{" "}
        </button>
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

export default WorkWithUs;
