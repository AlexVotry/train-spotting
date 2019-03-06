import React, { Component } from 'react';
import { connect } from 'react-redux';
import shortest from '../../services/shortest';
import fields from '../TrainForm/fields';
import TrainForm from '../TrainForm';
import RouteBox from '../RouteBox';
import Answer from '../Answer';

class Shortest extends Component {
  state = { start: '', end: '', distance: 0, route: '', answer: '', showAnswer: false };

  handleChange = input => {
    this.setState({ [input.name]: input.value, showAnswer: false });
  }

  handleSubmit = () => {
    const start = this.state.start;
    const end = this.state.end;
    const result = shortest.dist(start, end, this.props.train);
    const answer = (result.distance === 'NO SUCH ROUTE') ? result.distance : `The shortest distance from "${start.toUpperCase()}" to "${end.toUpperCase()}" is ${result.distance} miles`;

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
    const validRoute = (this.state.route) ? [{route: this.state.route, distance: this.state.distance }] : [];

    return (
      <div>
        <div style={{ textAlign: 'center' }} className='title-info'>
          <h1>Find the shortest distance.</h1>
          <p> Enter the start point, and the finish point, to what the shortest distance is.</p>
        </div>

        <div className="bgTrain">
          <div className="row bgTrain-inside">
            <div className="col-md-4">
              <TrainForm fields={formFields} onSubmit={this.handleSubmit} onChange={this.handleChange} />
            </div>
            <div className="col-md-8">
              <div className="col-md-12">
                <Answer showAnswer={this.state.showAnswer} answer={this.state.answer}/>
              </div>
              <RouteBox validRoutes={validRoute} showAnswer={this.state.showAnswer}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ train }) {
  return { train };
}

export default connect(mapStateToProps)(Shortest);
