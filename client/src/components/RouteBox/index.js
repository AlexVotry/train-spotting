import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import _ from 'lodash';
import './style.css';

class RouteBox extends Component {

  renderContent() {
    if (this.props.showAnswer && !_.isEmpty(this.props.validRoutes)) {
      return this.props.validRoutes.map(({route, distance}) => {
        return (
          <Card className="card" key={route}>
            <Card.Body>
              <Card.Title>Route: {route.toUpperCase()}</Card.Title>
              <Card.Text>Distance: {distance} miles</Card.Text>
            </Card.Body>
          </Card>
        );
      });
    }
  }


  render() {
    const scroll = (this.props.validRoutes.length > 9) ? 'routeBoxes' : '';

    return (
      <div className={`col-md-12 ${scroll}`}>
        {this.renderContent()}
      </div>
    )
  }
}

export default RouteBox;
