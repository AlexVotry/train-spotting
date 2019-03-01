import React, { Component } from 'react';
import getDistance from '../../services/getDistance';
import Form from '../Form';
import Answer from '../Answer';

class Distance extends Component {
  state = { value: '', totalDistance: 0, showAnswer: false };

  handleChange = input => {
    this.setState({ value: input.value, showAnswer: false });
  }

  handleSubmit = () => {
    this.setState({ totalDistance: getDistance(this.state.value, this.props.db), showAnswer: true, value: '' });
  }

  render() {
    const formField = [{ label: 'Route', name: 'route', value: this.state.value }];
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Route Distance Info</h1>
        <h3>type in the route stops to find the total distance of the route: </h3>

        <div className="row">
          <Form fields={formField} onSubmit={this.handleSubmit} onChange={this.handleChange}/>

          <Answer showAnswer={this.state.showAnswer} answer={this.state.totalDistance}/>
        </div>
      </div>
    )
  }
}

export default Distance;
