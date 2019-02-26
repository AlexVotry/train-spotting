import React, { Component } from 'react';
import { connect } from 'react-redux';

class Distance extends Component {

  renderContent() {
    return this.props.train.map(route => {
      return (
        <div className="card blue-grey darken-1" key="{route._id}">
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
      <div style={{ textAlign: 'center' }}>
        <h1>Route Distance Info</h1>
        <h3>trains: </h3>
        <ul>
          {this.renderContent()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ train }) {
  return { train };
}

export default connect(mapStateToProps)(Distance);
