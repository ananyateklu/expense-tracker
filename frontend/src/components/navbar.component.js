import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default class NavBar extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Navbar.Brand href="/">Expense-Tracker</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Expenses</Nav.Link>
                <Nav.Link href="/income">income</Nav.Link>
                <NavDropdown title="Add" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/create">expense</NavDropdown.Item>
                  <NavDropdown.Item href="/createincome">income</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="/user">Username</Nav.Link>

              </Nav>
            </Navbar.Collapse>
          </Navbar>
        );
    }

}