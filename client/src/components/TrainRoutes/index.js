import React, { Component } from 'react';

class TrainRoutes extends Component {

  renderContent() {
    return this.props.validRoutes.map(route => {
      return (
        <div className="card blue-grey darken-1" key={route._id}>
        <div className="card-content white-text">
          <span className="card-title">{route.start} - {route.end}</span>
          <p>{route.distance}</p>
        </div>
      </div>
      );
    });
  }

  render() {
    return (
      <div>
        {renderContent()}
      </div>
    )
  }
}

export default TrainRoutes;
