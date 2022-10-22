import React from "react";
import "./topbar.css";
import logo from "../../assets/GSCornerlogo.png"

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <img className="logo" src={logo} alt=""/> 
        </div>
        <div className="topRight">
          <button className="topAvatar"> Log out</button>
        </div>
      </div>
    </div>
  );
}
