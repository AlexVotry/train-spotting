import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './style.css';

class Header extends Component {

  renderContent() {
    const links = [
      {link: "/distance", display: "Distance"},
      {link: "trips", display: "Number of Trips"},
      {link: "shortest", display: "Shortest Route"},
      {link: "different", display: "Different Routes"}
    ];

    return links.map(({link, display}) => <Nav.Link key={link} href={link}>{display}</Nav.Link>
    );
  }

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" className="navbar" variant="dark">
        <Navbar.Brand href={"/"}>Route List</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            {this.renderContent()}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Header;
