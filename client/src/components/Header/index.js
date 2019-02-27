import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

  renderContent() {
    const links = [
      {link: "/distance", display: "Distance"},
      {link: "trips", display: "Number of Trips"},
      {link: "shortest", display: "Shortest Route"},
      {link: "different", display: "Different Routes"}
    ];

    return links.map(({link, display}) => <li key={link}><Link to={link}>{display}</Link></li>);
  }

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper teal lighten-2">
            <Link to= {"/"}className="brand-logo hide-on-med-and-down" >
              Train Info
            </Link>
            <Link to={"#"} data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons right">menu</i>
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              {this.renderContent()}
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          {this.renderContent()}
        </ul>
      </div>
    )
  }
}

export default Header;
