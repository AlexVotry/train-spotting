import React, { Component } from 'react';
import { connect } from 'react-redux';
import numOfStops from '../../services/numOfStops';
import fields from '../TrainForm/fields';
import TrainForm from '../TrainForm';
import RouteBox from '../RouteBox';
import Answer from '../Answer';


class Trips extends Component {
  state = { start: '', end: '', stops: '', numOfStops: 0, amt: 'max', routes: [], showAnswer: false };

  handleChange = input => {
    this.setState({[ input.name]: input.value, showAnswer: false });
  }

  handleSubmit = () => {
    const result = numOfStops[this.state.amt](this.state.start,
      this.state.end, this.state.stops, this.props.train);
    const trips = result.count === 1 ? 'trip' : 'trips';
    console.log('result:',result);
    const stops = this.state.stops === 1 ? 'stop' : 'stops';
    const answer = result.count === 'NO SUCH ROUTE' ? result.count : `There are ${result.count} ${trips} available with ${this.state.stops} ${stops} that start at "${this.state.start.toUpperCase()}" and end at "${this.state.end.toUpperCase()}".`;

    this.setState(
      { numOfStops: answer,
        routes: result.routes,
        showAnswer: true,
        start: '',
        end: '',
        stops: ''
      }
    );
  }

  render() {
    const formFields = fields.stops([this.state.start, this.state.end, this.state.stops]);
    const radioInfo = [{ name: 'max', label: 'Maximum amt' }, { name: 'exact', label: 'Exact amount' }]

    return (
      <div>
        <div style={{ textAlign: 'center' }} className='title-info'>
          <h1>Find the Number of trips available.</h1>
          <p> Enter the start point, finish point, and the number of stops to get how many possible routes there are.</p>
        </div>

        <div className="bgTrain">
          <div className="row bgTrain-inside">
            <div className="col-md-4">
              <TrainForm fields={formFields} onSubmit={this.handleSubmit} onChange={this.handleChange} radio={radioInfo}/>
            </div>

            <div className="col-md-8">
              <div className="col-md-12">
                <Answer showAnswer={this.state.showAnswer} answer={this.state.numOfStops}/>
              </div>

              <RouteBox validRoutes={this.state.routes} showAnswer={this.state.showAnswer}/>
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

export default connect(mapStateToProps)(Trips);
