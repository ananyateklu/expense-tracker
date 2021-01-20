import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./components.css"


function Menu() {
  return (
    <div className="menubar">
      {" "}
      <nav>
          <span className="text-xl">
          <FontAwesomeIcon 
          icon={faBars} 
          />
          </span>
       
      </nav>
    </div>
  );
}

export default Menu;
