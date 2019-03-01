import React, { Component } from 'react';
import shortest from '../../services/shortest';
import fields from '../Form/fields';
import Form from '../Form';
import RouteBox from '../RouteBox';
import Answer from '../Answer';

class Shortest extends Component {
  state = { start: '', end: '', distance: 0, route: '', answer: '', showAnswer: false };

  handleChange = input => {
    this.setState({ [input.name]: input.value, showAnswer: false });
  }

  handleSubmit = () => {
    const start = this.state.start.toUpperCase();
    const end = this.state.end.toUpperCase();
    const result = shortest.dist(start, end, this.props.db);
    const answer = `The shortest distance from "${start}" to "${end}" is ${result.distance} miles`;

    this.setState(
      { answer: answer,
        distance: result.distance,
        route: result.route,
        showAnswer: true,
        start: '',
        end: '',
      });
  }

  render() {
    const formFields = fields.stops([this.state.start, this.state.end])
    const validRoute = [{route: this.state.route, distance: this.state.distance }]

    return (
      <div>
        <div style={{ textAlign: 'center' }}>
          <h1>Find the shortest distance.</h1>
          <p> Enter the start point, and the finish point, to what the shortest distance is.</p>
        </div>

        <div className="row">
          <Form fields={formFields} onSubmit={this.handleSubmit} onChange={this.handleChange} />

          <Answer showAnswer={this.state.showAnswer} answer={this.state.answer}/>

          <RouteBox validRoutes={validRoute} showAnswer={this.state.showAnswer}/>
        </div>
      </div>
    )
  }
}

export default Shortest;
