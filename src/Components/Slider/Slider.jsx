// import React, { useState } from "react";
import "./style.css";
import gwcImage from "../../Images/GWC_Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTableCellsLarge,
  faChartLine,
  faUserGroup,
  faFileLines,
  faCube,
  faComments,
  faRocket,
  faCircleInfo,
  faGear,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";

const Slider = () => {
  const icons = [
    <FontAwesomeIcon icon={faTableCellsLarge} style={{ color: "#ffffff" }} />,
    <FontAwesomeIcon icon={faChartLine} style={{ color: "#ffffff" }} />,
    <FontAwesomeIcon icon={faUserGroup} style={{ color: "#ffffff" }} />,
    <FontAwesomeIcon icon={faFileLines} style={{ color: "#ffffff" }} />,
    <FontAwesomeIcon icon={faCube} style={{ color: "#ffffff" }} />,
    <FontAwesomeIcon icon={faComments} style={{ color: "#ffffff" }} />,
    <FontAwesomeIcon icon={faRocket} style={{ color: "#ffffff" }} />,
  ];

  const names = [
    "Dashboard",
    "Analytic",
    "Customers",
    "Invoice",
    "Product",
    "Chat",
    "Upgrade",
  ];

  return (
    <div className="theme">
      <div className="logo">
        <img src={gwcImage} alt="GWC Logo" />
      </div>
      <div className="active">
      {icons.map((icon, index) => (
        <div className="data active" key={index}>
          <div className="icon">{icon}</div>
          <div className="name">{names[index]}</div>
        </div>
      ))}
      </div>
      <div className="footer">
        <div className="bottomIconDiv">
          <FontAwesomeIcon
            className="bottomIcon"
            icon={faGear}
            style={{ color: "#ffffff" }}
          />
          <span>Settings</span>
        </div>
        <div className="bottomIconDiv">
          <FontAwesomeIcon
            className="bottomIcon"
            icon={faCircleInfo}
            style={{ color: "#848486" }}
          />
          <span>FAQ</span>
        </div>
        <div className="bottomIconDiv">
          <FontAwesomeIcon
            className="bottomIcon"
            icon={faCircleQuestion}
            style={{ color: "#848486" }}
          />
          <span>Help</span>
        </div>
        <div className="nameCard">
          <div className="card">
            <img src="" alt="" />
          </div>
          <div className="userName">
            <p>Bharath</p>
            <p className="dept">Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
