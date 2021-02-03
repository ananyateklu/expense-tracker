import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./components.css";
import Menu from "./menubar";
import Logo from "./logoe.jpg"

export default class Header extends Component {
  constructor() {
    super();

  

    
  }


  
  
  render() {
    
    return (
      <header className="head">
         <Link className="logo" to="/"><img src={Logo} alt="logo"/></Link>
          <div className="sidebuttons">
          <Link className="links" to="/">
          <img className="expenses" src="https://img.icons8.com/ios-filled/50/ffffff/receipt-dollar.png"/>
          </Link>
          <Link className="links" to="/income">
        <img className="income" src="data:image/png;base64,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"/>
          </Link>
          {/* <Link className="links" to="/create">
            CExpenses
          </Link>
          <Link className="links" to="/createincome">
            Cincome
          </Link> */}
          <Link className="mobileLinks" to="/">
            <Menu />
          </Link>
          </div>
          
        
      </header>
    );
  }
}
