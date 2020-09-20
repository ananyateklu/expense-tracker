import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-light navbar-expand-sm" style={{ backgroundColor: "#3d70b2" }}>
                <Link to="/" className="navbar-brand">ExpenseTracker</Link>
                <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                    <Link to="/" className="nav-link">Expenses</Link>
                    </li>
                    <li className="navbar-item">
                    <Link to="/create" className="nav-link"> Add New Expense</Link>
                    </li>
                    <li className="navbar-item">
                    <Link to="/user" className="nav-link">Create User</Link>
                    </li>
                </ul>
                    </div> 
            </nav>

        );
    }

}