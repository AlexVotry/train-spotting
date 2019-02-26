import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

  render() {
    return (
      <nav>
        <div className="nav-wrapper teal lighten-2">
          <Link to= {"/"}className="left brand-logo" >
            Train Info
          </Link>
          <ul className="right">
            <li>first</li>
            <li>Second</li>
            <li>Third</li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header;
