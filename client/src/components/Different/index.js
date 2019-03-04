import React, { Component } from 'react';
import numOfRoutes from '../../services/numOfRoutes';
import fields from '../TrainForm/fields';
import TrainForm from '../TrainForm';
import RouteBox from '../RouteBox';
import Answer from '../Answer';

class Different extends Component {
  state = { start: '', end: '', maxDist: '', numberOfRoutes: '', validRoutes: [], showAnswer: false };

  handleChange = input => {
    this.setState({ [input.name]: input.value, showAnswer: false });
  }

  handleSubmit = () => {
    let start = this.state.start;
    let end = this.state.end;
    let maxDist = this.state.maxDist;
    const result = numOfRoutes(start, end, maxDist, this.props.db);
    start = this.state.start.toUpperCase().match(/[A-D]/) ? this.state.start.toUpperCase() : null;
    end = this.state.end.toUpperCase().match(/[B-E]/) ? this.state.end.toUpperCase() : null;
    maxDist = (!isNaN(this.state.maxDist)) ? this.state.maxDist : null;
    let answer;
    if (start && end && maxDist) {
      answer = `The total amount of routes possible from "${start}" to "${end}" less than ${maxDist} miles is: ${result.count}.`
    } else {
      answer = 'NO SUCH ROUTE';
    }

    this.setState(
      { numberOfRoutes:answer,
        validRoutes: result.validRoutes,
        showAnswer: true,
        start: '',
        end: '',
        stops: '',
        maxDist: ''
      });
  }

  render() {
    const formFields = fields.max([this.state.start, this.state.end, this.state.maxDist]);

    return (
      <div>
        <div style={{ textAlign: 'center' }} className="title-info">
          <h1>Find how many different routes are available within a given distance.</h1>
          <p> Enter the start point, finish point, and the maximum distance to get how many possible routes are available.</p>
        </div>

        <div className="bgTrain">
          <div className="row bgTrain-inside">
            <div className="col-md-4">
              <TrainForm fields={formFields} onSubmit={this.handleSubmit} onChange={this.handleChange}/>
            </div>

          <div className="col-md-8">
            <div className="col-md-12">
              <Answer showAnswer={this.state.showAnswer} answer={this.state.numberOfRoutes}/>
            </div>

            <RouteBox validRoutes={this.state.validRoutes} showAnswer={this.state.showAnswer}/>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Different;
