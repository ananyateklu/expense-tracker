import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./components.css";
import Menu from "./menubar";
import Logo from "./logoe.jpg";

export default class Header extends Component {
  render() {
    return (
      <header className="head">
        <Link className="logo" to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <div className="sidebuttons">
          <Link className="links" to="/">
            <img
              alt="expenses"
              className="expenses"
              src="https://img.icons8.com/ios-filled/50/ffffff/receipt-dollar.png"
            /><h6>Expense</h6>
          </Link>
          <Link className="links" to="/income">
            <img
              alt="income"
              className="income"
              src="https://img.icons8.com/fluent-systems-filled/48/ffffff/receive-euro.png"
            /> <h6>Income</h6>
          </Link>
          <Link className="links" to="/create">
            <img
              alt="addexpenses"
              className="addexpense"
              src="https://img.icons8.com/cute-clipart/64/ffffff/add-property.png"
            />
          </Link>
          <Link className="mobileLinks" to="/">
            <Menu />
          </Link>
        </div>
      </header>
    );
  }
}
