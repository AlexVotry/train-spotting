import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import _ from 'lodash';
import './style.css';

class RouteBox extends Component {

  renderContent() {
    const validRoutes = this.props.validRoutes;

    if (this.props.showAnswer && !_.isEmpty(validRoutes)) {
      return validRoutes.map(({route, distance}) => {
        return (
          <Card className="routeCard" key={route}>
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
    let scroll = '';
    let visible = '';

    if (this.props.validRoutes) {
      scroll = (this.props.validRoutes.length > 9) ? 'routeBoxes' : '';
      visible = (this.props.showAnswer) ? 'visible': '';
    }

    return (
      <div className={`col-md-12 ${scroll} fade-in ${visible}`}>
        {this.renderContent()}
      </div>
    )
  }
}

export default RouteBox;
