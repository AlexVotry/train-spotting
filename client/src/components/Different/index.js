import React, { Component } from 'react';
import numOfRoutes from '../../services/numOfRoutes';
import fields from '../Form/fields';
import Form from '../Form';
import RouteBox from '../RouteBox';
import Answer from '../Answer';

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

          <Answer showAnswer={this.state.showAnswer} answer={this.state.numberOfRoutes}/>

          <RouteBox validRoutes={this.state.validRoutes} showAnswer={this.state.showAnswer}/>
        </div>
      </div>
    )
  }

}

export default Different;
