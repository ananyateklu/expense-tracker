import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./components.css";
import Menu from "./menubar";

export default class Header extends Component {
  render() {
    return (
      <header className="border-b p-3 flex justidy-between items-center">
        <div>
          <Link className="logo" to="/"><h4>Expense-Tracker</h4></Link>
          <Link className="links" to="/">
            Expenses
          </Link>
          <Link className="links" to="/income">
            Income
          </Link>
          <Link className="links" to="/create">
            CExpenses
          </Link>
          <Link className="links" to="/createincome">
            Cincome
          </Link>
          <Link className="mobileLinks" to="/">
            <Menu />
          </Link>
        </div>
      </header>
    );
  }
}
