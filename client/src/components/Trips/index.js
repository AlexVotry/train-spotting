import React, { Component } from 'react';
import numOfStops from '../../services/numOfStops';


class Trips extends Component {
  state = { start: '', end: '', stops: '', numOfStops: 0, amt: 'max', showAnswer: false };

  handleChange = event => {
    console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value, showAnswer: false });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState(
      { numOfStops: numOfStops[this.state.amt](this.state.start,
        this.state.end, this.state.stops, this.props.db),
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

  renderContent() {
    return this.props.db.map(route => {
      return (
        <div className="card blue-grey darken-1" key={route._id}>
        <div className="card-content white-text">
          <span className="card-title">{route.start} - {route.end}</span>
          <p>{route.distance}</p>
        </div>
      </div>
      );
    });
  }

  render() {
    return (
      <div>
        <div style={{ textAlign: 'center' }}>
          <h1>Find the Number of trips available.</h1>
          <p> Enter the start point, finish point, and the number of stops to get how many possible routes there are.</p>
        </div>
        <div className="row">
          <form className="col s6" onSubmit={this.handleSubmit}>
            <label>
              Start:
              <input type="text" name="start" value={this.state.start} onChange={this.handleChange} />
            </label>

            <label>
              End:
              <input type="text" name="end" value={this.state.end} onChange={this.handleChange} />
            </label>

            <label>
              Stops:
              <input type="text" name="stops" value={this.state.stops} onChange={this.handleChange} />
            </label>
              <p>
              <label>
                <input name="amt" value="max" type="radio" onChange={this.handleChange} />
                <span>Maximum amt of stops</span>
              </label>
              </p>
              <p>
                <label>
                  <input name="amt" value="exact" type="radio" onChange={this.handleChange} />
                  <span>Exact amount of stops</span>
                </label>
              </p>
            <input className="red-text" type="submit" value="Submit" />
          </form>
        </div>

        <div className="col s6">
          {this.provideAnswer()}
        </div>
      </div>
    )
  }
}

export default Trips;
