import React, { Component } from 'react';

class RouteBox extends Component {

  renderContent() {
    // console.log('valid: ', this.props.validRoutes);
    if (this.props.showAnswer) {
      return this.props.validRoutes.map(({route, distance}) => {
        return (
          <div className="col s4" key={route}>
            <div className="card blue-grey darken-1" >
              <div className="card-content white-text">
                <span className="card-title">{route}</span>
                <p>{distance}</p>
              </div>
            </div>
          </div>
        );
      });
    }
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    )
  }
}

export default RouteBox;
