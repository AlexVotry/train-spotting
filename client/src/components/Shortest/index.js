import React, { Component } from 'react';
import shortest from '../../services/shortest';
import fields from '../Form/fields';
import Form from '../Form';


class Shortest extends Component {
  state = { start: '', end: '', distance: 0, route: '', showAnswer: false };

  handleChange = input => {
    this.setState({ [input.name]: input.value, showAnswer: false });
  }

  handleSubmit = () => {
    const result = shortest.dist(this.state.start,
      this.state.end, this.props.db);
    this.setState(
      { distance: result.distance,
        route: result.route,
        showAnswer: true,
        start: '',
        end: '',
      });
  }

  provideAnswer = () => {
    if (this.state.showAnswer) {
      return (
        <h3>{this.state.distance}</h3>
      );
    };
  }

  renderContent() {
    return (
      <div className="card blue-grey darken-1" key={this.state.route}>
      <div className="card-content white-text">
        <span className="card-title">Route: {this.state.route}</span>
        <p>Distance: {this.state.distance}</p>
      </div>
    </div>
    );
  }

  render() {
    const formFields = fields.stops([this.state.start, this.state.end])

    return (
      <div>
        <div style={{ textAlign: 'center' }}>
          <h1>Find the shortest distance.</h1>
          <p> Enter the start point, and the finish point, to what the shortest distance is.</p>
        </div>
        <div className="row">
          <Form fields={formFields} onSubmit={this.handleSubmit} onChange={this.handleChange} />
        </div>

        <div className="col s6">
          {this.renderContent()}
        </div>
      </div>
    )
  }
}

export default Shortest;
