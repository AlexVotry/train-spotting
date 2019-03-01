import React, { Component } from 'react';
import numOfStops from '../../services/numOfStops';
import fields from '../Form/fields';
import Form from '../Form';
import RouteBox from '../RouteBox';


class Trips extends Component {
  state = { start: '', end: '', stops: '', numOfStops: 0, amt: 'max', routes: [], showAnswer: false };

  handleChange = input => {
    this.setState({[ input.name]: input.value, showAnswer: false });
  }

  handleSubmit = () => {
    const result = numOfStops[this.state.amt](this.state.start,
      this.state.end, this.state.stops, this.props.db);
    this.setState(
      { numOfStops: result.count,
        routes: result.routes,
        showAnswer: true,
        start: '',
        end: '',
        stops: ''
      });
  }

  provideAnswer = () => {
    if (this.state.showAnswer) {
      return (
        <h3>{this.state.numOfStops}</h3>
      );
    };
  }

  render() {
    const formFields = fields.stops([this.state.start, this.state.end, this.state.stops]);
    const radioInfo = [{ name: 'max', label: 'Maximum amt' }, { name: 'exact', label: 'Exact amount' }]

    return (
      <div>
        <div style={{ textAlign: 'center' }}>
          <h1>Find the Number of trips available.</h1>
          <p> Enter the start point, finish point, and the number of stops to get how many possible routes there are.</p>
        </div>
        <div className="row">
          <Form fields={formFields} onSubmit={this.handleSubmit} onChange={this.handleChange} radio={radioInfo}/>
        </div>

        <div className="col s6">
          {this.provideAnswer()}
        </div>

        <div>
          <RouteBox validRoutes={this.state.routes} showAnswer={this.state.showAnswer}/>
        </div>
      </div>
    )
  }
}

export default Trips;
