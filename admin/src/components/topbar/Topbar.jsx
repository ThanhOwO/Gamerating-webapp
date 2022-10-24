import React from "react";
import "./topbar.css";
import logo from "../../assets/GSCornerlogo.png"
import { useContext } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import { logoutStart } from "../../context/authContext/AuthAction";

export default function Topbar() {

  const {dispatch} = useContext(AuthContext)
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <img className="logo" src={logo} alt=""/> 
        </div>
        <div className="topRight">
          <button className="topAvatar" onClick={() => dispatch(logoutStart())}> Log out</button>
        </div>
      </div>
    </div>
  );
}
