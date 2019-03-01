import React, { Component } from 'react';
import numOfRoutes from '../../services/numOfRoutes';
import fields from '../Form/fields';
import Form from '../Form';

class Different extends Component {
  state = { start: '', end: '', maxDist: '', numberOfRoutes: '', validRoutes: [], showAnswer: false };

  handleChange = input => {
    this.setState({ [input.name]: input.value, showAnswer: false });
  }

  handleSubmit = () => {
    const result = numOfRoutes(this.state.start, this.state.end, this.state.maxDist, this.props.db);
    this.setState(
      { numberOfRoutes: result.count,
        validRoutes: result.validRoutes,
        showAnswer: true,
        start: '',
        end: '',
        stops: ''
      });
  }

  provideAnswer = () => {
    if (this.state.showAnswer) {
      return (
        <h3>Total Routes you can do: {this.state.numberOfRoutes}</h3>
      );
    };
  }

  renderContent() {
    return this.state.validRoutes.map(({route, distance}) => {
      return (
        <div className="card blue-grey darken-1" key={route}>
        <div className="card-content white-text">
          <span className="card-title">Route: {route}</span>
          <p>Distance: {distance}</p>
        </div>
      </div>
      );
    });
  }

  render() {
    const formFields = fields.max([this.state.start, this.state.end, this.state.maxDist]);

    return (
      <div>
        <div style={{ textAlign: 'center' }}>
          <h1>Find how many different routes are available within a given distance.</h1>
          <p> Enter the start point, finish point, and the maximum distance to get how many possible routes are available.</p>
        </div>
        <div className="row">
          <Form fields={formFields} onSubmit={this.handleSubmit} onChange={this.handleChange}/>

          <div className="col s6">
          {this.provideAnswer()}
          </div>

          <ul className="col s5">
          <li>{this.renderContent()}</li>
          </ul>
        </div>


      </div>
    )
  }

}

export default Different;
