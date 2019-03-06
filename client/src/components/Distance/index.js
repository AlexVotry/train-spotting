import React, { Component } from 'react';
import { connect } from 'react-redux';
import getDistance from '../../services/getDistance';
import TrainForm from '../TrainForm';
import RouteBox from '../RouteBox';
import Answer from '../Answer';

class Distance extends Component {
  state = { value: '', totalDistance: 0, showAnswer: false, answer: '', validRoutes: '' };

  handleChange = input => {
    this.setState({ value: input.value, showAnswer: false });
  }

  handleSubmit = () => {
    const route = getDistance(this.state.value, this.props.train);
    const answer = route.totalDistance === 'NO SUCH ROUTE' ? route.totalDistance : `The total distance for the route "${(this.state.value.toUpperCase())}" is ${route.totalDistance} miles.`
    this.setState({
      totalDistance: route.totalDistance,
      validRoutes: route.validRoutes,
      showAnswer: true,
       value: '',
       answer
     });
  }

  render() {
    const formField = [{ label: 'Route', name: 'route', value: this.state.value }];
    return (
      <div>
        <div  style={{ textAlign: 'center' }} className='title-info'>
          <h1>Route Distance Info</h1>
          <h3>Enter in the route stops to find the total distance of the route (ex: "A-B-C"): </h3>
        </div>

        <div className="bgTrain">
          <div className="row bgTrain-inside">
            <div className="col-md-4">
              <TrainForm fields={formField} onSubmit={this.handleSubmit} onChange={this.handleChange}/>
            </div>

            <div className="col-md-8">
              <div className="col-md-12">
                <Answer showAnswer={this.state.showAnswer} answer={this.state.answer}/>
              </div>

              <RouteBox validRoutes={this.state.validRoutes} showAnswer={this.state.showAnswer}/>
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

export default connect(mapStateToProps)(Distance);
