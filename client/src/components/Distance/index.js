import React, { Component } from 'react';
import getDistance from '../../services/getDistance';

class Distance extends Component {
  state = { value: '', totalDistance: 0, showAnswer: false };

  handleChange = event => {
    this.setState({ value: event.target.value, showAnswer: false });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ totalDistance: getDistance(this.state.value, this.props.db), showAnswer: true, value: '' });

  }

  provideAnswer = () => {
    if (this.state.showAnswer) {
      return (
        <h3>{this.state.totalDistance}</h3>
      );
    };
  }

  renderContent() {
    return this.props.db.map(route => {
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
      <div style={{ textAlign: 'center' }}>
        <h1>Route Distance Info</h1>
        <h3>type in the route stops to find the total distance of the route: </h3>
        <div className="row">
          <form className="col s6" onSubmit={this.handleSubmit}>
            <label>
              Route:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input className="red-text" type="submit" value="Submit" />
          </form>

          <div className="col s6">
            {this.provideAnswer()}
          </div>

        </div>
      </div>
    )
  }
}
// <ul className="col s5">
// {this.renderContent()}
// </ul>

export default Distance;
