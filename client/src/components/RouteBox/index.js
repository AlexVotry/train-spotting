import React, { Component } from 'react';

class RouteBox extends Component {

  renderContent() {
    if (this.props.showAnswer) {
      return this.props.validRoutes.map(({route, distance}) => {
        return (
          <div className="col s4" key={route}>
            <div className="card blue-grey darken-1" >
              <div className="card-content white-text">
                <span className="card-title">Route: {route.toUpperCase()}</span>
                <p>Distance: {distance} miles</p>
              </div>
            </div>
          </div>
        );
      });
    }
  }

  render() {
    return (
      <div className="col s8 right">
        {this.renderContent()}
      </div>
    )
  }
}

export default RouteBox;
